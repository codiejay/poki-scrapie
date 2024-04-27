"use client";
import EmblaCarousel from "@/Components/Slider/EmCarousel";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdVideocam,
} from "react-icons/io";
import { ModelVideoModal } from "./ModelVideoModal";

function ModelPerks(props) {
  return (
    <Flex gap={2} mt="2">
      <Text bg="primary" color="white" px="2" py="1" borderRadius="200px">
        {props.tags.bodyType}
      </Text>
      <Text bg="primary" color="white" px="2" py="1" borderRadius="200px">
        {props.tags.height}
      </Text>
      <Text bg="primary" color="white" px="2" py="1" borderRadius="200px">
        {props.tags.sexToy && "Yes, I have a sex toy"}
      </Text>
    </Flex>
  );
}

export function ModelClientCard(props) {
  return (
    <Box>
      <Box pos="relative" mb="6">
        <EmblaCarousel slides={props.model.images} options={props.OPTIONS} />
        <Button
          position="absolute"
          bottom="0"
          left="0"
          borderRadius="0"
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
          mt={6}
          rightIcon={<IoMdVideocam />}
          onClick={props.onOpen}
        >
          Watch my sneak peek video
        </Button>

        <ModelVideoModal
          isOpen={props.isOpen}
          onClose={props.onClose}
          name={props.model.name}
        ></ModelVideoModal>
      </Box>

      <Heading color="white" fontFamily="Clashmid">
        {props.model.name}
      </Heading>
      <Text mb="24" color="white" fontFamily="Clashmid">
        {props.model.bio}
      </Text>
      <ModelPerks tags={props.model.tags}></ModelPerks>
      <VStack align="start">
        <Button
          p="2"
          fontWeight="normal"
          _hover={{
            bg: "primary",
          }}
          h="fit-content"
          fontSize="14px"
          bg="primary"
          color="white"
          mt={6}
          rightIcon={
            props.showCustomRequestForm ? (
              <IoMdArrowDropup />
            ) : (
              <IoMdArrowDropdown />
            )
          }
          onClick={() => {
            props.setShowCustomRequestForm(!props.showCustomRequestForm);
          }}
        >
          Make Custom Request
        </Button>
        <Textarea
          display={props.showCustomRequestForm ? "block" : "none"}
          placeholder="Example: Call my name: Ola while you talk to me"
          height="122px"
          color="white"
          _placeholder={{
            color: "white",
          }}
          fontSize="14px"
        />
      </VStack>
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
        Connect with {props.model.name}
      </Button>
    </Box>
  );
}
