import { Models } from "@/utils/modelJSON";
import { Box, Button, Flex, Icon, VStack } from "@chakra-ui/react";
import { GoTriangleDown } from "react-icons/go";
import { VscSettings } from "react-icons/vsc";
import ModelCard from "../ModelCard";

const ModelSection = () => {
  return (
    <Box as="section">
      <VStack
        px={"1.68rem"}
        py={"7.56rem"}
        gap={"2.68rem"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Flex gap={"2.25rem"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"8px"}
            bg={"white"}
            fontSize={"10px"}
            fontWeight={700}
            px={"12px"}
            py={"9px"}
            rounded={"full"}
            cursor="pointer"
          >
            {" "}
            <Icon transform={"rotate(90deg)"} fill="#000" as={VscSettings} />
            Filters
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"8px"}
            bg={"primary"}
            color={"white"}
            fontSize={"10px"}
            fontWeight={700}
            px={"12px"}
            py={"9px"}
            rounded={"full"}
          >
            Body Type
            <Icon as={GoTriangleDown} />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"8px"}
            bg={"primary"}
            color={"white"}
            fontSize={"10px"}
            fontWeight={700}
            px={"12px"}
            py={"9px"}
            rounded={"full"}
          >
            Sex Toy
            <Icon as={GoTriangleDown} />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"8px"}
            bg={"primary"}
            color={"white"}
            fontSize={"10px"}
            fontWeight={700}
            px={"12px"}
            py={"9px"}
            rounded={"full"}
          >
            Price
            <Icon as={GoTriangleDown} />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"8px"}
            bg={"white"}
            fontSize={"10px"}
            fontWeight={700}
            px={"12px"}
            py={"9px"}
            rounded={"full"}
          >
            Clear Filters
          </Box>
        </Flex>

        <Flex
          gap={"4.5rem"}
          flexWrap={"wrap"}
          gridTemplateColumns={"repeat(4, 1fr)"}
        >
          {Models.map((model, key) => (
            <ModelCard
              name={model.name}
              img={model.cvcIMG}
              bio={model.bio}
              tags={model.tags}
              w="400px"
              h="500px"
              borderTopRadius={1}
              key={key}
            />
          ))}
        </Flex>
        <Button
          bg={"primary"}
          color={"white"}
          w={"full"}
          transition={"0.3s"}
          border={"1px"}
          borderColor={"primary"}
          _hover={{ background: "white", color: "primary" }}
        >
          Load More
        </Button>
      </VStack>
    </Box>
  );
};

export default ModelSection;
