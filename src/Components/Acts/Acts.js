import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { ImgSlider } from "../Global/ImgSlider";

function ActsList({ act }) {
  return (
    <ListItem>
      <ListIcon
        fontSize="18px"
        fontFamily="primary"
        as={MdCheckCircle}
        color="#D2A63C"
      />
      <Text display="inline-block" color="#4A5568">
        {act}
      </Text>
    </ListItem>
  );
}

export const Acts = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      pt="50px"
      flexDir="column"
      gap={12}
      bg="#F9FAF"
      pb="12"
    >
      <Box maxW="1440px" w="100%" m="0 auto" px="100px">
        <Flex w="50%" m="0 auto" align="center" justify="center" mb="12">
          <Divider w="20%" orientation="horizontal" borderColor="#D2A63C" />
          <Heading
            fontFamily="secondary"
            fontSize="56px"
            color="#1A202c"
            fontWeight="800"
            w="60%"
            textAlign="center"
          >
            What We Do
          </Heading>
          <Divider w="20%" orientation="horizontal" borderColor="#D2A63C" />
        </Flex>
        <Flex w="100%" gap="30px">
          <ImgSlider />
          <Flex w="50%" flexDir="column" gap="20px">
            <Text
              fontSize="20px"
              fontFamily="primary"
              fontWeight="400"
              colo="#4a5568"
            >
              Every child deserves a healthy start in life, the opportunity to
              learn and protection from harm. Yet, an estimated 5.4 million
              children under age 5 still die each year from preventable causes
            </Text>
            <List spacing={4} mt="12">
              <ActsList act="Cover the school fees for children who cannot afford them." />
              <ActsList act="Bring hope and opportunities to underprivileged children." />
              <ActsList act="Ensure children receive a quality education." />
              <ActsList act="Cultivate skilled educators who can make a global impact." />
              <ActsList act="Help bring children off the streets and into the classroom." />
            </List>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
