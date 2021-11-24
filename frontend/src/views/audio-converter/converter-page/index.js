import React from 'react';
import { useParams } from 'react-router';
import VideoConverterUI from '../../video-converter/converter-page';
import VideoDropzoneArea from '../../video-converter/converter-page/video-dropzone-area';
import AudioDropzoneArea from './audio-dropzone-area';
// import DropzoneArea from './audio-dropzone-area';

function AudioConverterUI(props) {
    const { audio_type } = useParams();
    const converterType = audio_type.split("-")[0];

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <h1><span className="text-uppercase">{converterType}</span> Converter</h1>
                    <h6 className="lead">Convert your file to and from <span className="text-uppercase">{converterType}</span>, for free</h6>
                </div>
                <div className="mt-4 mb-4">
                    <VideoDropzoneArea converterType={converterType} converter="audio" />
                </div>
            </div>
        </>
    )
}

export default AudioConverterUI;
