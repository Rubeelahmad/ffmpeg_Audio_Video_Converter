import React from 'react';
import Music from '../components/music';
import Video from '../components/video';
import VideoCompressor from '../video-compressor/video-compressor';

function Home() {
    return(
        <>
            <div className="row">
                <div className="col-md-6 mt-5 mb-5">
                    <Video />
                </div>
                <div className="col-md-6 mt-5 mb-5">
                    <Music />
                </div>
                <div className="col-md-6 mt-5 mb-5">
                    <VideoCompressor />
                </div>
            </div>
        </>
    )
}

export default Home;
