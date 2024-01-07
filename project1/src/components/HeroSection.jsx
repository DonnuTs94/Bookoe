import { Box, Button, Image, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchBooksData } from "../redux/allBooks/booksAsync"
import Rating from "./Ratting"

const HeroSection = () => {
  const [foundHighestRating, setFoundHighestRating] = useState(null)
  const dispatch = useDispatch()
  const booksData = useSelector((state) => state.books.books)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchBooksData())
    }
    fetchData()
  }, [dispatch])

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
        mt="140px"
        zIndex="0"
        position="relative"
        mx="100px"
      >
        <Box margin="auto" ml="71px">
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
          <Box display="flex" mt="40px">
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
            </Button>
            <Button
              color="#8170F2"
              colorScheme="#8170F2"
              h="50px"
              w="193px"
              variant="outline"
            >
              See All Recommendation
            </Button>
          </Box>
        </Box>
        <Box maxW="50%" margin="auto" mr="71px">
          <Image
            my="66px"
            src={foundHighestRating?.image_url}
            maxW="408.45px"
            h="390px"
          />
        </Box>
      </Box>
    </>
  )
}

export default HeroSection
