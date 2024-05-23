import {
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { PrimaryBttn } from "../Header/PrimaryBttn";

export const Subscribe = () => {
  return (
    <Flex>
      <Flex justify="space-between" w="100%">
        <VStack color="white" align="start" w="40%" spacing={4}>
          <Heading fontSize="24px" fontFamily="primary">
            Subscribe to our newsletter
          </Heading>
          <Text fontFamily="primary" fontSize="16px">
            Stay updated with our latest news, events, and impact stories by
            subscribing to our monthly newsletter
          </Text>
          <FormControl display="flex" gap="16px">
            <Input
              fontFamily="primary"
              bg="#4C4C4C"
              _placeholder={{
                color: "white",
              }}
              placeholder="Enter your email"
            />
            <PrimaryBttn bttnText="Sign up" fontWeight="600" />
          </FormControl>
        </VStack>
        <Box
          bg="url(/subscribe.png) "
          w="35%"
          h="269px"
          bgPos="center"
          bgSize="contain"
          bgRepeat="no-repeat"
        />
      </Flex>
    </Flex>
  );
};
