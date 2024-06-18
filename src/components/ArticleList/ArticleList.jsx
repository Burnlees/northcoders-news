import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import "./ArticleList.css";
import { CategoriesMenu } from "./CategoriesMenu";
import { useSearchParams } from "react-router-dom";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterByTopic = searchParams.get('topic')

  useEffect(() => {
    setLoading(true);
    getArticles(filterByTopic).then((response) => {
      setArticles(response);
      setLoading(false);
    });
  }, [filterByTopic]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <CategoriesMenu />
      <ul>
        {articles.map((articleData) => {
          return (
            <li key={articleData.article_id}>
              <ArticleCard articleData={articleData} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
