/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

const Rating = ({ rating }) => {
  const fullStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <StarIcon key={index} color="#FDAF17" boxSize={5} />
  ))

  const remainingStars = Array.from(
    { length: Math.floor(6 - rating) },
    (_, index) => <StarIcon key={index} color="#CCCCCC" boxSize={5} />
  )

  return (
    <Box display="flex">
      {fullStars}
      {remainingStars}
    </Box>
  )
}

export default Rating
