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
      <Flex
        px={["10px", "15px", "0"]}
        justify="space-between"
        w="100%"
        align={["start", "start", "end"]}
        borderBottom="1px solid white"
        pb={["25px", "30px", "100px"]}
        flexDir={["column", "column", "row"]}
      >
        <VStack
          pos="relative"
          color="white"
          align="start"
          w={["95%", "95%", "40%"]}
          spacing={4}
          // _before={{
          //   content: '""',
          //   position: "absolute",
          //   top: "-80%",
          //   left: "0",
          //   background: "url(/subCloud.png)",
          //   backgroundSize: "cover",
          //   width: "500px",
          //   height: "500px",
          //   opacity: "0.8",
          // }}
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
              border="none"
              fontFamily="primary"
              bg="#4C4C4C"
              _placeholder={{
                color: "#c9c9c9",
                fontFamily: "primary",
                fontWeight: "500",
                fontsize: "14px",
              }}
              placeholder="Enter your email address"
              py="15px"
              h="48px"
            />
            {/* <PrimaryBttn bttnText="Sign Up" height="48px" /> */}
            <Button
              w="fit-content"
              color="white"
              fontFamily="primary"
              fontSize="15px"
              fontWeight="400"
              bg="#D2A63C"
              _hover={{
                bg: "#e0a03f",
              }}
              px="12"
              h="48px"
              py="0"
            >
              Sign Up
            </Button>
          </FormControl>
        </VStack>
        <Box
          bg="url(/subscribe.png) "
          w={["370px", "370px", "512px"]}
          h="269px"
          bgPos="center"
          bgSize="contain"
          bgRepeat="no-repeat"
        />
      </Flex>
    </Flex>
  );
};
