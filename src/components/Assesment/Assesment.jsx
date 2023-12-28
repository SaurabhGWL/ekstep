import React from 'react';
import { Box, Card, CardContent, Button, Typography, IconButton, Divider } from '@mui/material';
import back from '../../assets/images/back-arrow.svg';
import speak from '../../assets/images/ic-speak.svg';
import arrow from '../../assets/images/ic-arrow.svg';
import level from '../../assets/images/level.svg';
import elephant from '../../assets/images/elephant.svg';
import timer from '../../assets/images/timer.svg';
import practicebg from '../../assets/images/practice-bg.svg';
import assesmentbg from '../../assets/images/assesment-bg.svg';

const sectionStyle = {
    width: '100%',
    backgroundImage: `url(${practicebg})`,
    backgroundSize: 'cover', // Cover the entire viewport
    backgroundPosition: 'center center', // Center the image
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    height: '100vh',
    padding: '20px 100px',
    boxSizing: 'border-box'
};

const cardStyle = {
    backgroundImage: `url(${assesmentbg})`,
    backgroundSize: 'contain', // Cover the entire viewport
    backgroundPosition: 'left center', // Center the image
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    padding: '20px 100px',
    boxSizing: 'border-box',
    width: '85vw',
    height: '80vh',
    borderRadius: '15px'
};

const Assesment = () => {
    return (
        <Box sx={sectionStyle}>
            <IconButton>
                <img src={back} alt='back' style={{ height: '30px' }} />
            </IconButton>

            <Card sx={cardStyle}>
                <CardContent>
                    <Typography variant="h5" component="h4" sx={{ mb: 2, mt:4,fontSize: '30px', color: '#333F61', textAlign: 'center' }}>
                        You have good language skills
                    </Typography>
                    <Typography variant="h5" component="h4" sx={{  fontSize: '20px', color: '#333F61', textAlign: 'center', color:'#1CB0F6', width:'30%', margin:'0 auto',mb: '20px' }}>
                        Take the assessment to complete Level 1.
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" sx={{ background: 'linear-gradient(45deg, #EDB530 30%, #EDB530 90%)', color: 'black', m: 1, textTransform: 'none', width: '140px', fontWeight:600 }}>
                         <span style={{ marginLeft: '4px' }}>Start Assessment</span>
                        </Button>
                    </Box>
                </CardContent>
            </Card>


        </Box>
    );
};

export default Assesment;
