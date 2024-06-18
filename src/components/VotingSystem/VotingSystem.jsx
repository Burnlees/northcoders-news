import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Box, Button } from "@mui/material";
import { patchArticleById } from "../api";

export const VotingSystem = ({ id, setArticle }) => {
  const handleUpVote = () => {
    const newVote = 1;
    setArticle((currArticleData) => {
      return { ...currArticleData, votes: currArticleData.votes + newVote };
    });
    patchArticleById(id, newVote).catch((err) => {
      setArticle((currArticleData) => {
        return { ...currArticleData, votes: currArticleData.votes - newVote };
      });
      alert("Upvote failed");
    });
  };

  const handleDownVote = () => {
    const newVote = -1;
    setArticle((currArticleData) => {
      return { ...currArticleData, votes: currArticleData.votes + newVote };
    });
    patchArticleById(id, newVote).catch((err) => {
      setArticle((currArticleData) => {
        return { ...currArticleData, votes: currArticleData.votes - newVote };
      });
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
