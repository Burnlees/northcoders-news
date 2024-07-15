import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import NavMenu from "../Navigation/NavMenu";
import { CategoriesMenu } from "../ArticleList/CategoriesMenu";

export const NCAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar sx={{ width: "100%", paddingRight: 0 }}>
          <CategoriesMenu />
          <Typography
            variant="h6"
            component={Link}
            to={"/articles"}
            sx={{ flexGrow: 1, color: "white" }}
          >
            Northcoders News
          </Typography>
          <NavMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
