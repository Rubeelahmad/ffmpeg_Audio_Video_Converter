import React from 'react';
import { useParams } from 'react-router';
import DropzoneArea from './video-dropzone-area';

function VideoConverterUI(props) {
    const { video_type } = useParams();
    const converterType = video_type.split("-")[0];

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <h1><span className="text-uppercase">{converterType}</span> Converter</h1>
                    <h6 className="lead">Convert your Video to and from <span className="text-uppercase">{converterType}</span>, for free</h6>
                </div>
                <div className="mt-4 mb-4">
                    <DropzoneArea converterType={converterType} />
                </div>
            </div>
        </>
    )
}

export default VideoConverterUI;
