import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./search/searchSlice"
import booksReducer from "./allBooks/allBooksSlice"

const store = configureStore({
  reducer: {
    search: searchReducer,
    books: booksReducer,
  },
})

export default store
