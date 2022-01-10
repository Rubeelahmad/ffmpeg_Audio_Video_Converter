import React from 'react';
import AudioUI from '../audio-converter';
import MP4ToMP3UI from '../mp4-to-mp3';
import VideoCompressorUI from '../video-compressor';
import VideoUI from '../video-converter';
import { Card } from 'react-bootstrap';

function Home() {
    return (
        <>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <VideoUI />
                </div>
                <div className="col-md-6 mt-5">
                    <AudioUI />
                </div>
                <div className="col-md-6 mt-5">
                    <VideoCompressorUI />
                </div>
                <div className="col-md-6 mt-5">
                    <MP4ToMP3UI />
                </div>
            </div>
            <div className='mt-5'>
                <Card>
                    <Card.Header>This is card header1</Card.Header>
                    <Card.Body>
                        This is card body 1
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Home;
