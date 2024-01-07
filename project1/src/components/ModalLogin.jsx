/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { useRef } from "react"

const ModalLogin = ({ isOpen, onOpen, onClose }) => {
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        isCentered
        size="2xl"
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent borderRadius="15px" border="#8170F2 solid 1px">
          <ModalHeader fontSize="42px" fontWeight="600" color="#8170F2">
            Sign In
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" type="password" />
            </FormControl>
          </ModalBody>
          <ModalFooter mb="20px">
            <Button
              border="#8170F2 1px solid"
              variant="outline"
              mr={3}
              w="100%"
              color="#8170f2"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalLogin
