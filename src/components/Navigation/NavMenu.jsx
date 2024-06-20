import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { MenuList } from "@mui/material";

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList >
          <MenuItem onClick={handleClose}>
            <Link>Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/articles"}>Articles</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link>Users</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link>Logout</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
