import {
  Box,
  Flex,
  Grid,
  HStack,
  Heading,
  SlideFade,
  Text,
} from "@chakra-ui/react";

export const ComingSoon = () => {
  return (
    <Flex
      bg="white"
      h="100vh"
      w="100%"
      flexDirection="column"
      alignItems="center"
      pt={{
        base: "40px",
        lg: 0,
      }}
      justifyContent={{
        base: "flex-start",
        lg: "center",
      }}
    >
      <Flex alignItems="center" w="90%" m="0 auto" justifyContent="center">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          alignContent="center"
          justifyItems="center"
          justifyContent="center"
          w={{
            base: "100%",
            "2xl": "50%",
          }}
          gap={{
            base: "20px",
            lg: "30px",
          }}
          m="0 auto"
        >
          <SlideFade
            in={true}
            offsetY={{ base: "50px", lg: "190px" }}
            offsetX={{ base: "30px", lg: "120px" }}
          >
            <Flex
              w={{
                base: "330px",
                lg: "360px",
              }}
              h={{
                base: "90px",
                lg: "420px",
              }}
              bg="#0F2940"
              borderRadius="12px"
              pos="relative"
            >
              <Box
                pos="absolute"
                w="100%"
                h="100%"
                top="0"
                left="0"
                bg="#0F2940"
                zIndex="2"
                opacity="0.8"
                borderRadius="12px"
              />
              <video
                style={{
                  width: "100%", // Ensures the video covers the full width of the Flex container
                  height: "100%", // Ensures the video covers the full height of the Flex container
                  objectFit: "cover", // Ensures the video covers the area without distorting aspect ratio
                  position: "absolute", // Positions video correctly within the Flex container
                  top: 0,
                  left: 0,
                  borderRadius: "12px",
                  zIndex: "1", // Rounds the corners of the video
                }}
                autoPlay
                loop
                muted
                src="/coffeedrop.mp4" // Adjust the path if your video is located elsewhere
              />
            </Flex>
          </SlideFade>

          {/* Second SlideFade Component */}
          <SlideFade
            in={true}
            offsetY={{ base: "300px", lg: "460px" }}
            offsetX={{ base: "0", lg: "90px" }}
          >
            <Flex
              w={{
                base: "330px",
                lg: "360px",
              }}
              h={{
                base: "300px",
                lg: "420px",
              }}
              bg={`url("/sabi.jpeg")`}
              backgroundPosition="center"
              backgroundSize="cover"
              borderRadius="12px"
            ></Flex>
          </SlideFade>

          {/* Third SlideFade Component */}
          <SlideFade
            in={true}
            offsetY={{ base: "50px", lg: "650px" }}
            offsetX={{ base: "30px", lg: "30px" }}
          >
            <Flex
              w={{
                base: "330px",
                lg: "360px",
              }}
              h={{
                base: "90px",
                lg: "420px",
              }}
              bg="#0F2940"
              borderRadius="12px"
              pos="relative"
            >
              <Box
                pos="absolute"
                w="100%"
                h="100%"
                top="0"
                left="0"
                bg="#0F2940"
                zIndex="2"
                opacity="0.8"
                borderRadius="12px"
              />
              <video
                style={{
                  width: "100%", // Ensures the video covers the full width of the Flex container
                  height: "100%", // Ensures the video covers the full height of the Flex container
                  objectFit: "cover", // Ensures the video covers the area without distorting aspect ratio
                  position: "absolute", // Positions video correctly within the Flex container
                  top: 0,
                  left: 0,
                  borderRadius: "12px",
                  zIndex: "1", // Rounds the corners of the video
                }}
                autoPlay
                loop
                muted
                src="/chocolateHaze.mp4" // Adjust the path if your video is located elsewhere
              />
            </Flex>
          </SlideFade>
        </Grid>
      </Flex>
      <Box mt="20px" w="100%" textAlign="center">
        <Heading
          fontFamily="Heading"
          fontSize={{
            base: "24px",
            lg: "36px",
          }}
        >
          We are cooking...
        </Heading>
        <HStack
          fontSize={{
            base: "12px",
            lg: "14px",
          }}
          gap="2px"
          mt="2"
          justifyContent="center"
          w="100%"
        >
          <Text
            bg="#0F2940"
            p="1"
            borderRadius="3px"
            px="2"
            color="white"
            fontFamily="Paragraph"
          >
            Bluebreakfast
          </Text>
          <Text fontFamily="Paragraph">will be with you shortly</Text>
        </HStack>
      </Box>
    </Flex>
  );
};
