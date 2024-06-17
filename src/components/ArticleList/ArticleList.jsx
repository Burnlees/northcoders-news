import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import './ArticleList.css'

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
        setArticles(response)
    })
  }, []);

  console.log(articles, "response");
  return <ul>{articles.map((articleData) => {
    return <li key={articleData.article_id}>
        <ArticleCard articleData={articleData} />
    </li>
  })}</ul>
};
