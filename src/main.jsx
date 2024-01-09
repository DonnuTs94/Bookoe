import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes.jsx"
import { Provider } from "react-redux"
import "./index.css"
import store from "./redux/store.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
)
