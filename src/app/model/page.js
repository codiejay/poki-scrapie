"use client";
import { PageContainer } from "@/Components/Global/PageContainer";
import { Models } from "@/utils/modelJSON";
import { Box, Flex, VStack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import "../../../public/base.css";
import "../../../public/embla.css";
import "../../../public/sandbox.css";
import { ModelClientCard } from "../../Components/Model/ModelClientCard";

const Model = () => {
  const model = Models[0];
  const modelTags = Object.keys(model.tags);
  const [showCustomRequestForm, setShowCustomRequestForm] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <PageContainer>
      <Flex w="100%">
        <Flex
          align="center"
          maxW={{
            lg: "40%",
            md: "50%",
            base: "100%",
          }}
          m="0 auto"
          flexDir="column"
          mt={4}
        >
          <VStack
            align="start"
            maxW={{
              base: "100%",
              lg: "60%",
            }}
            h="fit-content"
          >
            <Box
              color="white"
              fontFamily="Clashbold"
              p="0.6"
              px="2"
              bg="primary"
              w="100%"
              fontSize="12px"
            >
              Close
            </Box>
            <ModelClientCard
              model={model}
              showCustomRequestForm={showCustomRequestForm}
              setShowCustomRequestForm={setShowCustomRequestForm}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              OPTIONS={OPTIONS}
            ></ModelClientCard>
          </VStack>
        </Flex>
      </Flex>
    </PageContainer>
  );
};

export default Model;
