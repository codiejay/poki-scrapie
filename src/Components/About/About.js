import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      pt="50px"
      flexDir="column"
      gap={12}
      bg="white"
    >
      <Box
        maxW="1440px"
        w="100%"
        m="0 auto"
        px="100px"
        display="flex"
        gap="12"
        pb="12"
      >
        <VStack width="50%" align="start" spacing={4}>
          <Heading
            fontFamily="secondary"
            fontWeight="600"
            color="#1A202C"
            fontSize="40px"
            mb="6"
          >
            About Us TREF
          </Heading>
          <Text fontSize="20px" color="#4A5568">
            Every child deserves a healthy start in life, the opportunity to
            learn and protection from harm. Yet, an estimated 5.4 million
            children under age 5 still die each year from preventable causes
            Every child deserves a healthy start in life, the opportunity to
            learn and protection from harm. Yet, an estimated 5.4 million
            children under age 5 still die each year from preventable causes
          </Text>
          <Text fontSize="20px" color="#4A5568">
            Every child deserves a healthy start in life, the opportunity to
            learn and protection from harm. Yet, an estimated 5.4 million
            children under age 5 still die each year from preventable causes,
            Every child deserves a healthy start in life, the opportunity to
            learn and protection from harm. Yet, an estimated 5.4 million
            children under age 5 still die each year from preventable causes
          </Text>
        </VStack>
        <Box
          w="50%"
          h="469px"
          bg="url(/founder.png) no-repeat center"
          bgSize="contain"
          alt="Founder of the organization"
        />
      </Box>
    </Flex>
  );
};
