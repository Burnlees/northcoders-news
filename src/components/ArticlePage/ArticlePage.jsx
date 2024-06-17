import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
  console.log(article);

  return loading ? (
    "Loading..."
  ) : (
    <Item key={article.article_id} elevation={6} sx={{ padding: "1rem" }}>
      <h2>{article.title}</h2>
      <ul>
        <li>Created By: {article.author}</li>
        <li>Created At: {article.created_at}</li>
        <li>Topic: {article.topic}</li>
      </ul>
      <img src={article.article_img_url} alt="" width={300} />
      <p>{article.body}</p>

      <ul>
        <li>Comments: {article.comment_count}</li>
        <li>Votes: {article.votes}</li>
      </ul>
    </Item>
  );
};
