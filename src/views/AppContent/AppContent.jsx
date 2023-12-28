import React, { useEffect, Fragment } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import CustomizedSnackbars from '../../views/Snackbar/CustomSnackbar';

const AppContent = ({ routes }) => {
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <Fragment>
            <CustomizedSnackbars />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.id} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </Fragment>
    );
};

export default AppContent;
