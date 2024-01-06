import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import FooterCta from "../components/FooterCta"

const BookoeLayout = () => {
  return (
    <>
      <Box maxW="1440px">
        <Navbar />
        <Box mx="100px">
          <Outlet />
        </Box>
        <FooterCta />
        <Footer />
      </Box>
    </>
  )
}

export default BookoeLayout
