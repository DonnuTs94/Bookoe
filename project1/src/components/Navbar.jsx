/* eslint-disable react/prop-types */
import { Box, Button, Icon, Image, Input, Text } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import logo from "../assets/Group 3.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { axiosInstance } from "../api"
import { useDispatch } from "react-redux"
import { searchKeyword, updateSearchResults } from "../redux/search/searchSlice"

const Navbar = () => {
  const [query, setQuery] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handelSearch = async () => {
    try {
      const response = await axiosInstance.get(`books?search=${query}`)

      const searchResults = response.data.data

      if (searchResults.length === 0) {
        navigate("notfound")
        dispatch(searchKeyword(query))
        setQuery("")
      } else {
        dispatch(updateSearchResults(searchResults))
        dispatch(searchKeyword(query))
        navigate("search")
        setQuery("")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handelSearch()
    }
  }

  return (
    <>
      <Box
        maxW="1440px"
        position="fixed"
        display="flex"
        justifyContent="space-between"
        w="100%"
        zIndex={1}
        bgColor="white"
        top="0"
        left="0"
        right="0"
        m="0 auto"
        paddingX="100px"
      >
        <Box display="flex" alignItems="center" position="relative">
          <Box mr="-25px" w="100px" h="100px" mt="33px">
            <Image src={logo} alt="logo" />
          </Box>
          <Box textAlign="start">
            <Text fontSize="41px" fontWeight="500" color="#1D1D1D">
              Bookoe
            </Text>
            <Text mt="-10px" ml="3px" fontSize="14px" fontWeight="300">
              Rekomendasi Bukumu
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box
            w="226px"
            h="30px"
            flexShrink="0"
            display="flex"
            textAlign="center"
            justifyContent="space-between"
            margin="auto"
            mr="40px"
          >
            <Text
              _hover={{ borderBottom: "solid 1px", transition: "0.5s" }}
              cursor="pointer"
              mr="24px"
            >
              <Link to={"/"}>All</Link>
            </Text>
            <Text
              mr="24px"
              _hover={{ borderBottom: "solid 1px", transition: "0.5s" }}
              cursor="pointer"
            >
              <Link to={"/latest"}>Latest</Link>
            </Text>
            <Text
              _hover={{ borderBottom: "solid 1px", transition: "0.5s" }}
              cursor="pointer"
            >
              <Link to={"/top-pics"}>Top Picks</Link>
            </Text>
          </Box>
          <Box
            w="402px"
            display="flex"
            flexShrink="0"
            position="relative"
            top="40px"
          >
            <Input
              h="50px"
              placeholder="Search by title or authors..."
              pl="50px"
              borderRadius="8px"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={handleKey}
            />
            <Icon
              as={Search2Icon}
              lineHeight="normal"
              position="absolute"
              left={5}
              color="#A4A4A4"
              fontWeight="300"
              top="20px"
            />
          </Box>
          <Button
            h="50px"
            w="135px"
            textColor="#8170F2"
            colorScheme="#8170F2"
            rounded={8}
            variant="outline"
            fontSize="20px"
            ml="20px"
            mt="40px"
          >
            {" "}
            Login
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
