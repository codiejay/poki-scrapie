import { Box, Flex } from "@chakra-ui/react";
import { Subscribe } from "./Subscribe";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      pt="50px"
      flexDir="column"
      gap={12}
      bg="#1E2023"
    >
      <Box
        maxW="1440px"
        w="100%"
        m="0 auto"
        px={["10px", "15px", "100px"]}
        display="flex"
        gap="12"
        pb="12"
        flexDir="column"
      >
        <Subscribe />
      </Box>
    </Flex>
  );
};
