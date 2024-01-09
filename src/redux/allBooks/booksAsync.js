import { axiosInstance } from "../../api"
import { booksData, topPicks } from "./allBooksSlice"

export const fetchBooksData = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/books")
    dispatch(booksData(response.data.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchTopPics = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/books?is_top_pick=true")

    const sortedRating = response.data.data.sort((a, b) => b.rating - a.rating)

    dispatch(topPicks(sortedRating))
  } catch (err) {
    console.log(err)
  }
}
