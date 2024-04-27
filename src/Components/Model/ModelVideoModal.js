"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { IoMdVideocam } from "react-icons/io";

export function ModelVideoModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <iframe
            title="video"
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="450"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Button
            p="2"
            fontWeight="normal"
            _hover={{
              bg: "primary",
            }}
            fontFamily={"Clashmid"}
            w="100%"
            h="fit-content"
            fontSize="19px"
            bg="primary"
            color="white"
            mt={24}
            rightIcon={<IoMdVideocam />}
          >
            Connect with {props.name}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
