import AllBooks from "../components/AllBooks"
import HeroSection from "../components/HeroSection"
import Cards from "../components/Cards"
import { fetchBooksData } from "../redux/allBooks/booksAsync"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Box } from "@chakra-ui/react"

const All = () => {
  const dispatch = useDispatch()
  const booksData = useSelector((state) => state.books.books)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchBooksData())
    }
    fetchData()
  }, [dispatch])

  const dataFilter = booksData.slice(4, 8)
  const booksFilter = booksData.slice(0, 4)
  return (
    <>
      <HeroSection />
      <AllBooks books={booksFilter} />
      <Box px="96px">
        <Cards bookData={dataFilter} />
      </Box>
    </>
  )
}

export default All
