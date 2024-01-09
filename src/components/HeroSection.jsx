/* eslint-disable react/prop-types */
import { Box, Button, Image, Text } from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Rating from "./Ratting"

const HeroSection = ({ booksData }) => {
  const [foundHighestRating, setFoundHighestRating] = useState(null)

  useEffect(() => {
    const ratting = Math.max(...booksData.map((book) => book.rating), 0)
    const bookWithHighestRating = booksData.find(
      (book) => book.rating === ratting
    )

    setFoundHighestRating(bookWithHighestRating)
  }, [booksData])

  return (
    <>
      <Box
        bgColor="#F1F0FE"
        margin="auto"
        display="flex"
        mt="142px"
        zIndex="0"
        position="relative"
        mx="100px"
        h="522px"
        borderRadius="15px"
      >
        <Box margin="0 auto" ml="71px" w="525px" mt="66px">
          <Text color="#8170F2" fontSize="20px">
            MUST READ
          </Text>
          <Text fontSize="62px" fontWeight="600">
            {foundHighestRating?.title}
          </Text>
          <Box display="flex" mt="16px" mb="30px">
            <Text fontSize="16px" mr="16px">
              {foundHighestRating?.author?.name || ""}
            </Text>
            <Rating rating={foundHighestRating?.rating} />
          </Box>

          <Text fontSize="16px">{foundHighestRating?.synopsis}</Text>
          <Box display="flex" mt="40px" position="relative" bottom="-9">
            <Button
              bgColor="#8170F2"
              _hover={{ bgColor: "#8170F2" }}
              variant="solid"
              color="white"
              h="50px"
              w="193px"
              mr="15px"
            >
              <Link to={`/book/${foundHighestRating?.id}`}>Read Book</Link>
              <Box fontSize="15px" pl="13px" mt="2px">
                <FaArrowRight />
              </Box>
            </Button>
            <Button
              color="#8170F2"
              colorScheme="#8170F2"
              h="50px"
              w="314px"
              variant="outline"
            >
              <Link to={"/top-pics"}>See All Recommendation</Link>
            </Button>
          </Box>
        </Box>
        <Box
          margin="auto"
          mr="201.08px"
          h="390px"
          width="280.14px"
          borderRadius="10px"
          position="relative"
          right="0"
          top="29"
          mt="38px"
          display="flex"
        >
          <Image
            borderRadius="10px"
            my="66px"
            src={foundHighestRating?.image_url}
            h="100%"
            w="100%"
            objectFit="cover"
            margin="0"
            zIndex="3"
          />
          <Image
            borderRadius="10px"
            my="66px"
            src={booksData[9]?.image_url}
            h="83.5%"
            w="84%"
            objectFit="cover"
            position="absolute"
            left="117px"
            top="8"
            ml="10px"
            m="0"
            zIndex="2"
          />
          <Image
            borderRadius="10px"
            my="66px"
            src={booksData[5]?.image_url}
            h="69.8%"
            w="70%"
            objectFit="cover"
            margin="0"
            zIndex="1"
            position="absolute"
            left="205px"
            top="59px"
            m="0"
          />
        </Box>
      </Box>
    </>
  )
}

export default HeroSection
