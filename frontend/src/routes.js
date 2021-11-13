import React from 'react';

const Home = React.lazy(() => import('./views/home/Home'));
const AudioConverterUI = React.lazy(() => import('./views/audio-converter/converter-page'));
const MP4ToMP3ConverterUI = React.lazy(() => import('./views/mp4-to-mp3/converter-page'));
const VideoComressorUI = React.lazy(() => import('./views/video-compressor/converter-page'));
const VideoConverterUI = React.lazy(() => import('./views/video-converter/converter-page'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/video-compressor', name: 'Video Compressor', component: VideoComressorUI, exact: true },
    { path: '/video-converter/:video_type', name: 'Video Converter', component: VideoConverterUI, exact: true },
    { path: '/audio-converter/:audio_type', name: 'Audio Converter', component: AudioConverterUI, exact: true },
    { path: '/mp4-to-mp3', name: 'MP4 To MP3', component: MP4ToMP3ConverterUI, exact: true },
    // { path: '/:type', name: 'Converter', component: Converter, exact: true },
];

export default routes;
