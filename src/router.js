
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import AboutMe from "./pages/AboutMe";
import FullArticle from "./pages/FullArticle";
import BlogList from "./components/BlogList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
        children: [
        { path: "", element: <BlogList /> },
        { path: "/:id", element: <FullArticle /> },
        { path: "/about-me", element: <AboutMe /> },
        ],
  },
]);

export default router;