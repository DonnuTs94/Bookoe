import { axiosInstance } from "../../api"
import { booksData } from "./allBooksSlice"

export const fetchBooksData = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/books")
    dispatch(booksData(response.data.data))
  } catch (err) {
    console.error(err)
  }
}
