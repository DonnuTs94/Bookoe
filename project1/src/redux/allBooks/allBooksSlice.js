import { createSlice } from "@reduxjs/toolkit"

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    booksData: (state, action) => {
      state.books = action.payload
    },
  },
})

export const { booksData } = booksSlice.actions
export default booksSlice.reducer
