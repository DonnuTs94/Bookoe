/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import Rating from "./Ratting"

const Cards = ({ bookData, renderDate, renderNumber, renderBorder }) => {
  const filteringData = bookData.slice(0, 4)

  return (
    <>
      <Box mt="77px" display="flex" gap="64px">
        {filteringData.map((item, i) => (
          <Card key={item.id} w="265px" h="auto">
            <CardBody position="relative">
              <Box h="360px">
                <Image
                  src={item.image_url}
                  w="100%"
                  borderRadius="8px"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
              {renderBorder && (
                <Box
                  h="41px"
                  minWidth="80px"
                  width="fit-content"
                  backgroundColor="#8170F2"
                  borderTopRightRadius="50px"
                  borderBottomEndRadius="50px"
                  position="absolute"
                  top="12"
                  mt="3px"
                >
                  {renderNumber && (
                    <Box
                      display="flex"
                      bgColor="#ffffff"
                      w="30px"
                      h="30px"
                      borderRadius="50px"
                      textAlign="center"
                      position="absolute"
                      top="1"
                      right="1"
                      my="2px"
                      mr="1px"
                    >
                      <Text margin="auto">{i + 1}</Text>
                    </Box>
                  )}
                  {renderDate && (
                    <Box
                      key={item.id}
                      fontSize="18.67px"
                      color="#ffffff"
                      lineHeight="28px"
                      pl="18px"
                      mr="29.81px"
                      mt="6px"
                    >
                      {format(new Date(item.created_at), "dd/MM/yyyy")}
                    </Box>
                  )}
                </Box>
              )}

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
              <Box mt="14px">
                <Rating rating={item.rating} />
              </Box>
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
        ))}
      </Box>
    </>
  )
}

export default Cards
