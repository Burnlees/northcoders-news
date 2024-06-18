import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { CommentsSection } from "../Comments/CommentsSection";
import { VotingSystem } from "../VotingSystem/VotingSystem";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "1rem",
}));

export const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setLoading(false);
    });
  }, [article_id]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Item
      key={article.article_id}
      elevation={6}
      sx={{ padding: "1rem", marginBottom: "1rem", borderRadius: "1rem" }}
    >
      <header>
        <h2>{article.title}</h2>
      </header>
      <ul>
        <li>Created By: {article.author}</li>
        <li>Created At: {article.created_at}</li>
        <li>Topic: {article.topic}</li>
      </ul>
      <img src={article.article_img_url} alt="" width={300} />
      <p>{article.body}</p>

      <ul>
        <li>Votes: {article.votes}</li>
      </ul>
      <VotingSystem
        id={article_id}
        votes={article.votes}
        setArticle={setArticle}
      />
      <CommentsSection
        articleId={article_id}
        numOfComments={article.comment_count}
      />
    </Item>
  );
};
