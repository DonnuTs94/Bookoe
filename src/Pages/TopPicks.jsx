import { Box } from "@chakra-ui/react"
import SearchHeader from "../components/HeaderTitle"
import { useDispatch, useSelector } from "react-redux"
import { fetchTopPics } from "../redux/allBooks/booksAsync"
import { useEffect } from "react"
import SearchList from "../components/Cards"

const TopPicks = () => {
  const dispatch = useDispatch()
  const booksData = useSelector((state) => state.books.topPicks)

  console.log(booksData)
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchTopPics())
    }
    fetchData()
  }, [dispatch])

  const dataFilter = booksData.slice(3, 7)
  return (
    <>
      <Box mt="142px" px="98px">
        <SearchHeader titleB={"Top"} keyword={"Picks Collection"} />
        <SearchList
          bookData={dataFilter}
          renderBorder={true}
          renderNumber={true}
        />
      </Box>
    </>
  )
}

export default TopPicks
