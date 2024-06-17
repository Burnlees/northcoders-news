import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://burnlees-news.onrender.com/",
});

export const getArticles = () => {
  return ncNews.get("/api/articles").then((response) => {
    return response.data.articles
  });
};
