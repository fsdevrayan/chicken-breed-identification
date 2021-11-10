import React, { useEffect, useRef, useState } from 'react'

/**
 *  Import Libraries
 */
import 'bootstrap'
import * as tf from "@tensorflow/tfjs";

import {
    FiHelpCircle
} from 'react-icons/fi'

/**
 *  Import Styles
 */
import './style.css'

/**
 * Import Components
 */
import Loader from './Loader'

/**
 *  Import Classes
 */
import { MOBILENET } from './classes/mobilenet'
import { CUSTOM } from './classes/custom'

import ExampleImages from './ExampleImages'
import noPhoto from './assets/no-image.jpg'

// const base_url = "https://chicken-breed-identifier.netlify.app"
const base_url = "http://localhost:3000"
const defaultText = "Upload a Photo"

/**
 * 
 * @returns Main function of application
 */
function App() {
    /**
     *  Use react hooks
     */
    const [loading, setLoading] = useState(true)
    const [imageUrl, setImageUrl] = useState(noPhoto)

    const [text, setText] = useState(defaultText);
    const [customModel, setCustomModel] = useState(null);
    const [mobileNetModel, setMobileNetModel] = useState(null);

    const [results, setResults] = useState([])

    const image = useRef();
    const resultsPreview = useRef()

    /**
     *  First page loading : rendering content after 800 milliseconds
     */
    useEffect(() => setTimeout(() => setLoading(false), 800), [])

    /**
     *  Logging the loading status on console dev tools
     */
    // useEffect(() => console.log({ loading }), [loading])

    /**
     *  Load models
     */
    useEffect(() => {
        if (!mobileNetModel) {
            if (localStorage.getItem("mobilenet_model")) {
                tf.loadLayersModel("indexeddb://mobilenet_model").then((model) => {
                    setMobileNetModel(model)
                });
            } else {
                tf.loadLayersModel(`${base_url}/model/mobilenet/model.json?static=1`).then((model) => {
                    localStorage.setItem("mobilenet_model", true);
                    model.save("indexeddb://mobilenet_model");
                    setMobileNetModel(model);
                })
            }
        }

        if (mobileNetModel && !customModel) {
            if (localStorage.getItem("custom_model")) {
                tf.loadLayersModel("indexeddb://custom_model").then((model) => {
                    setCustomModel(model)
                });
            } else {
                tf.loadLayersModel(`${base_url}/model/custom/model.json?static=1`).then((model) => {
                    localStorage.setItem("custom_model", true);
                    model.save("indexeddb://custom_model");
                    setCustomModel(model);
                });
            }
        }

    }, [mobileNetModel, customModel])

    const uploadImageHandler = (event) => {
        let url = event.target.files.length > 0 && URL.createObjectURL(event.target.files[0]);

        if (event.target.files.length > 0) {
            let url = URL.createObjectURL(event.target.files[0]);
            image.current.src = url
            setText("Identify")
            setImageUrl(url)
        } else {
            URL.revokeObjectURL(url)
            setImageUrl(url)
        }
    }

    useEffect(() => {
        if (results)
            setLoading(true)
        setTimeout(() => {
            setLoading(false)
            image.current.src = imageUrl
        }, results.length * 300)
    }, [results, imageUrl])

    return loading ? <Loader /> :
        <div className='main'>
            <nav className="navbar navbar-expand-sm border-bottom">
                <div className="container-fluid">
                    <ul className="nav d-flex justify-content-around align-items-center">
                        <li className="nav-item">
                            <a className="nav-link navbar-title" href="!#">
                                Chicken Breed Identification
                            </a>
                        </li>
                        <li className="nav-item">
                            <ExampleImages />
                            <a className="nav-link" href="!#" data-bs-target="#help-modal" data-bs-toggle="modal">
                                <FiHelpCircle color="var(--platinum)" size="24" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="d-flex justify-content-center align-items-center flex-column">
                <img ref={image} src={noPhoto} className="mt-5" height="224px" width="224px" alt="Chicken" />
                <div className="container mt-5">
                    <div className="input-group">
                        <input onChange={uploadImageHandler} accept="image/*" type="file" className="form-control rounded-0" />
                        <button onClick={async () => {
                            if (text.toLocaleLowerCase() === 'identify') {
                                let xtensor = tf.browser
                                    .fromPixels(image.current)
                                    .reshape([224, 224, 3])
                                    .expandDims(0)
                                    .div(225);

                                if (mobileNetModel && customModel) {
                                    let mobilenet = mobileNetModel.predict(xtensor).data()

                                    mobilenet.then((predictions) => {
                                        Array.from(predictions).forEach((e, i) => {
                                            if (MOBILENET[i] === 'hen') {
                                                if ((e * 100).toFixed(0) > 0) {
                                                    customModel.predict(xtensor).data().then((predictions) => {
                                                        let predicts = []
                                                        predictions.forEach((p, i) => {
                                                            predicts.push({ accuracy: (p * 100).toFixed(2), breed: CUSTOM[i] })
                                                        })
                                                        setResults(predicts.sort((a, b) => a.accuracy - b.accuracy).splice(9))
                                                    });
                                                } else {
                                                    setResults([{
                                                        breed: "Not classified",
                                                        accuracy: ""
                                                    }]);
                                                }
                                            }
                                        })
                                    });
                                }
                            }
                        }} className="btn btn-predict rounded-0">{text}</button>
                    </div>
                    <table className="table rounded-0 table-bordered">
                        <thead>
                            <tr className="text-center">
                                <th className="p-3">Breed</th>
                                <th className="p-3">Accuracy</th>
                            </tr>
                        </thead>
                        <tbody ref={resultsPreview}>
                            {results.length > 0 && results.map((prediction, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="p-2">{prediction.breed}</td>
                                        <td className="p-2">{prediction.accuracy}%{prediction.accuracy && ` accurate`}</td>
                                    </tr>
                                )
                            })}
                            {results.length <= 0 &&
                                <tr>
                                    <td className="p-2 text-center" colSpan="2">No prediction yet...</td>
                                </tr>}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
}

export default App
