import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { IoIosCheckmark } from "react-icons/io";
import { ImgSlider } from "../Global/ImgSlider";

function ActsList({ act }) {
  return (
    <ListItem display="flex" gap="18px" justify="center">
      <Flex
        align="center"
        justify="center"
        w="27.05px"
        h="27.05px"
        bg="#f5f2e7"
        borderRadius="50%"
      >
        <IoIosCheckmark color="#d2a63c" fontSize="20px" />
      </Flex>
      <Text
        fontSize="18px"
        fontFamily="primary"
        display="inline-block"
        color="#4A5568"
      >
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
      <Box
        maxW="1440px"
        w="100%"
        m="0 auto"
        px={["10px", "15px", "100px"]}
        pb="70px"
      >
        <Flex
          w={["100%", "50%"]}
          m="0 auto"
          align="center"
          justify="center"
          mb="12"
        >
          <Divider
            w={["35%", "35%", "56px"]}
            orientation="horizontal"
            borderColor="#D2A63C"
          />
          <Heading
            fontFamily="secondary"
            fontSize={["24px", "24px", "56px"]}
            color="#1A202c"
            fontWeight="800"
            w={["100%", "90%", "60%"]}
            textAlign="center"
          >
            What We Do
          </Heading>
          <Divider
            w={["35%", "35%", "56px"]}
            orientation="horizontal"
            borderColor="#D2A63C"
          />
        </Flex>
        <Flex w="100%" gap="30px" flexDir={["column", "column", "row"]}>
          <ImgSlider />
          <Flex
            w={["100%", "50%"]}
            flexDir="column"
            gap="32px"
            mt={["12", "12", "0"]}
          >
            <Text
              fontSize="20px"
              fontFamily="primary"
              fontWeight="500"
              colo="#495568"
            >
              Every child deserves a healthy start in life, the opportunity to
              learn and protection from harm. Yet, an estimated 5.4 million
              children under age 5 still die each year from preventable causes
            </Text>
            <List spacing="19px">
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
