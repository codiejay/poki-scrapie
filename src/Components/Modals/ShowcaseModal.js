import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

export const ShowcaseModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
      <ModalOverlay />
      <ModalContent h="500px" p="12">
        <iframe
          width="100%"
          height="100%"
          src="https://youtu.be/oS_MogDasbE"
          title="Ric Hassani - Love Again (Official Video)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </ModalContent>
    </Modal>
  );
};
