import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    keyword: "",
  },
  reducers: {
    updateSearchResults: (state, action) => {
      state.searchResults = action.payload
    },
    searchKeyword: (state, action) => {
      state.keyword = action.payload
    },
  },
})

export const { updateSearchResults, searchKeyword } = searchSlice.actions
export default searchSlice.reducer
