import { Box, Image, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { axiosInstance } from "../api"
import { useEffect, useState } from "react"
import Rating from "../components/Ratting"

const BookDetail = () => {
  const [BookDetail, setBookDetail] = useState([])

  const params = useParams()

  const getBookById = async () => {
    try {
      const response = await axiosInstance.get(`/books/${params.id}`)
      setBookDetail(response?.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBookById()
  }, [])

  return (
    <>
      <Box mt="142px" display="flex" px="98px">
        <Box mr="76px" h="587px" w="408px">
          <Image
            borderRadius="14.5px"
            src={BookDetail.image_url}
            boxSize="100%"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box mt="62px" w="745px">
          <Text
            fontSize="62px"
            color="#1D1D1D"
            fontWeight="600"
            lineHeight="93px"
          >
            {BookDetail.title}
          </Text>
          <Text
            fontSize="36px"
            lineHeight="54px"
            fontWeight="300"
            color="#1D1D1D"
          >
            by {BookDetail.author ? BookDetail.author.name : ""}
          </Text>
          <Box
            h="55.8px"
            w="279px"
            mt="19px"
            display="flex"
            alignItems="center"
          >
            <Box
              bgColor="#FDAF17"
              borderRadius="50"
              h="55.16px"
              w="55.16px"
              mr="12px"
            >
              <Text
                textColor="white"
                textAlign="center"
                p="12px"
                fontSize="21.53px"
                fontWeight="400"
              >
                {BookDetail.rating}
              </Text>
            </Box>
            <Rating rating={BookDetail.rating} />
          </Box>
          <Text
            w="745px"
            h="119px"
            overflow="hidden"
            fontSize="20px"
            fontWeight="400"
            lineHeight="30px"
          >
            {BookDetail.synopsis}
          </Text>
          {/* <Text>{BookDetail.synopsis}</Text> */}
        </Box>
      </Box>
    </>
  )
}

export default BookDetail
