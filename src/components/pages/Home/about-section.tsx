import React from 'react'
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
// @ts-ignore 
import { A } from 'hookrouter';
import Polygon1 from '../../../Assets/polygon1';
import Ploygon2 from '../../../Assets/polygon2';
import Ploygon3 from '../../../Assets/polygon3';
import Polygon4 from '../../../Assets/polygon4';
import Polygon5 from '../../../Assets/polygon5';
import Polygon1red from '../../../Assets/polygon1red';
import Polygon2red from '../../../Assets/polygon2red';
import Polygon3red from '../../../Assets/polygon3red';
import Polygon4red from '../../../Assets/polygon4red';
import Polygon5red from '../../../Assets/polygon5red';




const typo1 = { font: 'Archivo', fontWeight: 'bold', fontSize: '24px', color: '#1E293B', lineHeight: "24px", marginBottom: '16px' }
const typo2 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#475569', lineHeight: '24px', marginBottom: '16px' }
const typo3 = { font: 'Archivo', fontWeight: '600px', fontSize: '24px', color: '#06B6D4', lineHeight: '24px', }
const typo4 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#475569', lineHeight: '24px', }

const badgesToDisplay = [
   {
      icon: { normal: <Polygon1 />, hover: <Polygon1red /> },
      heading: "5+",
      desc: "Years of Experience",

   },
   {
      icon: { normal: <Ploygon2 />, hover: <Polygon2red /> },
      heading: "100%",
      desc: "Client Satisfaction",

   },
   {
      icon: { normal: <Ploygon3 />, hover: <Polygon3red /> },
      heading: "50+",
      desc: "Countries we Served",

   },
   {
      icon: { normal: <Polygon4 />, hover: <Polygon4red /> },
      heading: "40+",
      desc: "Dedicated employees",

   },
   {
      icon: { normal: <Polygon5 />, hover: <Polygon5red /> },
      heading: "100% ",
      desc: "Minimal Timelines",

   },

]


const AboutSection = () => {
   const [hoveredItem, setHoveredItem] = React.useState(-1);

   const isScreenSmall = useMediaQuery('(max-width:500px)');

   return (
      <Grid container spacing={2} style={{ justifyContent: 'center', }}>

         <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{ alignItems: 'center' , display: 'flex', flexDirection: 'column' }}>
            <Typography style={typo1} sx={{ textAlign: "center" }}>
               Transforming your vision into a viable digital solution.
            </Typography>
            <Typography style={typo2} sx={{ textAlign:  "center"   }}>
            Cyberhive is a renowned company that specializes in providing advanced web 3.0 services to clients worldwide. Our team of experts is dedicated to developing innovative and creative products and services that cater to the unique needs of our clients.
            </Typography>
            <Typography style={typo2} sx={{ textAlign:"center"  }}>
            Our web 3.0 services include decentralized application development, blockchain development, and integration, smart contract development, IoT integration, web 3.0 project management and implementation, and web 3.0 consulting and strategy development.
            </Typography>
            <Typography style={typo2} sx={{ textAlign: "center" }}>
            We take pride in the quality of our work, and our satisfied clients around the world are a testament to our commitment to delivering exceptional web 3.0 services. As a technology leader, we are constantly exploring new avenues to expand our expertise and export quality software worldwide.
            </Typography>
         
         </Grid>

         <Grid item xs={10} sm={12} md={10} lg={8} xl={8} >
            <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>

               {badgesToDisplay.map((data, index) => (
                  <Grid item xs={6} sm={2.4} md={2.4} lg={2.4} xl={2.4}
                     style={{ display: 'grid', justifyItems: 'center', textAlign: 'center' }}>

                     <div onMouseEnter={() => { setHoveredItem(index) }} onMouseLeave={() => { setHoveredItem(-1) }}>
                        {hoveredItem === index ? data.icon.hover : data.icon.normal}
                     </div>

                     <Typography style={{ ...typo3,fontWeight:600,marginBottom:8, cursor: 'pointer' }}>{data.heading}</Typography>
                     <Typography style={{ ...typo4, cursor: 'pointer' }}>{data.desc}</Typography>

                  </Grid>
               ))}

<Button variant="contained" size='large' component={A} href={'/contact-us'} sx={{
               width: 238, borderRadius: '6px',height:"52px ", textTransform: 'none', backgroundColor: "#06B6D4", marginTop: '32px', '&:hover': {
                  backgroundColor: '#06B6D4',
                  borderColor: '#06B6D4',
               }
            }}  >
               Get&nbsp;in&nbsp;touch
            </Button>


            </Grid>
         </Grid>
        
      </Grid >
   )
}

export default AboutSection