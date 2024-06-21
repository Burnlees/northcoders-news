import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ArticlePagination = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(() => {
    const params = new URLSearchParams(location.search);
    return parseInt(params.get("p")) || 1;
  });

  const handlePageChange = (event, value) => {
    setPage(value);
    const params = new URLSearchParams(location.search);
    params.set("p", value);
    const newSearch = `?${params.toString()}`;
    navigate(location.pathname + newSearch);
  };

  return (
    <Pagination
      count={10}
      page={page}
      variant="outlined"
      shape="rounded"
      aria-label="Article pages"
      sx={{ marginBottom: 5, display:"flex", justifyContent: 'center' }}
      onChange={handlePageChange}
    />
  );
};
