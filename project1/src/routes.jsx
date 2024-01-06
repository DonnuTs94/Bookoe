import { createBrowserRouter } from "react-router-dom"
import BookoeLayout from "./layout/BookoeLayout"
import All from "./Pages/All"
import BookDetail from "./Pages/BookDetail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookoeLayout />,
    children: [
      { path: "", Component: All },
      { path: "book/:id", Component: BookDetail },
    ],
  },
])

export { router }
