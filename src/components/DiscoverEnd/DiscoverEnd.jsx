import React from 'react';
import { Box, Card, CardContent, Button, Typography, IconButton, Divider } from '@mui/material';
import back from '../../assets/images/back-arrow.svg';
import discoverend from '../../assets/images/discover-end.svg';
import hurray from '../../assets/images/hurray.svg';

const sectionStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${discoverend})`,
  backgroundSize: 'cover', // Cover the entire viewport
  backgroundPosition: 'center center', // Center the image
  backgroundRepeat: 'no-repeat', // Do not repeat the image
  width: '85vw',
  height: '80vh',
  borderRadius: '15px'
};

const SpeakSentenceComponent = () => {
  return (
    <Box sx={{ background: 'linear-gradient(45deg, #5FDF9A 30%, #35C57C 90%)', minHeight: '100vh', padding: '20px 100px', boxSizing: 'border-box' }}>
      <IconButton>
        <img src={back} alt='back' style={{ height: '30px' }} />
      </IconButton>

      <Card sx={sectionStyle}>
        <CardContent>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:15, mb:4}}>
            <img src={hurray} alt='hurray' style={{ height: '30px' }} />
          </Box>
          <Typography variant="h4" component="p" sx={{ mb: 4, color: '#333F61', textAlign: 'center', fontSize: '20px', width:'60%', margin:'0 auto' }}>
            You have good language skills. You can start from Level 3. Let the learning journey begin!
            <br /> <br />
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', width:'60%', margin:'0 auto' }}>
            <Button variant="contained" sx={{ background: 'linear-gradient(45deg, #FF9050 30%, #E15404 90%)', color: 'white', mt: 4,  textTransform: 'none', fontWeight:600 }}>
              <span style={{ marginRight: '4px' }}>Let's Start</span>
            </Button>
          </Box>
        </CardContent>
      </Card>


    </Box>
  );
};

export default SpeakSentenceComponent;
