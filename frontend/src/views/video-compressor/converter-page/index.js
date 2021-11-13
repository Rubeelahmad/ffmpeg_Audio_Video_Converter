import React from 'react';
import VideoCompressorForm from './video-compressor-dropzone-area';


function VideoComressorUI(props) {

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <h1><span className="text-uppercase">Video Compressor</span></h1>
                    <h6 className="lead">Compress your files for free</h6>
                </div>
                <div className="mt-4 mb-4">
                    <VideoCompressorForm />
                </div>
            </div>
        </>
    )
}

export default VideoComressorUI;
