import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://burnlees-news.onrender.com/",
});

export const getArticles = () => {
  return ncNews.get("/api/articles").then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (id) => {
  return ncNews.get(`/api/articles/${id}`).then((response) => {
    return response.data.article;
  });
};

export const getCommentsByArticleId = (id) => {
  return ncNews.get(`/api/articles/${id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const patchArticleById = (id, vote) => {
  const requestBody = {inc_votes: vote}
  return ncNews.patch(`/api/articles/${id}`, requestBody).then((response) => {
    return response.data.updatedArticle
  })
};
