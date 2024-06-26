import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { getCommentsByArticleId } from "../api";
import { useContext, useEffect, useState } from "react";
import { Box, Chip } from "@mui/material";
import { PostCommentBox } from "./PostComment";
import { UserContext } from "../../contexts/User";
import DeleteSelectedComment from "./RemoveComment";
import { Loading } from "../Loading/Loading";
import { Flare } from "@mui/icons-material";

export const CommentsSection = ({
  articleId,
  numOfComments,
  setOpen,
  setArticleError,
}) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberOfComments, setNumberofComments] = useState(numOfComments);
  const [renderToggle, setRenderToggle] = useState(false);
  const [expand, setExpand] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    getCommentsByArticleId(articleId).then((commentData) => {
      setComments(commentData);
      setLoading(false);
    });
  }, [articleId, renderToggle]);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Accordion expanded={expand}>
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
            setArticleError={setArticleError}
          />
          {comments.map((comment) => {
            return (
              <Box
                sx={{ borderBottom: "1px solid black" }}
                key={comment.comment_id}
              >
                <p>{comment.body}</p>
                <Box sx={{ display: "flex", justifyContent: "center", gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
                      <Chip
                        icon={
                          <AccountCircleIcon fontSize="small" color="primary" />
                        }
                        label={comment.author}
                        variant="outlined"
                      />
                      <Chip
                        icon={
                          <CalendarMonthIcon fontSize="small" color="primary" />
                        }
                        label={new Date(
                          comment.created_at
                        ).toLocaleDateString()}
                        variant="outlined"
                      />
                      <Chip
                        icon={<ThumbUpIcon fontSize="small" color="primary" />}
                        label={comment.votes}
                        variant="outlined"
                      />
                </Box>

                <Box display={"flex"} justifyContent={"flex-end"}>
                  {comment.author === user ? (
                    <DeleteSelectedComment
                      commentId={comment.comment_id}
                      setRenderToggle={setRenderToggle}
                      setNumberofComments={setNumberofComments}
                      setOpen={setOpen}
                      setArticleError={setArticleError}
                    />
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
