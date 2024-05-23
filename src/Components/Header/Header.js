import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { PrimaryBttn } from "./PrimaryBttn";

export const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      py="7px"
      px="30px"
      bg="white"
      borderRadius="md"
      boxShadow="sm"
      border="1px solid #E2E8F0" // Light gray border
    >
      <Box>
        <Image w="87px" src="/trefLogo.png" alt="R. H. Foundation" />
      </Box>
      <Flex fontFamily="primary" fontWeight="500" fontSize="16px" gap="8">
        <Link href="/what-we-do" style={{ textDecoration: "none" }}>
          <Text>What We Do</Text>
        </Link>
        <Link href="/about-us" style={{ textDecoration: "none" }}>
          <Text>About Us</Text>
        </Link>
        <Link href="/volunteers" style={{ textDecoration: "none" }}>
          <Text>Volunteers</Text>
        </Link>
      </Flex>
      <PrimaryBttn bttnText="Donate now" />
    </Flex>
  );
};
