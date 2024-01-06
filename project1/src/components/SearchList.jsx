import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const SearchList = () => {
  const searchResults = useSelector((state) => state.search.searchResults)
  const filteringData = searchResults.slice(0, 4)

  console.log(filteringData)

  return (
    <>
      <Box mt="77px" display="flex" gap="64px">
        {filteringData.map((item) => (
          // <SimpleGrid key={item.id}>
          <Card key={item.id} w="265px" h="auto">
            <CardBody>
              <Image
                src={item.image_url}
                w="260px"
                borderRadius="8px"
                h="340px"
              />
              <Text
                fontSize="24px"
                fontWeight="600"
                lineHeight="32px"
                mt="10px"
                w="260px"
                overflow="hidden"
              >
                {item.title}
              </Text>
              <Text fontSize="20px" fontWeight="400" lineHeight="30px" mt="6px">
                by {item.author.name}
              </Text>
              <Text mt="14px">Rating</Text>
            </CardBody>
            <CardFooter>
              <Button
                h="50px"
                w="260px"
                textColor="#8170F2"
                colorScheme="#8170F2"
                borderRadius="8px"
                variant="outline"
                fontSize="20px"
              >
                <Link to={`/book/${item.id}`}>Read Book</Link>
              </Button>
            </CardFooter>
          </Card>
          // </SimpleGrid>
        ))}
      </Box>
    </>
  )
}

export default SearchList
