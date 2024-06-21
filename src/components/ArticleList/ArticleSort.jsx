import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Box, Button, Menu, MenuList } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
history;

export const ArticleSort = ({ topic, page }) => {
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  const submitSort = () => {
    const params = new URLSearchParams(location.search);
    params.set("topic", topic);
    params.set("sort_by", sortBy);
    params.set("order", orderBy);

    const newSearch = `?${params.toString()}`;
    navigate(location.pathname + newSearch);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"flex-end"}
      role="search"
      aria-label="Sort and Order Articles"
    >
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
        aria-labelledby="sort-label"
      >
        <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-select"
          value={sortBy}
          onChange={handleSortChange}
          label="Sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"created_at"}>Date</MenuItem>
          <MenuItem value={"comment_count"}>Comment Count</MenuItem>
          <MenuItem value={"votes"}>Votes</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 115 }}
        aria-labelledby="order-label"
      >
        <InputLabel id="order-label">Order</InputLabel>
        <Select
          labelId="order-label"
          id="order-select"
          value={orderBy}
          onChange={handleOrderChange}
          label="Order"
        >
          <MenuItem value={"asc"}>Ascending</MenuItem>
          <MenuItem value={"desc"}>Descending</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        onClick={submitSort}
        sx={{ m: 1, height: "2rem", p: 0, maxWidth: "1rem" }}
        aria-label="Apply sorting and ordering"
      >
        <CheckCircleOutlineIcon />
      </Button>
    </Box>
  );
};
