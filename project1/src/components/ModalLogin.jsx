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
  useToast,
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { axiosInstance } from "../api"

const ModalLogin = ({ isOpen, onOpen, onClose }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const toast = useToast()

  const loginUser = async () => {
    try {
      const response = await axiosInstance.post("/auth", {
        email,
        password,
      })

      setEmail("")
      setPassword("")
      onClose(onClose)

      toast({
        title: "Successfully Login",
        status: "success",
        duration: "4000",
        isClosable: true,
      })

      localStorage.setItem("auth_token", response.data.token)
      console.log(response)
    } catch (err) {
      toast({
        title: "Wrong Email or Password",
        description: "Check your email or password",
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    }
  }

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
              <Input
                ref={initialRef}
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter mb="20px">
            <Button
              border="#8170F2 1px solid"
              variant="outline"
              mr={3}
              w="100%"
              color="#8170f2"
              onClick={loginUser}
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
