import { Flex, Heading, Text } from "@chakra-ui/react";

export const Figures = ({ num, text }) => {
  return (
    <Flex flexDir="column" align="center" justify="center" gap="12px">
      <Heading
        fontFamily="secondary"
        fontWeight="black"
        color="#1A202C"
        fontSize="40px"
      >
        {num}
      </Heading>
      <Text
        fontFamily="primary"
        fontWeight="500"
        color="#1A202C"
        fontSize="18px"
      >
        {text}
      </Text>
    </Flex>
  );
};
export const FiguresQuotes = () => {
  return (
    <Flex
      px="50px"
      py="20px"
      bg="url(/fgBg.png)"
      bgPos="center"
      bgSize="cover"
      justify="center"
      w="100%"
      h="206px"
      align="center"
    >
      <Flex w="60%" justify="center" gap="110px">
        <Figures num="#100m+" text="Money donated" />
        <Figures num="560+" text="Donations Received" />
        <Figures num="120+" text="Successful Campaign" />
        <Figures num="#100m+" text="Charity in last year" />
      </Flex>
    </Flex>
  );
};
