import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Box, Button } from "@mui/material";
import { patchArticleById } from "../api";

export const VotingSystem = ({ id, setArticle }) => {
  const handleUpVote = () => {
    const newVote = 1;
    patchArticleById(id, newVote)
      .then((response) => {
        setArticle((currArticleData) => {
          return { ...currArticleData, votes: response.votes };
        });
      })
      .catch((err) => {
        alert("Upvote failed");
      });
  };

  const handleDownVote = () => {
    const newVote = -1;
    patchArticleById(id, newVote)
      .then((response) => {
        setArticle((currArticleData) => {
          return { ...currArticleData, votes: response.votes };
        });
      })
      .catch((err) => {
        alert("Downvote failed");
      });
  };

  return (
    <Box sx={{ width: "3rem", display: "flex", gap: "1rem" }}>
      <Button onClick={handleUpVote}>
        <ThumbUpIcon sx={{ color: "green" }} />
      </Button>{" "}
      <Button onClick={handleDownVote}>
        <ThumbDownIcon sx={{ color: "red" }} />
      </Button>
    </Box>
  );
};
