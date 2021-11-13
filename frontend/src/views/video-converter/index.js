import { faCaretDown, faCaretUp, faFileVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import { Videos } from '../components/converter-file';
import VideoConverterButton from './button';

function VideoUI(props) {
    const [show, setShow] = useState(true);

    const handleShow = useCallback(() => {
        return setShow(!show);
    }, [show])

    return (
        <>
            <div className="card">
                <div className="card-header" style={{ cursor: 'pointer' }} title={`${show ? 'hide' : 'show'}`} onClick={handleShow}>
                    <div className="d-flex justify-content-between">
                        <h4><FontAwesomeIcon icon={faFileVideo} />&nbsp; <span className="text-danger">Video</span> Converter</h4>
                        {
                            show ? (<h4><FontAwesomeIcon icon={faCaretUp} /></h4>) : (<h4><FontAwesomeIcon icon={faCaretDown} /></h4>)
                        }
                    </div>
                </div>
                <div className={`card-body`}>
                    <div className={`d-flex flex-wrap ${show ? 'd-block' : 'd-none'}`}>
                        {
                            Videos.map((video, idx) => {
                                return (
                                    <VideoConverterButton property={video} key={idx} {...props} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoUI;
