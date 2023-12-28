/* Route declarations for the app */

import * as reviews from '../views';

const routData = [
    {
        id: 'route-001',
        path: '/discover',
        component: reviews.Discover,
        requiresAuth: true,
    },

    {
        id: 'route-000',
        path: '*',
        component: reviews.NoPageFound,
        requiresAuth: false,
    },
];

export default routData;
