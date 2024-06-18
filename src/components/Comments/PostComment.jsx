import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { postComment } from "../api";

export const PostCommentBox = ({ articleId, setComments }) => {
  const [newComment, setnewComment] = useState({
    username: "grumpy19",
    body: "",
  });

  const handleChange = (event) => {
    setnewComment((currCommentData) => {
      return { ...currCommentData, body: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments((currComments) => {
      const addedComment = newComment;
      addedComment.created_at = Date();
      addedComment.author = addedComment.username;
      addedComment.votes = 0;
      addedComment.id = currComments.length + 1;
      return [addedComment, ...currComments];
    });
    postComment(articleId, newComment)
      .then((response) => {
        setnewComment({ username: "grumpy19", body: "" });
      })
      .catch((err) => {
        setComments((currComments) => {
          return [...currComments].slice(1);
        });
        alert("Comment failed to post");
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
