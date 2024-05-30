import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      py="7px"
      px={["15px", "30px"]} // Responsive padding
      bg={isScrolled ? "rgba(255, 255, 255, 0.6)" : "white"}
      borderRadius={["0", "15px"]} // No border radius on smaller screens
      boxShadow={isScrolled ? "md" : "sm"}
      border="1px solid #E2E8F0"
      position={isScrolled ? "fixed" : "relative"}
      top={isScrolled ? "1%" : "0"} // Adjusted to fix to the top
      left={isScrolled && ["10%", "15%"]} // Full width on smaller screens
      width={isScrolled ? ["95%", "100%", "70%"] : "100%"} // Responsive width
      backdropFilter={isScrolled ? "blur(8px)" : "none"}
      zIndex="1000"
    >
      <Box>
        <Image
          w={["60px", "87px"]}
          src="/trefLogo.png"
          alt="R. H. Foundation"
        />
      </Box>
      <Flex
        display={["none", "flex", "flex"]}
        fontFamily="primary"
        fontWeight="500"
        fontSize={["12px", "16px"]}
        gap={["4", "8"]}
        flexGrow={1}
      >
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
      <Button
        display={["none", "flex", "flex"]}
        w="fit-content"
        fontFamily="primary"
        fontSize={["12px", "15px"]}
        fontWeight="500"
        _hover={{ bg: "transparent" }}
        border="1.5px solid"
        bg={isScrolled ? "#D2A63C" : "transparent"}
        borderColor={isScrolled ? "transparent" : "#D2A63C"}
        color={isScrolled ? "white" : "#D2A63C"}
        px="12"
        h={["40px", "54px"]}
        py="0"
      >
        Donate now
      </Button>
      <Menu
        onOpen={() => setIsMenuOpen(true)}
        onClose={() => setIsMenuOpen(false)}
        size="2xl"
        display={["none", "flex", "flex"]}
      >
        <MenuButton
          as={Button}
          p="3"
          w="fit-content"
          h="fit-content"
          bg="transparent"
          border="1px solid #E2E8F0"
          _active={{
            outline: "transparent",
          }}
          _hover={{
            outline: "transparent",
          }}
        >
          {isMenuOpen ? (
            <IoMdClose fontSize="22px" />
          ) : (
            <MdOutlineMenu fontSize="22px" />
          )}
        </MenuButton>
        <MenuList minW="395px" mt="2" py="12" pt="4" mr="0.3rem" px="4">
          <Flex
            fontFamily="primary"
            fontWeight="500"
            fontSize={["12px", "16px"]}
            gap={["4", "8"]}
            flexGrow={1}
            flexDir="column"
            mb="4"
          >
            <Link
              fontSize="16px"
              color="16px"
              href="/#acts"
              style={{ textDecoration: "none" }}
            >
              <Text>What We Do</Text>
            </Link>
            <Link
              fontSize="16px"
              color="16px"
              href="/#about"
              style={{ textDecoration: "none" }}
            >
              <Text>About Us</Text>
            </Link>
            <Link
              fontSize="16px"
              color="16px"
              href="/#volunteers"
              style={{ textDecoration: "none" }}
            >
              <Text>Volunteers</Text>
            </Link>
          </Flex>
          <Button
            w="100%"
            fontFamily="primary"
            fontSize={["12px", "15px"]}
            fontWeight="500"
            _hover={{ bg: "transparent" }}
            border="1.5px solid"
            bg="#D2A63C"
            borderColor={isScrolled ? "transparent" : "#D2A63C"}
            color="white"
            px="12"
            h={["40px", "54px"]}
            py="0"
          >
            Donate now
          </Button>
        </MenuList>
      </Menu>
    </Flex>
  );
};
