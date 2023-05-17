import React, { Fragment, useState } from "react";
import {
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import KHiveLogo from "../../Assets/mainLogo";
import axios from "axios";
//@ts-ignore
import { A } from "hookrouter";
import { log } from "console";
import CustomDialog from "../DialogBox/Dialogbox";
const Footer = () => {
  const textdecor = useMediaQuery("(max-width:600px)");
  const [error_email, setError_Email] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  // console.log("testing api", axios.post('/emails-for-news'))
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const handleSubscribe = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShowError(false);
    // Make axios post request to the server
    console.log(email);
    if (!email.trim()) { // add this condition to check if email field is empty or contains only whitespace
      setShowError(true);
      setError_Email("Enter an Email");
      return; // return early if email is empty to prevent making the POST request
    }
    try {
      const response = await axios.post("/emails-for-news", {
        email: email,
      });

      // Handle response as needed
      console.log(response.data);

      // Reset form fields
      setShowDialog(true);
      setEmail("");
    } catch (error) {
      console.error(error);
      setShowError(true);
      setError_Email("Enter a valid Email");
    }
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/cyberhive-solutions/", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/cyberhive.solutions");
  };
  const handleInstagramClick = () => {
    // window.open("https://www.instagram.com/krypto_hive/");
  };
  const handleTwitterClick = () => {
    // window.open("https://twitter.com/Krypto_Hive");
  };
  return (
    <>
      <div>
        <Grid
          xl={12}
          sm={12}
          xs={12}
          md={12}
          rowGap={5}
          // columnGap={8}
          container
          style={{
            minHeight: "348px",
            width: "100%",
            backgroundColor: "#111827",
            padding: 56,
            // marginBottom:56
            display: "flex",
            justifyContent: "space-between",
            textAlign: textdecor ? "center" : "initial",
          }}
        >
          <Grid item xl={4} sm={5} xs={12} md={5}>
            <div>
              <KHiveLogo />

              {/* <Typography color={"#C22522"}>KRYPTOHIVE</Typography> */}
              <Typography
                color={"#FFF"}
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  marginTop: "12px ",
                  font: "Archivo",
                }}
              >
               Hive of innovation and technology
              </Typography>
              {/* <Button> */}
              <div style={{ marginTop: "16px " }}>
                {/* //@ts-ignore */}
                <IconButton
                  style={{ paddingLeft: "0", marginRight: "8px" }}
                  onClick={handleFacebookClick}
                >
                  <FacebookIcon
                    sx={{
                      color: "black",
                      fontSize: "25px",
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "#06B6D4", color: "WHITE" },
                    }}
                  />
                </IconButton>
                <IconButton
                  style={{ paddingLeft: "0", marginRight: "8px" }}
                  onClick={handleInstagramClick}
                >
                  <InstagramIcon
                    sx={{
                      color: "black",
                      fontSize: "25px",
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "#06B6D4", color: "white" },
                    }}
                  />
                </IconButton>
                <IconButton
                  style={{ paddingLeft: "0", marginRight: "8px" }}
                  onClick={handleLinkedInClick}
                >
                  <LinkedInIcon
                    sx={{
                      color: "black",
                      fontSize: "25px",
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "#06B6D4", color: "white" },
                    }}
                  />
                </IconButton>

                <IconButton
                  style={{ paddingLeft: "0", marginRight: "8px" }}
                  onClick={handleTwitterClick}
                >
                  <TwitterIcon
                    sx={{

                  
                      color: "black",
                      fontSize: "25px",
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "#06B6D4", color: "white" },
                    }}
                  />
                </IconButton>
              </div>

              {/* </Button> */}
            </div>
          </Grid>
          <Grid item xl={2} sm={5} xs={12} md={5}>
            <div >
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#FFFF",
                  font: "Archivo",
                }}
              >
                Company
              </Typography>
              <div>
                <A
                  href={"/"}
                  style={{ textDecoration: "none", font: "Archivo", display:'flex', width:'fit-content'  }}
                >
                  <Typography
                    style={{
                      fontWeight: "400",
                      color: "#FFFF",
                      fontSize: "16px",
                      marginTop: "12px",
                    }}
                  >
                    Home{" "}
                  </Typography>
                </A>
                <A
                  href={"/about"}
                  
                  style={{ textDecoration: "none", font: "Archivo", display:'flex', width:'fit-content' }}
                >
                  <Typography
                    style={{
                      fontWeight: "400",
                      color: "#FFFF",
                      fontSize: "16px",
                      marginTop: "10px",
                      
                    }}
                  >
                    About us{" "}
                  </Typography>
                </A>{" "}
                <A
                  href={"/services"}
                  style={{ textDecoration: "none", font: "Archivo", display:'flex', width:'fit-content' }}
                >
              
                  <Typography
                
                    sx={{
                      fontWeight: "400",
                      color: "#FFFF",
                      fontSize: "16px",
                      marginTop: "10px",
                      
                    }}
                  >
                    Services{" "}
                  </Typography>
                </A>{" "}
                <A
                  href={"/careers"}
                  style={{ textDecoration: "none", font: "Archivo", display:'flex', width:'fit-content' }}
                >
                  <Typography
                    style={{
                      fontWeight: "400",
                      color: "#FFFF",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    Careers{" "}
                  </Typography>
                </A>
              </div>
            </div>
          </Grid>
          <Grid item xl={3} sm={5} xs={12} md={5}>
            <div>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#FFFF",
                  font: "Archivo",
                }}
              >
                Contacts
              </Typography>

              {/* <Typography style={{ display: "flex" }}>
                {" "}
                <LocationOnIcon
                  style={{
                    color: "#FFFF",
                    marginRight: "9px",
                    marginTop: "12px",
                  }}
                />
                <Typography
                  style={{
                    color: "#FFFF",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginTop: "12px",
                    font: "Archivo",
                  }}
                >
                  Phase 4, Floor 2nd, Plaza, 148 Block D, Civic Center Bahria
                  Town, Rawalpindi
                </Typography>
              </Typography> */}
              {/* <Typography
                style={{
                  color: "#FFFF",
                  fontSize: "16px",
                  fontWeight: "400",
                  marginTop: "14px",
                  font: "Archivo",
                }}
              >
                <LocalPhoneIcon
                  style={{
                    color: "#FFFF",
                    marginRight: "12px",
                    marginBottom: "-3px",
                  }}
                />
                051 8776774
              </Typography> */}
              <Typography
                style={{
                  color: "#FFFF",
                  fontSize: "16px",
                  fontWeight: "400",
                  marginTop: "14px",
                  font: "Archivo",
                }}
              >
                
                <EmailIcon
                  style={{
                    color: "#FFFF",
                    marginRight: "12px",
                    marginBottom: "-6px",
                  }}
                />
                 <a href="mailto:info@cyberhive.com" style={{color: "white",textDecoration:"none"}}>info@cyberhive.com</a> 
                
              </Typography>
            </div>
          </Grid>

          <Grid item xl={2} sm={5} xs={12} md={5}>
            <div>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#FFFF",
                  font: "Archivo",
                }}
              >
                Newsletter
              </Typography>
              <Typography
                color={"#FFF"}
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  marginTop: "12px ",
                  font: "Archivo",
                }}
              >
                Why settle for less when Cyberhive is here, contact us now and
                boost your business in no time.
              </Typography>
            </div>

            <TextField
              error={showError}
              id="outlined-basic"
              size="small"
              fullWidth
              label="Email address"
              variant="filled"
              helperText={showError ? error_email : null}
              style={{
                backgroundColor: "white",
                marginTop: "20px",
                borderRadius: "5px",
                height: 47,
                marginBottom: 10,
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              FormHelperTextProps={{
                style: {
                  marginBottom: 24,
                },
              }}
              InputProps={{
                disableUnderline: true
              }}
            />
            <Button
              type="submit"
              variant="contained"
              
              fullWidth
              style={{ marginTop: "12px", height: "44px", font: "Archivo",backgroundColor:"#06B6D4" }}
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <div style={{ display: "flex", justifyContent: "center", }}>
          {" "}
          <CustomDialog
            title="Thank you for subscribing!"
            content=" As a subscriber, you'll get exclusive access to our expert insights, helpful tips, and exciting promotions. We promise to keep your inbox relevant and interesting, so you can focus on what matters most. "
            setOpen={setShowDialog}
            open={showDialog}
          />
        </div>
      </div>
      {/* <div> */}
      <Paper
        style={{
          width: "100%",
          height: "64px",
          backgroundColor: "#06B6D4",
          borderRadius: "0",
          justifyContent: "center",
          display: "flex",
          alignItems: 'center'
        }}
      >
        <Typography
          style={{
            display: "flex",
            fontSize: textdecor ? '12px' : '16px',
            color: "#FFFF",
            font: "Archivo",

          }}
        >
          ©&nbsp;2023&nbsp;CYBERHIVE&nbsp;-&nbsp;ALL&nbsp;RIGHTS&nbsp;RESERVED&nbsp;CYBERHIVE
        </Typography>
      </Paper>
      {/* </div> */}
    </>
  );
};

export default Footer;
