/* Route declarations for the app */

import * as reviews from '../views';

const routData = [
    {
        id: 'route-001',
        path: '/',
        component: reviews.HomePage,
        requiresAuth: true,
    },
    {
        id: 'route-002',
        path: '/discover',
        component: reviews.Discover,
        requiresAuth: true,
    },
    {
        id: 'route-003',
        path: '/discover-end',
        component: reviews.DiscoverEnd,
        requiresAuth: true,
    },
    {
        id: 'route-004',
        path: '/practice',
        component: reviews.PracticePage,
        requiresAuth: true,
    },
    {
        id: 'route-005',
        path: '/assesment',
        component: reviews.Assesment,
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
