import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h2" component="div">
        Northcoders News
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        The only place you need to keep you updated
      </Typography>
    </CardContent>
    <CardActions>
      <Button component={Link} to={"/articles"} size="small">
        Get Started
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function HeroCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: 275,
        zIndex: 1,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          background: "rgba(255,255,255, 0.7)",
          backdropFilter: "blur(2px)",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
