"use client";
import { PageContainer } from "@/Components/Global/PageContainer";
import { Models } from "@/utils/modelJSON";
import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Model = () => {
  const model = Models[0];

  return (
    <PageContainer>
      <Flex w="100%">
        <Flex align="center" w="50%" m="0 auto" flexDir="column" mt={12}>
          <VStack align="start" h="80vh" borderBottom="1px solid red">
            <Box
              color="white"
              fontFamily="Clashbold"
              p="2"
              bg="primary"
              w="100%"
            >
              <IoMdCloseCircleOutline fontSize="30px" cursor="pointer" />
            </Box>
            <Image alt={`${model.name} on Balaclava Girls`} src="cvcTest.png" />
            <Heading color="white" fontFamily="Clashmid">
              {model.name}
            </Heading>
          </VStack>
        </Flex>
      </Flex>
    </PageContainer>
  );
};

export default Model;
