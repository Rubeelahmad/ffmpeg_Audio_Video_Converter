import { faCaretDown, faCaretUp, faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Audios } from './converter-file';
import ConverterButton from './converter-button';

function Music() {

    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <>
            <div className="card">
                <div className="card-header" style={{ cursor: 'pointer' }} title={`${show ? 'hide' : 'show'}`} onClick={handleShow}>
                    <div className="d-flex justify-content-between">
                        <h4><FontAwesomeIcon icon={faFileAudio} />&nbsp; <span className="text-danger">Music</span> Converter</h4>
                        {
                            show ? (<h4><FontAwesomeIcon icon={faCaretUp} /></h4>) : (<h4><FontAwesomeIcon icon={faCaretDown} /></h4>)
                        }
                    </div>
                </div>
                <div className="card-body">
                    <div className={`d-flex flex-wrap ${show ? 'd-block' : 'd-none'}`}>
                        {
                            Audios.map((audio, idx) => {
                                return (
                                    <ConverterButton property={audio} key={idx} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Music;
