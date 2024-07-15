import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { getTopics } from "../api";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

export const CategoriesMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem
          component={Link}
          to={"/articles"}
          key={"All"}
          disablePadding
          sx={{ m: 0 }}
        >
          <ListItemButton
            sx={{ borderBottom: "1px solid black", color: "black" }}
          >
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary={"ALL TOPICS"} color="inherit" />
          </ListItemButton>
        </ListItem>

        {topics.map((topic) => (
          <ListItem
            component={Link}
            to={`/articles?topic=${topic.slug}`}
            key={topic.slug}
            disablePadding
            sx={{ m: 0 }}
          >
            <ListItemButton
              sx={{ borderBottom: "1px solid black", color: "black" }}
            >
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText
                primary={topic.slug.toUpperCase()}
                color="inherit"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
