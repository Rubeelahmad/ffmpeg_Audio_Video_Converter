import React from 'react';
import { useParams } from 'react-router';
import VideoDropzoneArea from '../../video-converter/converter-page/video-dropzone-area';
import MP4ToMP3DropzoneArea from './mp4-to-mp3-dropzone-area';

function MP4ToMP3ConverterUI(props) {

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <h1><span className="text-uppercase">MP4 TO MP3</span> Converter</h1>
                    <h6 className="lead">Convert your MP4 file to MP3, for free</h6>
                </div>
                <div className="mt-4 mb-4">
                    <VideoDropzoneArea converter="mp4-to-mp3" />
                </div>
            </div>
        </>
    )
}

export default MP4ToMP3ConverterUI;
