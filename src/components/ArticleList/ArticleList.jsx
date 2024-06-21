import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import "./ArticleList.css";
import { CategoriesMenu } from "./CategoriesMenu";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { ArticleSort } from "./ArticleSort";
import { Box } from "@mui/material";
import { ArticlePagination } from "./Pagination";
import { Loading } from "../Loading/Loading";

export const ArticleList = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const filterByTopic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const p = searchParams.get("p");

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const topic = filterByTopic !== "null" ? filterByTopic : undefined;
    getArticles(topic, sortBy, order, p)
      .then((response) => {
        setArticles(response);
        setLoading(false);
      })
      .catch((err) => {
        navigate("/404");
      });
  }, [location.search]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: { xs: "center", sm: "flex-end" },
          width: "100%",
          m: "auto",
          borderBottom: "solid 1px black",
          gap: 1,
          p: 1,
        }}
      >
        <CategoriesMenu />
        <ArticleSort topic={filterByTopic} />
      </Box>
      <ul className="article-list" aria-label="List of articles">
        {articles.map((articleData) => {
          return (
            <li key={articleData.article_id}>
              <ArticleCard articleData={articleData} />
            </li>
          );
        })}
      </ul>
      <footer>
        <ArticlePagination />
      </footer>
    </>
  );
};
