import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Subscribe = () => {
  return (
    <Flex>
      <Flex justify="space-between" w="100%" align="center">
        <VStack
          pos="relative"
          color="white"
          align="start"
          w="40%"
          spacing={4}
          _before={{
            content: '""',
            position: "absolute",
            top: "-80%",
            left: "0",
            background: "url(/subCloud.png)",
            backgroundSize: "cover",
            width: "500px",
            height: "500px",
            opacity: "0.8",
          }}
        >
          <Heading fontSize="24px" fontFamily="primary">
            Subscribe to our newsletter
          </Heading>
          <Text fontFamily="primary" fontSize="20px">
            Stay updated with our latest news, events, and impact stories by
            subscribing to our monthly newsletter
          </Text>
          <FormControl display="flex" gap="20px">
            <Input
              fontFamily="primary"
              bg="#4C4C4C"
              _placeholder={{
                color: "white",
              }}
              placeholder="Enter your email"
            />
            <Button
              w="fit-content"
              color="white"
              fontFamily="primary"
              fontSize="15px"
              fontWeight="600"
              bg="#D2A63C"
              _hover={{
                bg: "#e0a03f",
              }}
              px="12"
              py="4"
            >
              Sign Up
            </Button>
          </FormControl>
        </VStack>
        <Box
          bg="url(/subscribe.png) "
          w="512px"
          h="269px"
          bgPos="center"
          bgSize="contain"
          bgRepeat="no-repeat"
        />
      </Flex>
    </Flex>
  );
};
