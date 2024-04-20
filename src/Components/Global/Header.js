import { Flex, Img } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex w="100%" bg="primary" p="4">
      <Img src="/cvcLogo.png" alt="logo" w="200px" mt="1" />
    </Flex>
  );
};
