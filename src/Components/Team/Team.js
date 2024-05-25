import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const teamData = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/5324bf63e4b05fc1fc6ea99d/1621606520680-ETO9ZXXY5FIQ1YDO4FOI/1620918108028_3P0A6482-Edit.jpg",
    name: "Ric Hassani",
    position: "Executive Volunteer",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5324bf63e4b05fc1fc6ea99d/1621606520680-ETO9ZXXY5FIQ1YDO4FOI/1620918108028_3P0A6482-Edit.jpg",
    name: "Ric Hassani",
    position: "Executive Volunteer",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5324bf63e4b05fc1fc6ea99d/1621606520680-ETO9ZXXY5FIQ1YDO4FOI/1620918108028_3P0A6482-Edit.jpg",
    name: "Ric Hassani",
    position: "Executive Volunteer",
  },
];

const TeamCard = ({ img, name, position }) => {
  return (
    <Flex
      borderRadius="30px"
      w="375px"
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
    >
      <Box
        maxW="1440px"
        w="100%"
        m="0 auto"
        px="100px"
        display="flex"
        gap="12"
        flexDir="column"
        pt="70px"
        pb="100px"
      >
        <HStack justifyContent="space-between" alignItems="start">
          <Heading
            fontSize="56px"
            fontFamily="secondary"
            fontWeight="600"
            color="#1A202C"
            w="fit-content"
          >
            Team
          </Heading>
          <VStack w="50%" spacing={4} align="start">
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
        <Flex w="100%" gap="16">
          {teamData.map((team, index) => (
            <TeamCard
              key={index}
              img={team.img}
              name={team.name}
              position={team.position}
            />
          ))}
        </Flex>
        <Flex w="100%" justify="center">
          <Button
            w="fit-content"
            bg="transparent"
            color="#1A202C"
            border="1px solid #C1C3C7"
            fontSize="12px"
            px="14"
          >
            View More
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
