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
        Error 404
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Content Not Found
      </Typography>
    </CardContent>
    <CardActions>
      <Button component={Link} to={"/articles"} size="small">
        Back To Home
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function ErrorHeroCard() {
  return (
    <Box
      sx={{
        display: "flex",
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
