import React from 'react';
import { Box, Card, CardContent, Button, Typography, IconButton, Divider } from '@mui/material';
import back from '../../assets/images/back-arrow.svg';
import speak from '../../assets/images/ic-speak.svg';
import arrow from '../../assets/images/ic-arrow.svg';

const SpeakSentenceComponent = () => {
  return (
    <Box sx={{ backgroundColor: '#FFA726', minHeight: '100vh', padding: '20px 100px', boxSizing: 'border-box' }}>
      <IconButton>
        <img src={back} alt='back' style={{ height: '30px' }} />
      </IconButton>

      <Card sx={{ width: '85vw', height: '80vh', borderRadius: '15px' }}>
        <CardContent>
          <Typography variant="h5" component="h4" sx={{ mb: 4, mt: 4, fontSize: '20px', color: '#333F61', textAlign: 'center' }}>
            Speak the below sentences
          </Typography>

          <Typography variant="h4" component="p" sx={{ mb: 4, color: '#333F61', textAlign: 'center', fontSize: '30px' }}>
            One day, a dog was passing by a river.
            <br /> <br />
            He had a bone in his mouth.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" sx={{  background: 'linear-gradient(45deg, #A856FF 30%, #710EDC 90%)', color: 'white', m: 1, textTransform: 'none', width: '100px' }}>
              <img src={speak} alt='listen' height='15px' /><span  style={{marginLeft:'4px'}}>Listen</span>
            </Button>
            <Button variant="contained" sx={{ background: 'linear-gradient(45deg, #84F630 30%, #409500 90%)', color: 'white', m: 1, textTransform: 'none', width: '100px' }}>
              <img src={speak} alt='speak' height='15px' /><span style={{marginLeft:'4px'}}>Speak</span>
            </Button>
          </Box>
        </CardContent>
        <Divider sx={{ mt: '90px' }} />
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <Button variant="contained" sx={{  background: 'linear-gradient(45deg, #FF9050 30%, #E15404 90%)', color: 'white', mt: 4,mr:4, textTransform: 'none', width: '90px' }}>
            <span style={{marginRight:'4px'}}>Next</span><img src={arrow} alt='arrow' height='15px' />
          </Button>
        </Box>
      </Card>


    </Box>
  );
};

export default SpeakSentenceComponent;
