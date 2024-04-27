"use client";

import { WelcomeSection } from "@/Components/Global/WelcomeSection";
import ModelSection from "@/Components/Global/modelSection";
import { Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex flexDir="column">
      <WelcomeSection />
      <ModelSection />
    </Flex>
  );
};

export default Home;
