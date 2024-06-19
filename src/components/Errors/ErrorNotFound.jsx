import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

// to style later

export const ErrorNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-2);
  };

  return (
    <Card
      sx={{
        maxWidth: "80%",
        marginTop: "25%",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="src/assets/error.jpg"
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
    </Card>
  );
};
