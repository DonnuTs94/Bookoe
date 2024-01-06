import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import { axiosInstance } from "../api/index"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const BooksList = () => {
  const [BooksList, setBooksList] = useState([])

  const getBooksList = async () => {
    try {
      const response = await axiosInstance.get("/books")
      const booksData = response.data.data

      setBooksList(booksData.slice(4, 8))
      //   console.log(booksData)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBooksList()
  }, [])

  return (
    <>
      <Box
        margin="auto"
        display="flex"
        mt="113px"
        zIndex="0"
        position="relative"
      >
        <Center margin="auto">
          <SimpleGrid columns={4} gap="64px">
            {BooksList.map((book) => (
              <Card key={book.id} w="100%" maxW="265px" margin="auto">
                <CardBody>
                  <Image
                    src={book.image_url}
                    h="340px"
                    w="100%"
                    maxW="260px"
                    objectFit="cover"
                  />
                  <Text fontSize="20px" as="b">
                    {book.title}
                  </Text>
                  <Text fontSize="16px">by {book.author.name}</Text>
                  <Text>Rating</Text>
                </CardBody>
                <CardFooter>
                  <Button
                    //   h="50px"
                    w="100%"
                    textColor="#8170F2"
                    colorScheme="#8170F2"
                    rounded={8}
                    variant="outline"
                    fontSize="20px"
                    position="absolute"
                    bottom="0"
                    left="0"
                  >
                    <Link to={`book/${book.id}`}>Read Book</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </>
  )
}

export default BooksList