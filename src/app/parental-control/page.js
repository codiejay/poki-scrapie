import { Flex, Heading, Text } from '@chakra-ui/react';

 const UnderConstructionPage = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      minH={"90vh"}
    >
      <Heading fontSize={"2xl"}>Under Construction</Heading>
      <Text fontSize={"lg"}>
        This page is currently under construction. Please check back later.
      </Text>
    </Flex>
  );
};


export default UnderConstructionPage;

