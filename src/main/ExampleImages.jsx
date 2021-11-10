import React from 'react'

/**
 * Import Images for examples
 */
import bpr from "./examples/Barred Plymouth Rock.jpg"
import bat from "./examples/Black Australorp.jpg"
import bsr from "./examples/Blackstar.jpg"
import bma from "./examples/Brahma.jpg"
import dbn from "./examples/Decalb Brown.jpg"
import hso from "./examples/Hubbard Sasso.jpg"
import jgt from "./examples/Jersey Giant.jpg"
import kbr from "./examples/Kabir.jpg"
import pbk from "./examples/Peruvian Black.jpg"
import rir from "./examples/Rhode Island Red.jpg"
import riw from "./examples/Rhode Island White.jpg"
import sho from "./examples/Shamo.jpg"

function ExampleImages() {
    return (
        <div className="modal fade" id="help-modal" data-bs-keyboard="false" data-bs-backdrop="false">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Examples of images can classify</h5>
                        <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row examples">
                            <div className='col-md-3 mt-3'>
                                <img src={bpr} alt={bpr} height="100%" width="100%" />
                                <p>Barred Plymouth Rock</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={bat} alt={bat} height="100%" width="100%" />
                                <p>Black Australorp</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={bsr} alt={bsr} height="100%" width="100%" />
                                <p>Blackstar</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={bma} alt={bma} height="100%" width="100%" />
                                <p>Brahma</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={dbn} alt={dbn} height="100%" width="100%" />
                                <p>Decalb Brown</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={hso} alt={hso} height="100%" width="100%" />
                                <p>Hubbard Sasso</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={jgt} alt={jgt} height="100%" width="100%" />
                                <p>Jersey Giant</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={kbr} alt={kbr} height="100%" width="100%" />
                                <p>Kabir</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={pbk} alt={pbk} height="100%" width="100%" />
                                <p>Peruvian Black</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={rir} alt={rir} height="100%" width="100%" />
                                <p>Rhode Island Red</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={riw} alt={riw} height="100%" width="100%" />
                                <p>Rhode Island White</p>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <img src={sho} alt={sho} height="100%" width="100%" />
                                <p>Shamo</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-lg btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExampleImages
