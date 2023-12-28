import React from 'react';
import homeBackground from '../../assets/images/home.png';

const HomePage = () => {
    const sectionStyle = {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover', // Cover the entire viewport
        backgroundPosition: 'center center', // Center the image
        backgroundRepeat: 'no-repeat', // Do not repeat the image
    };

    return <div style={sectionStyle} />;
};

export default HomePage;
