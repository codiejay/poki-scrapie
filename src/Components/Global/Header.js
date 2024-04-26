import { Box, Flex } from "@chakra-ui/react";
import Search from "../Search";

export const Header = () => {
  return (
    <Flex
      w="100%"
      bg="primary"
      p={"4"}
      gap={{ base: 2, md: 0 }}
      justifyContent={"space-between"}
    >
      <Box
        w={{ base: "250px", sm: "300px", md: "400px" }}
        h="40px"
        bg="url('/balaclavaLogo.svg') left/contain no-repeat"
      />
      <Search />
      <Box visibility={"hidden"} />
    </Flex>
  );
};
