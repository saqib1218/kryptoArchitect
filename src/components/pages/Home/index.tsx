import React, { useEffect, useState } from "react";
import AboutSection from "./about-section";
import TechnologiesSection from "./technologies-section";
import TeamSection from "./team-section";
import ServicesSection from "./services-section";
import { useTheme } from "@mui/material/styles";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Myimage from "../../../Assets/images/Ctalines.svg";
// @ts-ignore
import Typed from "react-typed";
// @ts-ignore
import { A } from "hookrouter";
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";
import myimage from '../../../Assets/images/hero1.jpg'
import myimage2 from '../../../Assets/images/hero2.jpg'
import myimage3 from '../../../Assets/images/hero3.jpg'
import myimage4 from '../../../Assets/images/hero4.jpg'
// eslint-disable-next-line react-hooks/rules-of-hooks

const myVideo = require("../../../Assets/video/homeNew.mp4");
const bgImage = require("../../../Assets/images/bg.jpg");


const WebTexts = ["Web 3.0 Development", "Web 2.0 Development"];
const BlockchainTexts = [
  "IPFS | IoT | DAOs | Solidity | Holo | DApps",
  "Web API | RSS | SOAP |  JSON | WSDL |  AJAX",
];

const Home = () => {
const textdecor = useMediaQuery("(max-width:560px)");

  const typo0 = {
    font: "Archivo",
    fontWeight: "bold",
    color: "#FFFFFF",
    lineHeight: "60px",
    marginBottom: "16px",
  };
  const typo1 = {
    font: "Archivo",
    fontWeight: "bold",
    fontSize: "36px",
    color: "#1E293B",
    lineHeight: "36px",
    marginBottom: "16px",
  };
  const typo2 = {
    font: "Archivo",
    fontWeight: "400px",
    fontSize: "16px",
    color: "#4B5563",
    lineHeight: "16px",
  };
  const typo3 = {
    font: "Archivo",
    fontWeight: "bold",
    fontSize: "36px",
    color: "#FFFFFF",
    lineHeight: "36px",
    marginBottom: "16px",
  };
  const typo4 = {
    font: "Archivo",
    fontWeight: "400px",
    fontSize: "16px",
    color: "#ffffff",
    lineHeight: "16px",
  };
  const btn = {
    borderRadius: "6px",
    color: "#06B6D4",
    textTransform: "none",
    backgroundColor: "#FFFF",
    marginTop: "32px",
    "&:hover": {
      backgroundColor: "#FFF",
      borderColor: "#06B6D4",
    },
    
  };
  const btn1 = {
    borderRadius: "6px",
    
    textTransform: "none",
    backgroundColor: "#06B6D4",
    marginTop: "32px",
    "&:hover": {
      backgroundColor: "#06B6D4",
      borderColor: "#06B6D4",
    },
    
  };
  const btn2 = {
    borderRadius: "6px",
    
    textTransform: "none",
    backgroundColor: "#06B6D4",
    marginTop: "24px",
    "&:hover": {
      backgroundColor: "#06B6D4",
      borderColor: "#06B6D4",
    },
    
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // hides the element for screen sizes below 600px
  const isScreenSmall = useMediaQuery("(max-width:940px)");
  return (
    <>
      
        <div
          style={{ position: "relative", width: "100%", minHeight: "100px" }}
        >
       
<HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <div style={{ display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
  }}>
          <h1 style={{color:"#fff",fontSize:"48px",textAlign:"center",lineHeight:textdecor?"52px":"48px"}}>Revolutionize Your Business with Blockchain</h1>
          <h2 style={{color:"#FFF",fontWeight:400,fontSize:"24px",marginTop:-12,textAlign:"center",lineHeight:textdecor?"32px":"24px"}}>Empower your business with the transformative potential of blockchain technology.</h2>
        <div>
        <A href="/contact-us" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                sx={btn2}
                // style={{ backgroundColor: "#06B6D4" }}
              >
                Request&nbsp;A&nbsp;Quote
              </Button> 
            </A>
        </div>
         
        </div>
       
      </Overlay>

      <Slide
        // shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: myimage
        }}
      />

      <Slide
        // shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: myimage2
        }}
      />

      <Slide
        // shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: myimage3,width:"100%",height:"100%"
        }}
      />

      <Slide
        // shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: myimage4
        }}
      />
      <Nav />

      {/* <MenuNav /> */}
    </HeroSlider>
         
        </div>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item xs={11} sm={11} md={10} lg={10}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: "110px",
                marginBottom: "48px",
              }}
            >
              <Typography style={typo1}>About Cyberhive</Typography>
              <Typography style={typo2}>
                Excellence, Integrity, People Centric Approach
              </Typography>
            </div>
            <AboutSection />
          </Grid>

          <Grid item xs={11} sm={11} md={10} lg={10}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: "110px",
                marginBottom: "50px",
              }}
            >
              <Typography style={typo1}>Core Services</Typography>
              <Typography style={typo2}>
                Pioneering The Future Of Technology
              </Typography>
            </div>
            <ServicesSection />
          </Grid>

          <div
            style={{
              height: "374px",
              width: "100%",
              backgroundColor: "#06B6D4",
              marginTop: "95px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={Myimage}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                zIndex: 1,
                textAlign: "center",
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                marginTop: "0.5%",
              }}
            >
              <Typography style={typo3}>
                Ready For Your Digital Success?
              </Typography>
              <Typography style={typo4}>
                Our services solve any business problem.
              </Typography>
              <div>
              <A href="/contact-us" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large" sx={btn}>
                  Contact&nbsp;Us
                </Button>
              </A>
              </div>
            </div>
          </div>

          {/* {!isScreenSmall && ( */}
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: "110px",
                marginBottom: "50px",
              }}
            >
              <Typography style={typo1} sx={{ textAlign: "center" }}>
                Technologies We Work In
              </Typography>
              <Typography style={typo2}>
                Pioneering The Future Of Technology
              </Typography>
            </div>
            <TechnologiesSection />
          </Grid>
          {/* )} */}

          <Grid
            item
            xs={10}
            sm={10}
            md={10}
            lg={10}
            style={{ marginBottom: "55px" }}
          >
          

            <TeamSection />
          </Grid>
        </Grid>
      
    </>
  );
};

export default Home;

{
  /* <Lottie
               animationData={animationData}
               style={{ width: '100%', height: '500%', objectFit: 'cover', position: 'relative' }}
            /> */
}
