import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

// to style later

export const LandingPage = () => {
  return (
    <Card
      sx={{
        maxWidth: "80%",
        marginTop: "25%",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="./assets/newspaper.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Northcoders News
        </Typography>
        <Typography variant="body2">
          The place to share your thoughts and opinions
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={'/articles'}>
          <Button size="small" sx={{}}>
            Get Started
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};


