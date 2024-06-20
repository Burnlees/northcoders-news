import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { removeComment } from "../api";
import { useState } from "react";

export default function DeleteSelectedComment({
  commentId,
  setRenderToggle,
  setNumberofComments,
  setOpen,
  setArticleError
}) {
  const [loading, setLoading] = useState(false);

  const handleCommentDeletion = () => {
    setLoading(true);
    removeComment(commentId).then(() => {
        setOpen((open) => {
            return true
        })
      setNumberofComments((currNumber) => {
        return currNumber - 1;
      });
      setRenderToggle((toggle) => {
        return !toggle;
      });
      setLoading(false);
    }).catch((err) => {
      setArticleError({open:true, msg: 'Comment Deletion Failed'})
    })
  };

  return (
    <Button
      variant="contained"
      onClick={handleCommentDeletion}
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
