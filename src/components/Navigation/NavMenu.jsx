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
        aria-label="Open navigation menu"
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
          role: "menu",
        }}
      >
        <MenuList role="menu">
          <MenuItem onClick={handleClose} role="menuitem">
            <Link aria-label="Go to profile page">Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose} role="menuitem">
            <Link to="/articles" aria-label="Go to articles page">
              Articles
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} role="menuitem">
            <Link aria-label="Go to users page">Users</Link>
          </MenuItem>
          <MenuItem onClick={handleClose} role="menuitem">
            <Link aria-label="Logout">Logout</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
