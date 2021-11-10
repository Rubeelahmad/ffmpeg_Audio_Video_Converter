import React from 'react';
import VideoCompressorUi from './views/video-compressor/video-compressor-ui';

const Home = React.lazy(() => import('./views/home/Home'));
const Converter = React.lazy(() => import('./views/home/Converter'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/video-compressor', name: 'Video Compressor', component: VideoCompressorUi, exact: true },
    { path: '/:type', name: 'Converter', component: Converter, exact: true },
];

export default routes;
