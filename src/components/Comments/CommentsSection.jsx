import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getCommentsByArticleId } from "../api";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export const CommentsSection = ({ articleId, numOfComments }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCommentsByArticleId(articleId).then((commentData) => {
      setComments(commentData);
      setLoading(false);
    });
  }, [articleId]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Comments {`(${numOfComments})`}
        </AccordionSummary>
        <AccordionDetails>
          {comments.map((comment) => {
            return (
              <Box sx={{borderBottom: '1px solid black'}} key={comment.comment_id}>
                <p>{comment.body}</p>
                <ul>
                  <li>{comment.author}</li>
                  <li>{comment.created_at}</li>
                  <li>{comment.votes}</li>
                </ul>
              </Box>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
