import {
  Box,
  Text,
  Image,
  Button,
  SimpleGrid,
  Flex,
  Center,
} from "@chakra-ui/react"
import { axiosInstance } from "../api/index"
import { useEffect } from "react"
import { useState } from "react"
import { Outlet } from "react-router-dom"

const AllBooks = () => {
  const [books, setBooks] = useState([])

  const getAllBooks = async () => {
    try {
      const response = await axiosInstance.get("/books")
      setBooks(response.data.data.slice(0, 4))
      //   }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllBooks()
  }, [])

  return (
    <>
      <Box
        margin="auto"
        display="flex"
        mt="116px"
        zIndex="0"
        position="relative"
      >
        <Center margin="auto">
          <SimpleGrid columns={2} gap="114px" mt="30px">
            {books.map((book) => (
              <Box key={book.id} w="100%">
                <Flex gap={6}>
                  <Box>
                    <Image
                      h="346px"
                      w="277px"
                      src={book.image_url}
                      objectFit="cover"
                    />
                  </Box>
                  <Box w="287px" position="relative">
                    <Text as="b" fontSize="20px" mb={2}>
                      {book.title}
                    </Text>
                    <Text fontSize="16px" mb={2} mt={3}>
                      by {book.author.name}
                    </Text>
                    {/* Add your rating component here */}
                    <Box>RATING</Box>
                    <Box h="100px" overflow="hidden" mb={2}>
                      <Text fontSize="16px">{book.synopsis}</Text>
                    </Box>
                    <Button
                      h="50px"
                      w="100%"
                      textColor="#8170F2"
                      colorScheme="#8170F2"
                      rounded={8}
                      variant="outline"
                      fontSize="20px"
                      position="absolute"
                      bottom="0"
                    >
                      Read Book
                    </Button>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Center>
      </Box>
      <Outlet />
    </>
  )
}

export default AllBooks
