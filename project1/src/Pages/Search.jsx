/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react"
import SearchHeader from "../components/HeaderTitle"
import SearchList from "../components/Cards"
import { useSelector } from "react-redux"

const Search = () => {
  const keyword = useSelector((state) => state.search.keyword)
  const searchResults = useSelector((state) => state.search.searchResults)
  const filteringData = searchResults.slice(0, 4)

  return (
    <>
      <Box mt="166px" px="98px">
        <SearchHeader keyword={keyword} titleB={"Search for"} />
        <SearchList bookData={filteringData} />
      </Box>
    </>
  )
}

export default Search
