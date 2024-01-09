import { Box } from "@chakra-ui/react"
import SearchHeader from "../components/HeaderTitle"
import { useDispatch, useSelector } from "react-redux"
import { fetchBooksData } from "../redux/allBooks/booksAsync"
import { useEffect } from "react"
import SearchList from "../components/Cards"

const Latest = () => {
  const dispatch = useDispatch()
  const booksData = useSelector((state) => state.books.books)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchBooksData())
    }
    fetchData()
  }, [dispatch])

  const dataFilter = booksData.slice(15, 19)
  return (
    <>
      <Box mt="142px" px="98px">
        <SearchHeader titleA={true} titleB="Latest" keyword="Collection" />
        <SearchList
          bookData={dataFilter}
          renderBorder={true}
          renderDate={true}
        />
      </Box>
    </>
  )
}

export default Latest
