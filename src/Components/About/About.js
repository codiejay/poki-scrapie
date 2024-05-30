import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export const About = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      pt="50px"
      flexDir="column"
      gap={12}
      bg="white"
      pb="70px"
    >
      <Box
        maxW="1440px"
        w="100%"
        m="0 auto"
        px={["10px", "15px", "100px"]}
        display="flex"
        gap="12"
        pb="12"
      >
        <VStack width="100%" align="start" spacing={["0px", "20px", "40px"]}>
          <HStack w={["95%", "95%", "70%"]} align="center" spacing="60px">
            <Heading
              fontFamily="secondary"
              fontWeight="600"
              color="#1A202C"
              fontSize={["24px", "24px", "40px"]}
              mb="6"
              w={["50%", "100%", "auto"]}
            >
              About Us TREF
            </Heading>
            <Divider
              w={["60%", "30%", "373px"]}
              borderColor="#D2A63C"
              opacity="0.5"
              mt="-3"
            />
          </HStack>
          <HStack
            w="100%"
            justify="space-between"
            gap={["12px", "12px", "47px"]}
            flexDir={["column", "column", "row"]}
            align="start"
          >
            <VStack w={["95%", "95%", "80%"]} gap="40px">
              <Text
                fontSize={["14px", "14px", "20px"]}
                color="#4A5568"
                fontFamily="primary"
              >
                Every child deserves a healthy start in life, the opportunity to
                learn and protection from harm. Yet, an estimated 5.4 million
                children under age 5 still die each year from preventable causes
                Every child deserves a healthy start in life, the opportunity to
                learn and protection from harm. Yet, an estimated 5.4 million
                children under age 5 still die each year from preventable causes
              </Text>
              <Text
                fontSize={["14px", "14px", "20px"]}
                color="#4A5568"
                fontFamily="primary"
              >
                Every child deserves a healthy start in life, the opportunity to
                learn and protection from harm. Yet, an estimated 5.4 million
                children under age 5 still die each year from preventable
                causes, Every child deserves a healthy start in life, the
                opportunity to learn and protection from harm. Yet, an estimated
                5.4 million children under age 5 still die each year from
                preventable causes
              </Text>
            </VStack>

            <Box
              w={["378px", "378px", "100%"]}
              h={["278px", "278px", "469px"]}
              bg="url(/founder.png) no-repeat center"
              bgSize="contain"
              alt="Founder of the organization"
            />
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};
