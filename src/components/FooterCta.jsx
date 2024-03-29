import { Box, Button, Image, Input, Text } from "@chakra-ui/react"
import { CiMail } from "react-icons/ci"
import logo from "../assets/Group 3.png"

const FooterCta = () => {
  return (
    <>
      <Box marginX="96px">
        <Box
          bgColor="#8170F2"
          borderRadius="15px"
          mt="118px"
          h="303px"
          display="flex"
          flexDir="column"
        >
          <Box textAlign="center" margin="auto" mt="44px">
            <Text
              color="#ffffff"
              fontSize="42px"
              fontWeight="600"
              lineHeight="63px"
              maxW="794px"
              margin="0 auto"
              h="126px"
            >
              Join our newsletter to get our latest recommendation!
            </Text>
          </Box>
          <Box
            display="flex"
            w="452px"
            alignItems="center"
            justifyContent="center"
            margin="auto"
            h="50px"
            mt="-38px"
            position="relative"
          >
            <Input
              borderRadius="8px"
              bgColor="white"
              mr="8px"
              w="345px"
              h="50px"
              placeholder="Enter your mail"
              pl="59px"
            />
            <Box
              position="absolute"
              left="4"
              ml="3px"
              w="28px"
              color="#8170F2"
              fontSize="20.2px"
            >
              <CiMail />
            </Box>
            <Button borderRadius="8px" w="99px" h="50px" color="#8170F2">
              Submit
            </Button>
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" position="relative">
              <Box mr="-25px" w="100px" h="100px" mt="33px">
                <Image src={logo} alt="logo" />
              </Box>
              <Box textAlign="start" mb="15px">
                <Text fontSize="41px" fontWeight="500" color="#1D1D1D">
                  Bookoe
                </Text>
                <Text mt="-10px" ml="3px" fontSize="14px" fontWeight="300">
                  Rekomendasi Bukumu
                </Text>
              </Box>
            </Box>
            <Box w="526.27px" h="60px">
              <Text fontSize="18px" fontWeight="400" lineHeight="30px" h="80px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default FooterCta
