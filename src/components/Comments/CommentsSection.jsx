import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getCommentsByArticleId } from "../api";
import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { PostCommentBox } from "./PostComment";
import { UserContext } from "../../contexts/User";
import DeleteSelectedComment from "./RemoveComment";

export const CommentsSection = ({ articleId, numOfComments, setOpen }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberOfComments, setNumberofComments] = useState(numOfComments)
  const [renderToggle, setRenderToggle] = useState(false);
  const [expand, setExpand] = useState(false)
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    getCommentsByArticleId(articleId).then((commentData) => {
      setComments(commentData);
      setLoading(false);
    });
  }, [articleId, renderToggle]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Accordion  expanded={expand}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          onClick={() => setExpand(!expand)}
        >
          Comments {`(${numberOfComments})`}
        </AccordionSummary>
        <AccordionDetails>
          <PostCommentBox
            articleId={articleId}
            setRenderToggle={setRenderToggle}
            setNumberofComments={setNumberofComments}
          />
          {comments.map((comment) => {
            return (
              <Box
                sx={{ borderBottom: "1px solid black" }}
                key={comment.comment_id}
              >
                <p>{comment.body}</p>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <ul>
                    <li>{comment.author}</li>
                    <li>{comment.created_at}</li>
                    <li>{comment.votes}</li>
                  </ul>
                  {comment.author === user ? (
                    <DeleteSelectedComment commentId={comment.comment_id} setRenderToggle={setRenderToggle} setNumberofComments={setNumberofComments}
                    setOpen={setOpen} />
                  ) : null}
                </Box>
              </Box>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
