import { Models } from "@/utils/modelJSON";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import ModelCard from "../ModelCard";
import { Filter } from '../Model/filter';

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
        <Filter />

        <Flex
          gap={"4.5rem"}
          flexWrap={"wrap"}
          gridTemplateColumns={"repeat(4, 1fr)"}
          justifyContent={{ base: "center", lg: "flex-start" }}
        >
          {Models.map((model, key) => (
            <ModelCard
              name={model.name}
              img={model.cvcIMG}
              bio={model.bio}
              tags={model.tags}
              w={{base: "100%", md: "400px"}}
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
