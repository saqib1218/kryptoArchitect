import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const bgImage = require('../../../Assets/images/Nadeem.jpg');

const Dummycard = () => {
   return (
      <Paper style={{
         width: '350px',
         height: 460,
         borderRadius: 16,
         backgroundColor: '#E2E8F0',
         alignItems: "end",
         overflow: "visible",

      }}>
         <img
            src={bgImage}
            alt="ned"
            style={{ width: '350px', height: '80%', borderRadius: '16px 16px 0 0', objectFit: 'cover', }}
         />
         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '20%', borderRadius: '0 0 16px 16px', }}>
            <Typography align="center" sx={{ fontSize: '20px', fontWeight: "bold", color: '#1E293B' }}>
               csdc
            </Typography>
            <Typography align="center" sx={{ fontSize: '16px', fontWeight: "400px", color: '#C22522' }}>
               scac
            </Typography>
         </div>
      </Paper>
   )
}

export default Dummycard