import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { PrimaryBttn, SecondaryBttn } from "../Header/PrimaryBttn";

export const JoinSection = () => {
  return (
    <Flex bg="#1E2023" p="80px">
      <Flex w="60%" m="0 auto" align="center" justify="center">
        <VStack color="white" align="center" justify="center">
          <Heading fontFamily="secondary" fontSize="36px">
            Together, We Can Make Education Accessible
          </Heading>
          <Text fontFamily="primary">
            Help us break down barriers to education for children everywhere
          </Text>
          <Flex gap="16px" mt="25px">
            <PrimaryBttn bttnText="Donate now" />
            <SecondaryBttn bttnText="Join Volunteer" />
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};
