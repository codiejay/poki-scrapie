import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set true if scrolled more than the window height, false otherwise
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      py="7px"
      px="30px"
      bg={isScrolled ? "rgba(255, 255, 255, 0.6)" : "white"}
      borderRadius="15px"
      boxShadow={isScrolled ? "md" : "sm"}
      border="1px solid #E2E8F0"
      position={isScrolled ? "fixed" : "relative"}
      top={isScrolled ? "1%" : "0"}
      left={isScrolled ? "15%" : "0"}
      width={isScrolled ? "70%" : "100%"}
      backdropFilter={isScrolled ? "blur(8px)" : "none"}
      zIndex="1000" // Ensure it stays on top of other content
    >
      <Box>
        <Image w="87px" src="/trefLogo.png" alt="R. H. Foundation" />
      </Box>
      <Flex fontFamily="primary" fontWeight="500" fontSize="16px" gap="8">
        <Link href="/#acts" style={{ textDecoration: "none" }}>
          <Text>What We Do</Text>
        </Link>
        <Link href="/#about" style={{ textDecoration: "none" }}>
          <Text>About Us</Text>
        </Link>
        <Link href="/#volunteers" style={{ textDecoration: "none" }}>
          <Text>Volunteers</Text>
        </Link>
      </Flex>
      {/* <PrimaryBttn bttnText="Donate now" /> */}
      <Button
        w="fit-content"
        fontFamily="primary"
        fontSize="15px"
        fontWeight="500"
        _hover={{
          bg: "transparent",
        }}
        border="1.5px solid"
        bg={isScrolled ? "#D2A63C" : "transparent"}
        borderColor={isScrolled ? "transparent" : "#D2A63C"}
        color={isScrolled ? "white" : "#D2A63C"}
        px="12"
        h="54px"
        py="0"
      >
        Donate now
      </Button>
    </Flex>
  );
};
