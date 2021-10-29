import React from 'react';

// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/base/cards/Cards'));

const Home = React.lazy(() => import('./views/home/Home'));
const Converter = React.lazy(() => import('./views/home/Converter'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/:type', name: 'Converter', component: Converter, exact: true },
    //   { path: '/bulk-delete', name: 'Bulk Delete', component: BulkDelete },
];

export default routes;
