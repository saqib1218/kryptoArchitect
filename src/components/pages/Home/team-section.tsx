import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React, { useRef, useEffect, useState } from "react";
import ArrowLeft from "../../../Assets/arrow-left";
import ArrowRight from "../../../Assets/arrow-right";
import EmployeeCard from "./employee-card";
import axios from "axios";
import Dummycard from "./dummycard";
import { Typography } from "@mui/material";

const myArray = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,];
export type Root = Array<{
   id: number
   name: string
   dp: string
   designation: string
}>

const TeamSection = () => {
   const typo2 = {
      font: "Archivo",
      fontWeight: "400px",
      fontSize: "16px",
      color: "#4B5563",
      lineHeight: "16px",
    };
    const typo1 = {
      font: "Archivo",
      fontWeight: "bold",
      fontSize: "36px",
      color: "#1E293B",
      lineHeight: "36px",
      marginBottom: "16px",
    };
   const [data, setData] = useState<Root>();
   console.log("data:", data)

   const carouselRef = useRef<HTMLDivElement>(null);
   const [containerWidth, setContainerWidth] = useState<number>(0);

   useEffect(() => {
      const handleResize = () => {
         if (carouselRef.current) {
            setContainerWidth(carouselRef.current.offsetWidth);
         }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const scroll = (direction: "left" | "right") => {
      if (carouselRef.current) {
         const container = carouselRef.current;
         const currentPosition = container.scrollLeft;
         const newPosition =
            direction === "left"
               ? currentPosition - containerWidth
               : currentPosition + containerWidth;
         container.scrollTo({
            left: newPosition < 0 ? 0 : newPosition,
            behavior: "smooth",
         });
      }
   };



   async function fetchData() {
      try {
         const response = await axios.get('team');
         setData(response.data);
         console.log(response.data,"this is data")
      } catch (error) {
         // handle error
      }
   }

   useEffect(() => {
      fetchData();
   }, []);


   return (
      <>
      {data &&
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
         <Typography style={typo1}>Our Team</Typography>
         <Typography style={typo2}>Meet Our Talented Team</Typography>
       </div>
      }
      <Grid container>
         {data &&
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
               <div style={{ display: "flex", flexDirection: "row-reverse", gap: "24px", marginBottom: '16px ' }}>
                  <Button variant="text" onClick={() => scroll("right")} style={{ color: '#C22522' }}>
                     <ArrowRight />
                  </Button>
                  <Button variant="text" onClick={() => scroll("left")} style={{ color: '#C22522' }}>
                     <ArrowLeft />
                  </Button>
               </div>
            </Grid>
         }

         <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div style={{ position: "relative" }}>
               <div
                  className="carousel"
                  ref={carouselRef}
                  style={{

                     display: "flex",
                     overflowX: "hidden",
                     padding: "16px",
                     gap: "32px",
                     width: "100%"
                  }}
               >

                  {/* {
                     myArray.map((item) => {
                        return (
                           <Dummycard
                              key={item}
                           />
                        )

                     })
                  } */}

                  {data?.map((item) => {
                     return (
                        <EmployeeCard
                           key={item.id}
                           name={item.name}
                           jobTitle={item.designation}
                           image={item.dp}
                        />
                     )
                  })}

               </div>
            </div>
         </Grid>

      </Grid>
      </>
   )
}

export default TeamSection









