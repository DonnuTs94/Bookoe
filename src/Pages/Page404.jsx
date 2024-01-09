/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Image, Text } from "@chakra-ui/react"
import book1 from "../assets/Books1.svg"
import book2 from "../assets/Books2.svg"
import book3 from "../assets/Books3.svg"
import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <>
      <Box maxW="1440px" m="auto">
        <Box w="574px" h="220.81px" margin="0 auto">
          <Box display="flex" w="192.11px">
            <Image src={book1} h="100%" w="100%" />
            <Image src={book2} h="100%" w="100%" />
            <Image src={book3} h="100%" w="100%" />
          </Box>
        </Box>
        <Box
          maxW="465px"
          // mh="316.3px"
          m="0 auto"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          mt="40px"
        >
          <Text fontSize="147.18px" fontWeight="500" color="#8170F2">
            404
          </Text>
          <Text fontSize="23.24px" fontWeight="400" color="#0D0842" mt="-41px">
            Looks like you've got lost...
          </Text>
          <Text
            fontSize="15.49px"
            fontWeight="400"
            color="#0D0842"
            opacity="60%"
            mt="19px"
          >
            The page you're looking for doesn't exist or has beed moved.
          </Text>
          <Button
            mt="33px"
            textColor="#8170F2"
            colorScheme="#8170F2"
            borderRadius="5.16px"
            variant="outline"
            fontSize="12.91px"
            h="32.28px"
            w="120.71px"
            border="0.6px solid"
          >
            <Link to="/">Back Home</Link>
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Page404
