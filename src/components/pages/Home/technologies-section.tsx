//@ts-ignore
import React, { useState, useEffect } from "react";
import {
  MenuItem,
  Paper,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Frontend1 from "../../../Assets/icons/Tech Icons/Fontend/polygon1";
import Frontend2 from "../../../Assets/icons/Tech Icons/Fontend/polygon2";
import Frontend3 from "../../../Assets/icons/Tech Icons/Fontend/polygon3";
import Frontend4 from "../../../Assets/icons/Tech Icons/Fontend/polygon4";
import Frontend5 from "../../../Assets/icons/Tech Icons/Fontend/polygon5";
import Frontend6 from "../../../Assets/icons/Tech Icons/Fontend/polygon6";
import Frontend7 from "../../../Assets/icons/Tech Icons/Fontend/polygon7";
import Frontend8 from "../../../Assets/icons/Tech Icons/Fontend/polygon8";
import Frontend9 from "../../../Assets/icons/Tech Icons/Fontend/polygon9";

import Backend1 from "../../../Assets/icons/Tech Icons/Backend/backend1";
import Backend2 from "../../../Assets/icons/Tech Icons/Backend/backend2";
import Backend3 from "../../../Assets/icons/Tech Icons/Backend/backend3";
import Backend4 from "../../../Assets/icons/Tech Icons/Backend/backend4";
import Backend5 from "../../../Assets/icons/Tech Icons/Backend/backend5";

import Mobile1 from "../../../Assets/icons/Tech Icons/Mobile/mobile1";
import Mobile2 from "../../../Assets/icons/Tech Icons/Mobile/mobile2";
import Mobile3 from "../../../Assets/icons/Tech Icons/Mobile/mobile3";
import Mobile4 from "../../../Assets/icons/Tech Icons/Mobile/mobile4";
import Mobile5 from "../../../Assets/icons/Tech Icons/Mobile/monile5";

import Database1 from "../../../Assets/icons/Tech Icons/Database/database1";
import Database2 from "../../../Assets/icons/Tech Icons/Database/database2";
import Database3 from "../../../Assets/icons/Tech Icons/Database/database3";
import Database4 from "../../../Assets/icons/Tech Icons/Database/database4";
import Database5 from "../../../Assets/icons/Tech Icons/Database/database5";

import Dev1 from "../../../Assets/icons/Tech Icons/Devops/dev1";
import Dev2 from "../../../Assets/icons/Tech Icons/Devops/dev2";
import Dev3 from "../../../Assets/icons/Tech Icons/Devops/dev3";
import Dev4 from "../../../Assets/icons/Tech Icons/Devops/dev4";
import Dev5 from "../../../Assets/icons/Tech Icons/Devops/dev5";
import Divider from "@mui/material/Divider";

import Polygon1 from "../../../Assets/icons/Tech Icons/Blockchain/polygon1";
import Polygon2 from "../../../Assets/icons/Tech Icons/Blockchain/polygon2";
import Polygon3 from "../../../Assets/icons/Tech Icons/Blockchain/polygon3";
import Polygon4 from "../../../Assets/icons/Tech Icons/Blockchain/polygon4";
import Polygon5 from "../../../Assets/icons/Tech Icons/Blockchain/polygon5";
import Polygon6 from "../../../Assets/icons/Tech Icons/Blockchain/polygon6";
import Polygon7 from "../../../Assets/icons/Tech Icons/Blockchain/polygon7";
import Polygon8 from "../../../Assets/icons/Tech Icons/Blockchain/polygon8";
import Polygon9 from "../../../Assets/icons/Tech Icons/Blockchain/polygon9";
import Polygon10 from "../../../Assets/icons/Tech Icons/Blockchain/polygon10";
import Polygon11 from "./../../../Assets/icons/Tech Icons/Blockchain/polygon11";
import Polygon12 from "../../../Assets/icons/Tech Icons/Blockchain/polygon12";
import Polygon13 from "../../../Assets/icons/Tech Icons/Blockchain/polygon13";
import Polygon14 from "../../../Assets/icons/Tech Icons/Blockchain/polygon14";
import Polygon15 from "../../../Assets/icons/Tech Icons/Blockchain/polygon15";
import Polygon16 from "../../../Assets/icons/Tech Icons/Blockchain/polygon16";
import Polygon17 from "../../../Assets/icons/Tech Icons/Blockchain/polygon17";
import Polygon18 from "../../../Assets/icons/Tech Icons/Blockchain/polygon18";
import Polygon19 from "../../../Assets/icons/Tech Icons/Blockchain/polygon19";
import Polygon20 from "../../../Assets/icons/Tech Icons/Blockchain/polygon20";
import Polygon21 from "../../../Assets/icons/Tech Icons/Blockchain/polygon21";
import Polygon22 from "../../../Assets/icons/Tech Icons/Blockchain/polygon22";
import Polygon23 from "../../../Assets/icons/Tech Icons/Blockchain/polygon23";
import Polygon24 from "../../../Assets/icons/Tech Icons/Blockchain/polygon24";
import Polygon25 from "../../../Assets/icons/Tech Icons/Blockchain/polygon25";

import Test1 from "../../../Assets/icons/Tech Icons/Testing tools/test1";
import Test2 from "../../../Assets/icons/Tech Icons/Testing tools/test2";
import Test3 from "../../../Assets/icons/Tech Icons/Testing tools/test3";

const typo = {
  font: "Archivo",
  fontWeight: "400px",
  fontSize: "16px",
  color: "#475569",
};
const div2 = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  minHeight: "80px",
  justifyContent: "center",
};

type Option =
  | "Blockchain"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "Devops"
  | "Testing Tools";

const optionIcons = {
  Blockchain: [
    <Polygon1 />,
    <Polygon2 />,
    <Polygon3 />,
    <Polygon4 />,
    <Polygon5 />,
    <Polygon6 />,
    <Polygon7 />,
    <Polygon8 />,
    <Polygon9 />,
    <Polygon10 />,
    <Polygon11 />,
    <Polygon12 />,
    <Polygon13 />,
    <Polygon14 />,
    <Polygon15 />,
    <Polygon16 />,
    <Polygon17 />,
    <Polygon18 />,
    <Polygon19 />,
    <Polygon20 />,
    <Polygon21 />,
    <Polygon22 />,
    <Polygon23 />,
    <Polygon24 />,
    <Polygon25 />,
  ],
  Frontend: [
    <Frontend1 />,
    <Frontend2 />,
    <Frontend3 />,
    <Frontend4 />,
    <Frontend5 />,
    <Frontend6 />,
    <Frontend7 />,
    <Frontend8 />,
    <Frontend9 />,
  ],
  Backend: [
    <Backend1 />,
    <Backend2 />,
    <Backend3 />,
    <Backend4 />,
    <Backend5 />,
  ],
  Mobile: [ <Mobile2 />, <Mobile3 />, <Mobile4 />, <Mobile5 />],
  Database: [
    <Database1 />,
    <Database2 />,
    <Database3 />,
    <Database4 />,
    <Database5 />,
  ],
  Devops: [<Dev1 />, <Dev2 />, <Dev3 />, <Dev4 />, <Dev5 />],

  "Testing Tools": [<Test1 />, <Test2 />, <Test3 />],
};

const renderIcons = (option: Option) => {
  return optionIcons[option]?.map((icon, index) => (
    <Grid item xs={5} sm={4} md={3} lg={2}>
      <div key={index}>{icon}</div>
    </Grid>
  ));
};

const TechnologiesSection = () => {
  const options = [
    "Blockchain",
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "Devops",
    
    "Testing Tools",
  ];

  const [selectedOption, setSelectedOption] = useState<Option>("Frontend");
  const [isPaperHovered, setIsPaperHovered] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm")); // shows for screen sizes above 960px
  const isMobile = useMediaQuery("(max-width:600px)"); // shows for screen sizes between 600px and 960px
  // const [labelText, setLabelText] = useState<Option>("Frontend");

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaperHovered) {
        // Get all available options
        const options = [
          "Frontend",
          "Backend",
          "Mobile",
          "Database",
          "Devops",
          "Blockchain",
          "Testing Tools",
        ];
        const currentIndex = options.indexOf(selectedOption);
        const nextIndex = (currentIndex + 1) % options.length;
        setSelectedOption(options[nextIndex] as Option);
      }
    }, 4000);
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [selectedOption]);

  const handleOptionChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value as Option);
  };

  return (
    <>
      {isMobile && (
        <Grid container>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {selectedOption}
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedOption}
                onChange={handleOptionChange}
                label={selectedOption}
                style={{
                  padding: 0,
                  background: "#FFFFFF",
                  borderRadius: "8px",
                }}
              >
                {/* <MenuList style={{ padding: 0 }}> */}
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
                {/* </MenuList> */}
              </Select>
            </FormControl>
          </Grid>

          <Paper
            style={{
              width: "100%",
              minHeight: "100px",
              borderColor: "#E2E8F0",
              border: "2px ",
              borderRadius: "16px",
              padding: "10px",
              marginTop: "24px",
            }}
          >
            <Grid
              container
              style={{ justifyContent: "center", textAlign: "center" }}
              onMouseEnter={() => setIsPaperHovered(true)}
              onMouseLeave={() => setIsPaperHovered(false)}
            >
              {renderIcons(selectedOption)}
            </Grid>
          </Paper>
        </Grid>
      )}

      {isDesktop && (
        <Paper
          style={{
            width: "100%",
            minHeight: "583px",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            boxShadow: "none",
          }}
          onMouseEnter={() => setIsPaperHovered(true)}
          onMouseLeave={() => setIsPaperHovered(false)}
        >
          <div
            style={{
              width: "100%",
              minHeight: "583px",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "25%",
                minHeight: "583px",
                borderTopLeftRadius: "16px",
                borderBottomLeftRadius: "16px",
                backgroundColor: "#E2E8F0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              {options.map((option, index) => (
                <>
                  <div
                    style={{
                      ...div2,

                      backgroundColor:
                        selectedOption === option ? "#06B6D4" : "",
                      borderTopLeftRadius: index === 0 ? "16px" : "",
                      borderBottomLeftRadius:
                        index === options.length - 1 ? "16px" : "",
                        cursor:"pointer "
                    }}
                    onClick={() => setSelectedOption(option as Option)}
                    key={option}
                  >
                    <Typography
                      sx={{
                        ...typo,
                        color: selectedOption === option ? "white" : "#475569",
                        fontWeight: selectedOption === option ? 800 : "",

                        cursor: "pointer",
                        userSelect:"none"
                      }}
                    >
                      {option}{" "}
                    </Typography>
                  </div>
                  {/* {index == option.length -1?} */}
                  <Divider
                    style={{
                      display: index === options.length - 1 ? "none" : "flex",
                    }}
                  />
                </>
              ))}
            </div>

            <div
              style={{
                width: "75%",
                borderTopRightRadius: "16px",
                borderBottomRightRadius: "16px",
                padding: "24px",
              }}
            >
              <Grid
                container
                style={{ justifyContent: "center", textAlign: "center" }}
              >
                {renderIcons(selectedOption)}
              </Grid>
            </div>
          </div>
        </Paper>
      )}
    </>
  );
};

export default TechnologiesSection;

{
  /* <Paper style={{ width: "100%", minHeight: '250px', borderRadius: '16px', }}
               onMouseEnter={() => setIsPaperHovered(true)}
               onMouseLeave={() => setIsPaperHovered(false)}
            >
               <div style={{ width: "100%", minHeight: '100%', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', }}>

                  <div style={{ width: "100%", minHeight: '100px', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', backgroundColor: '#E2E8F0', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                     {options.map((option, index) => (
                        <div style={{
                           ...div1,
                           backgroundColor: selectedOption === option ? "#C22522" : "",
                           borderTopLeftRadius: index === 0 ? '16px' : '',
                           borderTopRightRadius: index === options.length - 1 ? '16px' : '',
                        }}
                           onClick={() => setSelectedOption(option as Option)} key={option}>
                           <Typography sx={{ ...typo, color: selectedOption === option ? "white" : "#475569" }}>{option}</Typography>
                        </div>
                     ))}
                  </div>
                  <div style={{ width: "100%", minHeight: '100px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', padding: '24px' }}>
                     <Grid container style={{ justifyContent: 'center', textAlign: 'center' }}>
                        {renderIcons(selectedOption)}
                     </Grid>
                  </div>
               </div>

            </Paper  > */
}
