import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ArticleList } from "../ArticleList/ArticleList";

export const ContentSection = ({ Section }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc" }}>
          <Section />
        </Box>
      </Container>
    </React.Fragment>
  );
};
