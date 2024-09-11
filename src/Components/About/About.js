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
                fontWeight="medium"
              >
                Ric Hassani is a Nigerian born Pop-African singer and
                songwriter. In 2012, Ric released his first single called
                &apos;Dance Dance Baby Dance. He then released a follow-up
                single titled &apos;Double Double&apos;. <br /> In September
                2015, he became the first Nigerian Artist to headline the Lake
                of Stars Festival in Lilongwe Malawi, along-side Uhuru and Toya
                Delazy. He released his first Album Compilation called; African
                Tour Select Singles 2015. The following month, he released an
                EP, a five track compilation of acoustic versions of his
                pre-recorded music including fan favourites like Joy, Stay and
                Depression. He has gone further to release two albums, The
                Prince I Became and Afro Love. The success of his music journey
                has lead him to tour over 30 countries performing his music.
              </Text>
              <Text
                fontSize={["14px", "14px", "20px"]}
                color="#4A5568"
                fontFamily="primary"
                fontWeight="medium"
              >
                Ric Hassani is very passionate about education. Coming from an
                educational background, his parent were both professors. This
                passion in education drove him to acquire his Bsc in Economics
                at the Covenant University and Masters degree in the University
                of Surrey England with a PhD on hold.
              </Text>
            </VStack>

            <Box
              w={["378px", "378px", "100%"]}
              h={["278px", "278px", "100%"]}
              bg="url(/founder.JPG) no-repeat top"
              bgSize="cover"
              alt="Founder of the organization"
            />
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};
