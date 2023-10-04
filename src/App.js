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
import RequireAuth from "./components/requireauth/RequireAuth";

function App() {
  const userData = {
    isLogged: true,
    data: {
      userId: 10,
      userWriterId: null,
      accessToken: "eYgdfsdkfgdfgkfghdl23489dfghs/sdfrfg443",
    },
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<RequireAuth />}>
        {/* Protected routes */}
          <Route index element={<Home />} />
          <Route path="article">
            <Route index element={<ArticlePage userWriterId={userData.data.userWriterId}/>} />
            <Route path=":id" >
              <Route index element={<ArticleView />} />
              <Route path="edit" element={<ArticleEdit />} />
            </Route>
          </Route>
          <Route path="user" element={<UserPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Route>

      {/* Unprotected routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
