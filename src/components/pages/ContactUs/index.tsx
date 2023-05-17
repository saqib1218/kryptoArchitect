import React, { useState } from "react";
import axios from "axios";
import myImageSmall from "./contactimg.svg";
import {
  Button,
  Grid,
  Paper,
  TextField,
  TextareaAutosize,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Textarea from "@mui/joy/Textarea";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";
import CustomDialog from "../../DialogBox/Dialogbox";
const ContactUs = () => {
  const textdecor = useMediaQuery("(max-width:600px)");
  const fonts = useMediaQuery("(max-width:600px)");
  const hight = useMediaQuery("(max-width:600px)");
  const direct = useMediaQuery("(max-width:600px)");
  const line = useMediaQuery("(max-width:600px)");
  const margntop = useMediaQuery("(max-width:600px");
  const btnwidth = useMediaQuery("(max-width:1500px");
  const btnwidth1 = useMediaQuery("(max-width:1173px");

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorSubject, setErrorSubject] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Reset error messages

    setErrorEmail("");
    setErrorPhone("");
setErrorName("")
setErrorMessage("")
setErrorSubject("")
    // Validation
    let isValid = true;
    if (!subject.trim()) {
      isValid = false;
      setErrorSubject("Enter your subject");
    }
    if (!message.trim()) {
      isValid = false;
      setErrorMessage("Enter your message");
    }
    if (!name.trim()) {
      isValid = false;
      setErrorName("Enter your name");
    }
    if (!email) {
      isValid = false;
      setErrorEmail("Enter an Email");
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;

      setErrorEmail("Enter a valid Email");
    }
    if (!phone.trim()) {
      isValid = false;
      setErrorPhone("Enter your phone number");
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)
    ) {
      isValid = false;
      setErrorPhone("Enter a valid phone number");
    }

    if (isValid) {
      try {
        const response = await axios.post("/messages", {
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
        });

        // Handle response as needed
        console.log(response.data);

        setShowDialog(true);

        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
              <img
  srcSet={`${myImageSmall} 400w`}
  sizes="(max-width: 600px) 400px, 800px"
  alt="My Image"
  style={{ width:"100%" }}
/>

        <div
          style={{
            position: "absolute",
            top: "40%",
          }}
        >
          <Typography
            style={{
              color: "#FFFF",
              fontSize: fonts ? "30px" : "50px",
              fontWeight: 600,
              font: "Archivo",
              //   maxWidth: "-webkit-fill-available",
            }}
          >
            Contact Us
          </Typography>
        </div>
      </div>
      <Grid
        container
        columnGap={4}
        rowGap={10}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: btnwidth ? "56px" : "110px",
          marginBottom: "110px",
        }}
      >
        <Grid
          item
          lg={5}
          xl={5}
          md={8}
          xs={11}
          sm={11}
          style={{
            textAlign: textdecor ? "center" : "initial",
            alignItems: textdecor ? "center" : "initial",
          }}
        >
          <Typography
            style={{
              font: "Archivo",
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: "100%",
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            style={{
              marginTop: "16px",
              font: "Archivo",
              fontSize: "16px",
              fontWeight: 400,
              color: "#4B5563",
              lineHeight: line ? "150%" : "100%",
              userSelect:"none"
            }}
          >
            For any queries, questions or concern, feel free to contacts us
            anytime.
          </Typography>
          <div>
            {/* <div
              style={{
                display: "flex",
                marginTop: textdecor ? "24px" : "40px",
                flexDirection: direct ? "column" : "initial",
                alignItems: textdecor ? "center" : "initial",
              }}
            >
              <Paper
                style={{
                  backgroundColor: "#F8FAFC",
                  width: 64,
                  height: 64,
                  borderRadius: "8px",
                  border: "2px solid #E2E8F0",
                  boxShadow: "none",
                  marginBottom: "16px",
                  marginLeft: textdecor ? "10px" : 10,
                }}
              >
                <LocationOnIcon
                  style={{
                    margin: "12",
                    color: "#06B6D4",
                    fontSize: 32,
                  }}
                />
              </Paper>{" "}
              <Typography
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  font: "Archivo",
                  marginLeft: textdecor ? "0px" : "24px",
                  lineHeight: "100%",
                }}
              >
                {" "}
                Address
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    font: "Archivo",
                    color: "#475569",
                    lineHeight: line ? "150%" : "100%",
                    marginTop: margntop ? "8px" : "12px",
                  }}
                >
                  Phase 4, Floor 2nd, Plaza, 148 Block D St, Civic Center Bahria
                  Town, Rawalpindi
                </Typography>
              </Typography>
            </div> */}
            <div
              style={{
                display: "flex",
                marginTop: textdecor ? "24px" : "40px",
                flexDirection: direct ? "column" : "initial",
                alignItems: textdecor ? "center" : "initial",
              }}
            >
              <Paper
                style={{
                  backgroundColor: "#F8FAFC",
                  width: 64,
                  height: 64,
                  borderRadius: "8px",
                  border: "2px solid #E2E8F0",
                  boxShadow: "none",
                  marginBottom: "15px",
                  marginLeft: textdecor ? "2px" : 10,
                }}
              >
                <EmailIcon
                  style={{
                    margin: "12",
                    color: "#06B6D4",
                    fontSize: 32,
                  }}
                />
              </Paper>{" "}
              <Typography
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  font: "Archivo",
                  marginLeft: textdecor ? "0px" : "24px",
                  lineHeight: "100%",
                }}
              >
                Email
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    font: "Archivo",
                    color: "#475569",
                    lineHeight: "100%",
                    marginTop: margntop ? "12px" : "16px",
                  }}
                >
                  info@cyberhive.com
                </Typography>
              </Typography>
            </div>
            {/* <div
              style={{
                display: "flex",
                marginTop: textdecor ? "24px" : "16px",
                flexDirection: direct ? "column" : "initial",
                alignItems: textdecor ? "center" : "initial",
              }}
            >
              <Paper
                style={{
                  backgroundColor: "#F8FAFC",
                  width: 64,
                  height: 64,
                  borderRadius: "8px",
                  border: "2px solid #E2E8F0",
                  boxShadow: "none",
                  marginBottom: "15px",
                  marginLeft: textdecor ? "2px" : 10,
                }}
              >
                <LocalPhoneIcon
                  style={{
                    margin: "12",
                    color: "#06B6D4",
                    fontSize: 32,
                  }}
                />
              </Paper>{" "}
              <Typography
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  font: "Archivo",
                  marginLeft: textdecor ? "0px" : "24px",
                  lineHeight: "100%",
                }}
              >
                {" "}
                Phone
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    font: "Archivo",
                    color: "#475569",
                    lineHeight: "100%",
                    marginTop: margntop ? "12px" : "16px",
                  }}
                >
                  051-8776774
                </Typography>
              </Typography>
            </div> */}
            <div
              style={{
                display: "flex",
                marginTop: textdecor ? "24px" : "16px",
                marginLeft: textdecor ? "5px" : 0,
                flexDirection: direct ? "column" : "initial",
                alignItems: textdecor ? "center" : "initial",
              }}
            >
              <Paper
                style={{
                  backgroundColor: "#F8FAFC",
                  width: 64,
                  height: 64,
                  borderRadius: "8px",
                  marginBottom: "15px",
                  marginLeft: textdecor ? "2px" : 10,

                  boxShadow: "none",
                  border: "2px solid #E2E8F0",
                }}
              >
                <AccessTimeFilledIcon
                  style={{
                    margin: "12",
                    color: "#06B6D4",
                    fontSize: 32,
                  }}
                />
              </Paper>{" "}
              <Typography
                style={{
                  display: textdecor ? "contents" : "initial",
                  fontSize: 18,
                  fontWeight: 700,
                  font: "Archivo",
                  marginLeft: textdecor ? "0px" : "24px",
                  lineHeight: "100%",
                }}
              >
                {" "}
                Working-Hours
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    font: "Archivo",
                    display: "flex",
                    color: "#1E293B",
                    lineHeight: "100%",
                    marginTop: margntop ? "12px" : "16px",
                  }}
                >
                  Monday-Friday:&nbsp;
                  <Typography
                    style={{
                      color: "#475569",
                      lineHeight: "100%",
                      fontSize: "16px",
                      font: "Archivo",
                      fontWeight: 500,
                    }}
                  >
                    10:00 am to 06:00 pm&nbsp;(GMT+5)
                  </Typography>
                </Typography>
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    font: "Archivo",
                    display: "flex",
                    color: "#1E293B",
                    lineHeight: "100%",
                    marginTop: margntop ? "12px" : "16px",
                  }}
                >
                  Saturday:&nbsp;
                  <Typography
                    style={{
                      color: "#475569",
                      lineHeight: "100%",
                      fontSize: "16px",
                      font: "Archivo",
                      fontWeight: 500,
                    }}
                  >
                    Closed
                  </Typography>
                </Typography>
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    font: "Archivo",
                    display: "flex",
                    color: "#1E293B",
                    lineHeight: "100%",
                    marginTop: margntop ? "12px" : "16px",
                  }}
                >
                  Sunday:&nbsp;
                  <Typography
                    style={{
                      color: "#475569",
                      lineHeight: "100%",
                      fontSize: "16px",
                      font: "Archivo",
                      fontWeight: 500,
                    }}
                  >
                    Closed
                  </Typography>
                </Typography>
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} xl={5} md={11} xs={11} sm={11}>
          <Paper
            style={{
              marginTop:btnwidth1 ?0:100,
              borderRadius: "16px",
              backgroundColor: "#F8FAFC",
              boxShadow: "none",
              border: "2px solid #E2E8F0",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", padding: 24 }}
            >
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: 600,
                  fontSize: 24,
                  textAlign: "center",
                  marginBottom: "24px",
                }}
              >
                Drop us a message{" "}
              </Typography>
              <div>
                <div style={{ display: textdecor ? "initial" : "flex" }}>
                  <TextField
                    error={errorName !== ""}

                    style={{
                      marginBottom: 24,
                      backgroundColor: "#FFFF",
                      marginRight: "24px",
                      width: "100%",
                      height: "58px",
                    }}
                    label="Your name"
                    variant="outlined"
                    helperText={errorName ? errorName : null}
                    FormHelperTextProps={{ style: { marginBottom: 36 } }}
                    value={name}
                    onChange={(e) => {
                      setErrorName("");
                      setName(e.target.value);
                    }}
                  />
                  <TextField
                    error={errorEmail !== ""}
                    style={{
                      marginBottom: 24,
                      backgroundColor: "#FFFF",
                      width: "100%",
                      height: "58px",
                    }}
                    label="Email"
                    variant="outlined"
                    helperText={errorEmail ? errorEmail : null}
                    FormHelperTextProps={{ style: { marginBottom: 36 } }}
                    value={email}
                    onChange={(e) => {
                      setErrorEmail("");
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div style={{ display: textdecor ? "initial" : "flex" }}>
                  <TextField
                    error={errorPhone !== ""}
                    style={{
                      marginBottom: 24,
                      backgroundColor: "#FFFF",
                      marginRight: "24px",
                      width: "100%",
                      height: "58px",
                    }}
                    label="Phone Number"
                    variant="outlined"
                    helperText={errorPhone ? errorPhone : null}
                    FormHelperTextProps={{ style: { marginBottom: "24px" } }}
                    value={phone}
                    onChange={(e) => {
                      setErrorPhone("");
                      setPhone(e.target.value);
                    }}
                  />
                  <TextField
                    error={errorSubject !== ""}

                    style={{
                      marginBottom: 24,
                      backgroundColor: "#FFFF",
                      width: "100% ",
                      height: "58px",
                    }}
                    label="Subject"
                    variant="outlined"
                    helperText={errorSubject ? errorSubject : null}
                    FormHelperTextProps={{ style: { marginBottom: 36 } }}
                    value={subject}
                    onChange={(e) => {
                      setErrorSubject("");
                      setSubject(e.target.value);
                    }}
                  />
                </div>
                <Textarea
                
                 error={errorMessage !== ""}
                  minRows={4}
                  placeholder="Lets us now what you are looking for"
                  variant="outlined"
                  value={message}
                
                  onChange={(e) => {
                    setErrorMessage("");
                    setMessage(e.target.value);
                  }}
                 
                  sx={{ borderRadius: 5, marginBottom: 2,   borderColor: errorMessage ? "#d32f2f" : "",
                  borderWidth: errorMessage ? "2px" : "", }}
                
                />
{errorMessage && <div style={{ color: "#d32f2f",marginBottom:"10px",marginTop:"-10px",fontSize:"0.75rem",marginLeft:10}}>{errorMessage}</div>}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                  <CustomDialog
                    title="Thank you for reaching out!"
                    content="Our team will get back to you as soon as possible. In the meantime, feel free to browse our website and learn more about our products/services. Thank you for your interest in our company! "
                    setOpen={setShowDialog}
                    open={showDialog}
                  />
              </div>
              <Button
                type="submit"
                sx={{ width: btnwidth ? "100%" : "150px",backgroundColor:"#06B6D4",'&:hover':{backgroundColor:"#06B6D4"}}}
                variant="contained"
                
              >
                Let's Talk
              </Button>
            </form>
          </Paper>
        </Grid>
        {/* <Grid
          item
          lg={8}
          xl={10}
          md={11}
          xs={11}
          sm={11}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.17814748231!2d73.12259401534256!3d33.54874745154155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedddda39340f%3A0x6624af86572d627a!2skryptohive!5e0!3m2!1sen!2s!4v1680839169858!5m2!1sen!2s"
            width="100%"
            height={textdecor ? "300px" : "400px"}
            style={{ borderRadius: 8, border: "2px solid #E2E8F0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid> */}
      </Grid>
    </>
  );
};

export default ContactUs;
