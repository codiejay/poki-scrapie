import { Flex, Heading, Text } from "@chakra-ui/react";
import { NewsTicker } from "./Ticker";

export const Figures = ({ num, text }) => {
  return (
    <Flex flexDir="column" align="center" justify="center" gap="12px">
      <Heading
        fontFamily="secondary"
        fontWeight="700"
        color="#1A202C"
        fontSize={["24px", "24px", "40px"]}
      >
        {num}
      </Heading>
      <Text
        fontFamily="primary"
        fontWeight="500"
        color="#1A202C"
        fontSize={["12px", "12px", "18px"]}
      >
        {text}
      </Text>
    </Flex>
  );
};

export const FiguresQuotes = () => {
  return (
    <Flex
      px="0"
      py="20px"
      // bg="url(/fgBg.png)"
      bgPos="center"
      bgSize="cover"
      justify="center"
      w="100%"
      h={["auto", "auto", "180px"]}
      align="center"
      // borderTop="2px solid #E2E8F0"
      // borderBottom="2px solid #E2E8F0"
    >
      {/* <Box
        display="grid"
        // gridTemplateColumns={["1fr 1fr", "1fr 1fr", "repeat(4, 1fr)"]}
        gap="20px"
        w="100%"
        justifyItems="center"
      >
        <Flex
          gap="24px"
          flexDir="column"
          justify="center"
          align="left"
          w="100%"
        >
          <Heading
            color="#1A202C"
            fontFamily="primary"
            fontSize={["12px", "16px", "24px"]}
          >
            We eagerly await your donations ❤️
          </Heading>
          <Heading
            color="#1A202C"
            fontFamily="primary"
            fontSize={["16px", "24px", "38px"]}
          >
            Licensed by Lagos Education board
          </Heading>
        </Flex>
        {/* <Figures num="#10m+" text="Money Donated" />
        <Figures num="560+" text="Donations Received" />
        <Figures num="120+" text="Successful Campaign" />
        <Figures num="#10m+" text="Charity in last year" /> */}
      {/* </Box> */}
      <NewsTicker
        text={[
          "Licensed by the Lagos Universal Basic Education board",
          "***",
          "We eagerly await your donations ❤️",
        ]}
      />
    </Flex>
  );
};
