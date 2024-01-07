/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react"

const HeaderTitle = ({ keyword, titleB, titleA }) => {
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
          {titleA && <Text mr="12px">Our</Text>}
          <Text color="#8170F2">{titleB}</Text>
          <Text ml="12px">{keyword}</Text>
        </Box>
      </Box>
    </>
  )
}

export default HeaderTitle
