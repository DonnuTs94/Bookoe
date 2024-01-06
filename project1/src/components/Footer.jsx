import { Box, Text } from "@chakra-ui/react"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <Box
        display="flex"
        borderTop="solid 1px  #D9DBE9"
        justifyContent="space-between"
        alignItems="center"
        mt="55.56px"
      >
        <Box mt="37px" mb="33.74px" ml="110px" h="20px" width="457px">
          <Text
            fontSize="18px"
            fontWeight="400px"
            color="#6F6C90"
            lineHeight="20px"
          >
            Copyright © 2023 Codemasters.id | All Rights Reserved
          </Text>
        </Box>
        <Box mr="100px" display="flex" gap="22px" w="117px" textColor="#8170F2">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagramSquare />
          <FaLinkedinIn />
          <FaYoutube />
        </Box>
      </Box>
    </>
  )
}

export default Footer
