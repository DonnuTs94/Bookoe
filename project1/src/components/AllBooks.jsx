/* eslint-disable react/prop-types */
import {
  Box,
  Text,
  Image,
  Button,
  SimpleGrid,
  Flex,
  Center,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Rating from "./Ratting"

const AllBooks = ({ books }) => {
  return (
    <>
      <Box display="flex" mt="116px" px="98px">
        <Center margin="auto">
          <SimpleGrid columns={2} gap="114px" mt="30px">
            {books.map((book) => (
              <Flex gap={6} key={book.id} width="fit-content">
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
                  <Rating rating={book.rating} />
                  <Box h="100px" overflow="hidden" mb={2}>
                    <Text fontSize="16px" overflow="hidden">
                      {book.synopsis}
                    </Text>
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
                    <Link to={`/book/${book.id}`}>Read Book</Link>
                  </Button>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </>
  )
}

export default AllBooks
