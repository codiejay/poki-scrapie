import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { PrimaryBttn, SecondaryBttn } from "../Header/PrimaryBttn";

export const JoinSection = () => {
  return (
    <Flex
      bg="#1E2023"
      p="80px"
      position="relative"
      //Add before section
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        background: "url(/thread.png)",
        backgroundSize: "cover",
        width: "300px",
        height: "100%",
        opacity: [0.1, 0.2, 1],
        zIndex: "0",
      }}
    >
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
