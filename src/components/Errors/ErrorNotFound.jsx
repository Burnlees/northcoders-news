import React, { useState, useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import ErrorHeroCard from "./ErrorHero";

// to style later

export const ErrorNotFound = () => {

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x327f,
          color2: 0xd0c6f2,
          backgroundColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <Box
      ref={myRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        minHeight: "100vh",
        minWidth: "100vw"
      }}
    ><ErrorHeroCard /></Box>
  );
};

const VantaBackground = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x327f,
          color2: 0xd0c6f2,
          backgroundColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <Box
      ref={myRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: -1,
      }}
    >
    </Box>
  );
};

{
  /* <Card
sx={{
  maxWidth: "80%",
  marginTop: "25%",
  backgroundColor: "black",
  color: "white",
}}
>
<CardMedia
  component="img"
  alt="Error Message"
  height="300"
  image="./assets/error.jpg"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    404: Content Not Found
  </Typography>
</CardContent>
<CardActions>
  <Button
    size="small"
    onClick={handleGoBack}
    sx={{ backgroundColor: "blue", color: "white" }}
  >
    Go Back
  </Button>
</CardActions>
</Card> */
}
