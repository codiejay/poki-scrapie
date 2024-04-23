import { Box, Flex } from "@chakra-ui/react";
import Search from "../Search";

export const Header = () => {
  return (
    <Flex w="100%" bg="primary" p="4" justifyContent={"space-between"}>
      {/* <Img src="/cvcLogo.png" alt="logo" mt="1" /> */}
      <Box
        w="400px"
        h="40px"
        bg="url('/cvcLogo.png') center/contain no-repeat"
      />
      <Search />
      <Box visibility={"hidden"} />
    </Flex>
  );
};
