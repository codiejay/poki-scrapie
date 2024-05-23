import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Figures = ({ num, text }) => {
  return (
    <Flex flexDir="column" align="center" justify="center">
      <Heading
        fontFamily="secondary"
        fontWeight="600"
        color="#1A202C"
        fontSize="40px"
      >
        {num}
      </Heading>
      <Text
        fontFamily="primary"
        fontWeight="normal"
        color="#1A202C"
        fontSize="16px"
      >
        {text}
      </Text>
    </Flex>
  );
};
export const FiguresQuotes = () => {
  return (
    <Flex
      px="50px"
      py="20px"
      bg="url(/fgBg.png)"
      bgPos="center"
      bgSize="cover"
      justify="space-between"
      w="100%"
      h="206px"
      align="center"
    >
      <Figures num="#100m+" text="Money donated" />
      <Figures num="560+" text="Donations Received" />
      <Figures num="120+" text="Successful Campaign" />
      <Figures num="#100m+" text="Charity in last year" />
    </Flex>
  );
};
