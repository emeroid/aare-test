import React from 'react';

const Home = React.lazy(() => import("../pages/home"))

export const route = [
    { path : '/', exact : true, component : Home}
]
