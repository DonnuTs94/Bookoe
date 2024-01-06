/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"

const SearchHeader = () => {
  const keyword = useSelector((state) => state.search.keyword)

  return (
    <>
      <Box
        h="147px"
        maxW="1241px"
        borderRadius="15px"
        backgroundColor="#F1F0FE"
        position="relative"
        alignItems="center"
        display="flex"
        my="42px"
      >
        <Box
          display="flex"
          fontSize="42px"
          fontWeight="600"
          lineHeight="63px"
          ml="61px"
        >
          <Text color="#8170F2">Search For</Text>
          <Text ml="20px">{keyword}</Text>
        </Box>
      </Box>
    </>
  )
}

export default SearchHeader
