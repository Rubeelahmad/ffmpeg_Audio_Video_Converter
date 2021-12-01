import React from 'react';
import { Card } from 'react-bootstrap';
import VideoCompressorForm from './video-compressor-dropzone-area';


function VideoComressorUI(props) {

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <h1 style={{color: '#f33'}}><span className="text-uppercase">Video</span> Compressor</h1>
                    <h6 className="lead">Compress your files for free</h6>
                </div>
                <div className="mt-4 mb-4">
                    <VideoCompressorForm />
                </div>
                <Card>
                    <Card.Header>Ths is Card Header</Card.Header>
                    <Card.Body>
                        This is card body
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default VideoComressorUI;
