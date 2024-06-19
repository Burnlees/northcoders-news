import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import "./ArticleList.css";
import { CategoriesMenu } from "./CategoriesMenu";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { ArticleSort } from "./ArticleSort";
import { Box } from "@mui/material";
import { ArticlePagination } from "./Pagination";

export const ArticleList = () => {
  const navigate = useNavigate()
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const filterByTopic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const p = searchParams.get('p')

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getArticles(filterByTopic, sortBy, order, p).then((response) => {
      setArticles(response);
      setLoading(false);
    }).catch((err) => {
      navigate('/404')
    })
  }, [location.search]);


  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          maxWidth: "80%",
          m: "auto",
          borderBottom: "solid 1px black",
        }}
      >
        <CategoriesMenu />
        <ArticleSort topic={filterByTopic} />
      </Box>
      <ul>
        {articles.map((articleData) => {
          return (
            <li key={articleData.article_id}>
              <ArticleCard articleData={articleData} />
            </li>
          );
        })}
      </ul>
      <ArticlePagination />
    </>
  );
};
