import { createSlice } from "@reduxjs/toolkit"

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    topPicks: [],
  },
  reducers: {
    booksData: (state, action) => {
      state.books = action.payload
    },
    topPicks: (state, action) => {
      state.topPicks = action.payload
    },
  },
})

export const { booksData, topPicks } = booksSlice.actions
export default booksSlice.reducer
