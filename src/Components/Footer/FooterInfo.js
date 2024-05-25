import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export const FooterInfo = () => {
  return (
    <Box bg="#1E2023" color="white" p="20px">
      <Box
        maxW="1440px"
        w="100%"
        m="0 auto"
        px="100px"
        display="flex"
        gap="12"
        pb="12"
        flexDir="column"
      >
        <Flex direction={{ base: "column", md: "row" }} gap="20px">
          <Box w="50%">
            <Image w="87px" src="/whileLogo.png" alt="R. H. Foundation" />
            <Text w="60%" fontFamily="primary" fontSize="14px">
              Empowering Future Leaders: Providing Quality Education and
              Lifelong Learning Opportunities for Every Childs Success
            </Text>
          </Box>
          <Stack
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              bottom: "-67%",
              left: "-140%",
              background: "url(/subCloudPink.png)",
              backgroundSize: "cover",
              width: "500px",
              height: "500px",
              opacity: "0.8",
            }}
            _after={{
              content: '""',
              position: "absolute",
              bottom: "145%",
              left: "-140%",
              background: "url(/subCloudOrange.png)",
              backgroundSize: "cover",
              width: "400px",
              height: "400px",
              opacity: "0.8",
            }}
            w="60%"
            direction={{ base: "column", md: "row" }}
            spacing={10}
          >
            <Box>
              <Text fontWeight="bold" fontFamily="primary" mb={6}>
                Knowledge Vault
              </Text>
              <VStack
                fontSize="15px"
                fontFamily="primary"
                spacing={2}
                align="start"
              >
                <Link>What We Do</Link>
                <Link>About Us</Link>
                <Link>Team</Link>
                <Link>Privacy Policy</Link>
                <Link>Cookie Policy</Link>
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="bold" fontFamily="primary" mb={6}>
                Contact
              </Text>
              <VStack
                fontSize="15px"
                fontFamily="primary"
                spacing={2}
                align="start"
              >
                {" "}
                <Text>01-700-2000</Text>
                <Link href="mailto:partner@tref.com">partner@tref.com</Link>
                <Link href="mailto:tref@gmail.com">tref@gmail.com</Link>
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="bold" fontFamily="primary" mb={6}>
                Follow Us
              </Text>
              <Flex gap={4}>
                <Box
                  bg="url(/facebook.png) no-repeat center"
                  boxSize="48px"
                  bgSize="cover"
                  onClick={() => {
                    window.open("https://www.facebook.com/");
                  }}
                  cursor="pointer"
                />
                <Box
                  bg="url(/Twitter.png) no-repeat center"
                  boxSize="48px"
                  bgSize="cover"
                  onClick={() => {
                    window.open("https://www.facebook.com/");
                  }}
                  cursor="pointer"
                />
                <Box
                  bg="url(/Instagram.png) no-repeat center"
                  boxSize="48px"
                  bgSize="cover"
                  onClick={() => {
                    window.open("https://www.facebook.com/");
                  }}
                  cursor="pointer"
                />
              </Flex>
            </Box>
          </Stack>
        </Flex>
        <HStack
          fontFamily="primary"
          fontSize="12px"
          align="center"
          justify="space-between"
          w="100%"
          pos="relative"
        >
          <Text textAlign="center">© TREF 2024. All right reserved</Text>
          <Text textAlign="center">Web designed by ProficientWale</Text>
        </HStack>
      </Box>
    </Box>
  );
};
