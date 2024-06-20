import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { postComment } from "../api";
import { UserContext } from "../../contexts/User";

export const PostCommentBox = ({
  articleId,
  setComments,
  setRenderToggle,
  setNumberofComments,
  setArticleError,
}) => {
  const { user, setUser } = useContext(UserContext);
  const [newComment, setnewComment] = useState({
    username: user,
    body: "",
  });

  const handleChange = (event) => {
    setnewComment((currCommentData) => {
      return { ...currCommentData, body: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(articleId, newComment)
      .then((response) => {
        setNumberofComments((currNumber) => {
          return currNumber + 1;
        });
        setnewComment({ username: user, body: "" });
        setRenderToggle((toggle) => {
          return !toggle;
        });
      })
      .catch((err) => {
        setArticleError((open) => {
          return { open: true, msg: "Comment Failed" };
        });
      });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Add your comment here..."
        variant="outlined"
        value={newComment.body}
        onChange={handleChange}
        required
      />
    </Box>
  );
};
