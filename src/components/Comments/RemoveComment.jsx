import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { removeComment } from "../api";
import { useState } from "react";

export default function RemoveComment({
  commentId,
  setRenderToggle,
  setNumberofComments,
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    removeComment(commentId).then(() => {
      setNumberofComments((currNumber) => {
        return currNumber - 1;
      });
      setRenderToggle((toggle) => {
        return !toggle;
      });
      setLoading(false);
    });
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        maxHeight: "1.5rem",
        backgroundColor: "red",
        alignSelf: "flex-end",
        m: "0.5rem",
        fontSize: "0.8rem",
      }}
    >
      {loading ? (
        <Box sx={{ display: "flex", color: "white", maxHeight: "50px" }}>
          <CircularProgress size={15} color="inherit" />
        </Box>
      ) : (
        "Remove"
      )}
    </Button>
  );
}
