import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import ArticleView from "./pages/ArticleView";
import UserPage from "./pages/UserPage";
import About from "./pages/About";
import Missing from "./pages/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="article">
          <Route index element={<ArticlePage />} />
          <Route path=":id" element={<ArticleView />} />
        </Route>
        <Route path="user" element={<UserPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
