"use client";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
