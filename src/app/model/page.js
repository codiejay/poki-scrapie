"use client";
import { PageContainer } from "@/Components/Global/PageContainer";
import { Models } from "@/utils/modelJSON";
import { Flex, Heading, Image, VStack } from "@chakra-ui/react";

const Model = () => {
  const model = Models[0];

  return (
    <PageContainer>
      <Flex>
        <VStack align="start">
          <Image alt={`${model.name} on Balaclava Girls`} src="cvcTest.png" />
          <Heading color="white" fontFamily="Clashmid">
            {model.name}
          </Heading>
        </VStack>
      </Flex>
    </PageContainer>
  );
};

export default Model;
