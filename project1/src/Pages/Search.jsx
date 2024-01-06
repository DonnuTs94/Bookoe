/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react"
import SearchHeader from "../components/SearchHeader"
import SearchList from "../components/SearchList"

const Search = () => {
  return (
    <>
      <Box mt="166px" px="98px">
        <SearchHeader />
        <SearchList />
      </Box>
    </>
  )
}

export default Search
