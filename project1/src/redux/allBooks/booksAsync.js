import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../api"

const fetchBooksData = createAsyncThunk("books/fetchBooksData", async () => {
  try {
    const response = await axiosInstance.get("/books")
    return response.data.data
  } catch (err) {
    console.log(err)
  }
})

export default fetchBooksData
