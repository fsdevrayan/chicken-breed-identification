import React, { useState, useEffect, useRef } from "react";
import defaultImage from "./images/no-image.jpg";
import * as tf from "@tensorflow/tfjs";
import feather from "feather-icons";

import { MOBILENET_CLASSES } from './mobilenet_classes'
import { CUSTOM_CLASSES } from './main_classes'

// const base_url = "https://chicken-breed-identifier.netlify.app"
const base_url = "http://localhost:3000"

function App() {
	const [imageReady, setImageReady] = useState(false);
	const [resultsReady, setResults] = useState(null);
	const [mainModel, setMainModel] = useState(null);
	const [preModel, setPreModel] = useState(null);
	const capture = useRef(null);
	const upload = useRef(null);
	const image = useRef(null);

	useEffect(() => {
		feather.replace();

		if (!window.indexedDB) {
			console.log(
				`Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.`
			);
		}

		const fileHandler = (files) => {
			let url = files.length > 0 && URL.createObjectURL(files[0]);
			if (files.length > 0) {
				image.current.src = URL.createObjectURL(files[0]);
				setImageReady(true);
			} else {
				image.current.src = defaultImage;
				URL.revokeObjectURL(url);
				setImageReady(false);
				setResults(null);
			}
		};

		upload.current.onchange = (event) => fileHandler(event.target.files);
		capture.current.onchange = (event) => fileHandler(event.target.files);
	}, []);


	const classifyBreed = async () => {
		let tensor = tf.browser
			.fromPixels(image.current)
			.reshape([224, 224, 3])
			.toFloat()
			.expandDims();

		let xtensor = tf.browser
			.fromPixels(image.current)
			.reshape([224, 224, 3])
			.expandDims(0)
			.div(225);

		if (preModel && mainModel) {
			let mobilenet = preModel.predict(xtensor).data()

			mobilenet.then((predictions) => {
				Array.from(predictions).forEach((e, i) => {
					if (MOBILENET_CLASSES[i] === 'hen') {
						if ((e * 100).toFixed(0) > 0) {
							mainModel.predict(tensor)
								.data()
								.then((predictions) => {
									Array.from(predictions).forEach(async (e, i) => {
										if (e === 1) {
											let rate = Array.from(
												await mainModel.predict(xtensor).dataSync()
											).filter((x, k) => {
												return i === k && x;
											});
											setResults({
												rate: `${(rate * 100).toFixed(0)}% accurate`,
												breed: CUSTOM_CLASSES[i],
											});
										}
									});
								});
						} else {
							setResults({
								rate: "",
								breed: "Not Classified!",
							});
						}
					}
				})
			});
		}
	}

	useEffect(() => {
		if (localStorage.getItem("mobilenet_model")) {
			tf.loadLayersModel("indexeddb://mobilenet_model").then((model) => {
				setPreModel(model)
			});
		} else {
			tf.loadLayersModel(`${base_url}/model/mobilenet_model/model.json?static=1`).then(
				(model) => {
					localStorage.setItem("mobilenet_model", true);
					model.save("indexeddb://mobilenet_model");
					setPreModel(model);
				}
			)
		}

		if (localStorage.getItem("custom_model")) {
			tf.loadLayersModel("indexeddb://custom_model").then((model) => {
				setMainModel(model)
			});
		} else {
			tf.loadLayersModel(`${base_url}/model/main_model/model.json?static=1`).then(
				(model) => {
					localStorage.setItem("custom_model", true);
					model.save("indexeddb://custom_model");
					setMainModel(model);
				}
			);
		}
	}, []);

	return (
		<div className="pwa-chicken-breed-identifier">
			<nav>
				<img
					src={`${base_url}/chicken-icon.png`}
					height="50"
					width="50"
					alt="Logo"
				/>
				<h3>Chicken Breed Identification</h3>
			</nav>
			<div className="content">
				<div className="preview">
					<img
						ref={image}
						src={defaultImage}
						alt="Chicken preview"
					/>
					<div className="results">
						<span className="breed">
							<p>
								{resultsReady != null &&
									resultsReady.breed}
							</p>
						</span>
						<span className="rate">
							<p>
								{resultsReady != null &&
									resultsReady.rate}
							</p>
						</span>
					</div>
					{!imageReady && resultsReady == null && (
						<p>No image to identify!</p>
					)}
					{imageReady && resultsReady == null && (
						<p> Image is ready to identify!</p>
					)}
				</div>
			</div>
			<div className="option">
				<div className="upload">
					<label className="icon">
						<input
							accept="image/*"
							ref={upload}
							type="file"
							hidden
						/>
						<span data-feather="upload"></span>
					</label>
				</div>
				<div className="line"></div>
				<div className="capture">
					<label className="icon">
						<input
							ref={capture}
							type="file"
							accept="image/*"
							capture="environment"
							hidden
						/>
						<span data-feather="camera"></span>
					</label>
				</div>
				{imageReady && (
					<button onClick={classifyBreed} className="identify">
						Identify breed
					</button>
				)}
			</div>
		</div>
	);
}

export default App;
