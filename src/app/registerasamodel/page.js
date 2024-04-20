"use client";

import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { createUserWithGoogle } from "../appwrite";

const RegisterAsAModel = () => {
  return (
    <Flex pt="12" px="12">
      <VStack w="50%" align="start">
        <Heading color="white" fontFamily="Clashreg" fontSize="60px" w="70%">
          Become A VC Model, For Free.
        </Heading>
        <Flex gap="2" fontFamily="Clashmid" color="white">
          <Box bg="primary" borderRadius="4px" p="2">
            Pick your availability
          </Box>
          <Box bg="primary" borderRadius="4px" p="2">
            Set your price
          </Box>
          <Box bg="primary" borderRadius="4px" p="2">
            Get paid
          </Box>
        </Flex>
      </VStack>
      <VStack w="50%" justify="center">
        <Button
          onClick={() => {
            createUserWithGoogle();
          }}
          leftIcon={<FcGoogle fontSize="21px" />}
          fontFamily="Clashreg"
        >
          Continue With Google Account
        </Button>
        <Text color="white" fontSize="14px" fontFamily="Clashmid">
          *No fear- All your information will be kept private and secure.
        </Text>
      </VStack>

      {/* Todo: Add a scrollable image section with heading of "Join The Family" */}
    </Flex>
  );
};

export default RegisterAsAModel;
