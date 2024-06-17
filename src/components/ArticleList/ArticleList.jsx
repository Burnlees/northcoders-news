import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import "./ArticleList.css";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles().then((response) => {
      setArticles(response);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {articles.map((articleData) => {
        return (
          <li key={articleData.article_id}>
            <ArticleCard articleData={articleData} />
          </li>
        );
      })}
    </ul>
  );
};
