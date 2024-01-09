import { createBrowserRouter } from "react-router-dom"
import BookoeLayout from "./layout/BookoeLayout"
import All from "./Pages/All"
import BookDetail from "./Pages/BookDetail"
import Search from "./Pages/Search"
import NotFound from "./Pages/NotFound"
import TopPicks from "./Pages/TopPicks"
import Latest from "./Pages/Latest"
import Page404 from "./Pages/Page404"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookoeLayout />,
    children: [
      { path: "", Component: All },
      { path: "book/:id", Component: BookDetail },
      { path: "search", Component: Search },
      { path: "notfound", Component: NotFound },
      { path: "top-pics", Component: TopPicks },
      { path: "latest", Component: Latest },
    ],
  },
  { path: "*", Component: Page404 },
])

export { router }
