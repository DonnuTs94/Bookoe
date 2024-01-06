import { Box, Image, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { axiosInstance } from "../api"
import { useEffect, useState } from "react"

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

  console.log(BookDetail)

  useEffect(() => {
    getBookById()
  }, [])

  return (
    <>
      <Box mt="166px" display="flex">
        <Box mr="76px" maxH="587px" w="408px">
          <Image borderRadius="14.5px" src={BookDetail.image_url} />
        </Box>
        <Box mt="62px">
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
          <Text h="55.8px" w="279px">
            {BookDetail.rating}
          </Text>
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
