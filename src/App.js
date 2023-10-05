import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import ArticleView from "./pages/ArticleView";
import UserPage from "./pages/UserPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import ArticleEdit from "./pages/ArticleEdit";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/auth/RequireAuth";
import NotRequireAuth from "./components/auth/NotRequireAuth";
import { useSelector } from "react-redux";
import PublishPage from "./pages/PublishPage";
import UnAuthorized from "./pages/UnAuthorized";

function App() {
  const userWriterId = useSelector((state) => state.auth.data.userWriterId);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Protected routes */}
        <Route element={<RequireAuth allowedRoles={[1000]} />}>
          <Route index element={<Home />} />
          <Route path="article">
            <Route
              index
              element={<ArticlePage userWriterId={userWriterId} />}
            />
            <Route path=":id">
              <Route index element={<ArticleView />} />
              <Route path="edit" element={<ArticleEdit />} /> {/**Handle this complex logic using Redux */}
            </Route>
          </Route>
          <Route path="user" element={<UserPage />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[2000]} />}>
          <Route path="publish" element={<PublishPage />} />
        </Route>
        <Route path="unauthorized" element={<UnAuthorized />} />
        <Route path="*" element={<Missing />} />
      </Route>

      {/* Unprotected routes */}
      <Route element={<NotRequireAuth />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
