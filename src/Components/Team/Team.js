import {
  Box,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const teamData = [
  {
    img: "/ricTeam.jpeg",
    name: "Ric Hassani",
    position: "Founder TREF",
  },
  {
    img: "kenTeam.jpeg",
    name: "Kenneth Godwin",
    position: "Operations Manager",
  },
  {
    img: "timiTeam.jpeg",
    name: "Timi Okuselu",
    position: "Finance Manager",
  },
  {
    img: "enitanTeam.jpeg",
    name: "Enitan Feyisara Aregbesola",
    position: "Social Media Manager",
  },
];

const TeamCard = ({ img, name, position }) => {
  return (
    <Flex
      borderRadius="30px"
      minW={["290px", "320px", "375px"]}
      h="468px"
      bg={`url(${img}) no-repeat center`}
      bgSize="cover"
      align="end"
      pb="6"
    >
      <Flex
        w="90%"
        m="0 auto"
        textAlign="center"
        bg="black"
        h="fit-content"
        flexDir="column"
        p="4"
        color="white"
        align="start"
        borderRadius="12"
        opacity="0.8"
      >
        <Heading color="white" fontSize="24px" fontWeight="500">
          {name}
        </Heading>
        <Text fontSize="16px">{position}</Text>
      </Flex>
    </Flex>
  );
};

export const Team = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      pt="50px"
      flexDir="column"
      gap={12}
      bg="white"
      id="volunteers"
    >
      <Box
        maxW="1440px"
        w="100%"
        m="0 auto"
        px={["10px", "15px", "100px"]}
        display="flex"
        gap="12"
        flexDir="column"
        pt="40px"
        pb={["40px", "40px", "100px"]}
      >
        <HStack
          justifyContent="space-between"
          alignItems="start"
          flexDir={["column", "column", "row"]}
        >
          <HStack w={["95%", "95%", "40%"]} align="start" gap="60px">
            <Heading
              fontSize="56px"
              fontFamily="secondary"
              fontWeight="600"
              color="#1A202C"
              w="fit-content"
            >
              Team
            </Heading>
            <Divider
              mt="2"
              w="100%"
              h="30px"
              borderColor="#D2A63C"
              opacity="0.5"
            />
          </HStack>

          <VStack w={["95%", "95%", "50%"]} spacing={4} align="start" pt="5">
            <Text
              fontWeight="400"
              fontFamily="primary"
              fontSize="24px"
              color="#232323"
            >
              Current Volunteers
            </Text>
            <Text fontFamily="primary" fontSize="16px" color="#232323">
              The volunteer team at TREF is a dedicated group of individuals
              committed to making a difference in childrens lives through
              education. Our volunteers come from diverse backgrounds, united by
              a shared passion for fostering educational opportunities for
              underprivileged children.
            </Text>
          </VStack>
        </HStack>
        <Grid
          w="100%"
          gap="16"
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        >
          {teamData.map((team, index) => (
            <TeamCard
              key={index}
              img={team.img}
              name={team.name}
              position={team.position}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
