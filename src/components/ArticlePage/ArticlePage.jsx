import { useNavigate, useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { CommentsSection } from "../Comments/CommentsSection";
import { VotingSystem } from "../VotingSystem/VotingSystem";
import { CommentDeleteNotification } from "../Comments/DeleteNotification";
import { ArticleErrorNotification } from "../Errors/ArticleError";
import { Chip, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TopicRounded } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Loading } from "../Loading/Loading";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "1rem",
}));

export const ArticlePage = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [articleError, setArticleError] = useState({ open: false, msg: "" });
  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setLoading(false);
      })
      .catch((err) => {
        navigate("/404");
      });
  }, [article_id]);

  return loading ? (
    <Loading />
  ) : (
    <Item
      key={article.article_id}
      elevation={6}
      sx={{ padding: "1rem", marginBottom: "1rem", borderRadius: "1rem" }}
    >
      <header>
        <Typography variant="h5" gutterBottom>
          {article.title}
        </Typography>
      </header>
      <ul className="article-list">
        <li>
          <Chip
            icon={<AccountCircleIcon fontSize="small" color="primary" />}
            label={article.author}
            variant="outlined"
          />
        </li>
        <li>
          <Chip
            icon={<CalendarMonthIcon fontSize="small" color="primary" />}
            label={new Date(article.created_at).toLocaleDateString()}
            variant="outlined"
          />
        </li>
        <li>
          <Chip
            icon={<TopicRounded fontSize="small" color="primary" />}
            label={article.topic}
            variant="outlined"
          />
        </li>
      </ul>
      <img src={article.article_img_url} alt="" width={300} />
      <p>{article.body}</p>

      <ul className="article-list">
        <li>Votes: {article.votes}</li>
      </ul>
      <VotingSystem
        id={article_id}
        votes={article.votes}
        setArticle={setArticle}
        setArticleError={setArticleError}
      />
      <CommentsSection
        articleId={article_id}
        numOfComments={article.comment_count}
        setOpen={setOpen}
        setArticleError={setArticleError}
      />
      <CommentDeleteNotification open={open} setOpen={setOpen} />
      <ArticleErrorNotification
        articleError={articleError}
        setArticleError={setArticleError}
      />
    </Item>
  );
};
