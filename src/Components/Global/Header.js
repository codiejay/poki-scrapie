import { Box, Flex, Img } from "@chakra-ui/react";
import Search from '../Search';

export const Header = () => {
  return (
    <Flex w="100%" bg="primary" p="4" justifyContent={"space-between"}>
      <Img src="/cvcLogo.png" alt="logo" w="200px" mt="1" />
      <Search/>
      <Box visibility={"hidden"}/>
    </Flex>
  );
};
