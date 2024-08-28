import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { PrimaryBttn, SecondaryBttn } from "../Header/PrimaryBttn";

export const JoinSection = () => {
  return (
    <Flex
      bg="#1E2023"
      p="80px"
      position="relative"
      //Add before section
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        background: "url(/thread.png)",
        backgroundSize: "cover",
        width: "300px",
        height: "100%",
        opacity: [0.1, 0.2, 1],
        zIndex: "0",
      }}
      px={["10px", "15px", "100px"]}
    >
      <Flex
        w={["100%", "100%", "60%"]}
        m="0 auto"
        align="center"
        justify="center"
      >
        <VStack
          color="white"
          align="center"
          justify={["start", "start", "center"]}
          w={["84%", "84%", "100%"]}
          m="0 auto"
        >
          <Heading
            fontFamily="secondary"
            fontSize={["24px", "24px", "36px"]}
            textAlign="center"
          >
            Together, We Can Make Education Accessible
          </Heading>
          <Text
            fontFamily="primary"
            fontSize={["14px", "14px", "20px"]}
            textAlign="center"
          >
            Help us break down barriers to education for children everywhere
          </Text>
          <Flex gap="16px" mt="25px">
            <PrimaryBttn bttnText="Donate now" as={Link} href="/donate" />
            <SecondaryBttn
              as={Link}
              href="https://docs.google.com/forms/d/e/1FAIpQLSeEamw8NbNWrDeSYIxeDHXxTJLFHh9HnxQ8rbtKKWYI7ATRVQ/viewform?usp=sf_link"
              bttnText="Join Volunteers"
            />
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};
