import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { getTopics } from "../api";
import { Link } from "react-router-dom";

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
          <ListItemButton sx={{ borderBottom: "1px solid black", color: 'black' }}>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
              <ListItemText primary={"ALL TOPICS"} color="inherit"/>
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
            <ListItemButton sx={{ borderBottom: "1px solid black", color: 'black' }}>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
                <ListItemText primary={topic.slug.toUpperCase()} color="inherit"/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)} sx={{m: 1}}>Topics</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
