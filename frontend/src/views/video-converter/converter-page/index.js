import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import DropzoneArea from './video-dropzone-area';

function VideoConverterUI(props) {
    const { video_type } = useParams();
    const converterType = video_type.split("-")[0];

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <h1 style={{color: '#f33'}}><span className="text-uppercase">{converterType}</span> Converter</h1>
                    <h2 className="lead">Convert your Video to and from <span className="text-uppercase">{converterType}</span>, for free</h2>
                </div>
                <div className="mt-5">
                    <DropzoneArea converterType={converterType} converter="video" />
                </div>
            </div>
        </>
    )
}

export default VideoConverterUI;
