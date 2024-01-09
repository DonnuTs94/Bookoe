import { Box, Text } from "@chakra-ui/react"
import SearchHeader from "../components/HeaderTitle"
import { useSelector } from "react-redux"

const NotFound = () => {
  const keyword = useSelector((state) => state.search.keyword)

  return (
    <>
      <Box mt="142px" px="98px">
        <SearchHeader keyword={keyword} titleB={"Search for"} />
        <Box
          border="1px #8170F2 solid"
          w="1241"
          h="444"
          borderRadius="15px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            color="#8170F2"
            fontSize="72px"
            fontWeight="600"
            lineHeight="108px"
          >
            Book Not Found.
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default NotFound
