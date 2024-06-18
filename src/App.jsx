import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ContentSection } from "./components/ContentSection/ContentSection";
import { ArticleList } from "./components/ArticleList/ArticleList";
import { ArticlePage } from "./components/ArticlePage/ArticlePage";
import { LandingPage } from "./components/LandingPage/LandPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ContentSection Section={LandingPage} />} />
        <Route
          path="/articles"
          element={<ContentSection Section={ArticleList} />}
        />
        <Route
          path="/articles/:article_id"
          element={<ContentSection Section={ArticlePage} />}
        />
      </Routes>
    </>
  );
}

export default App;
