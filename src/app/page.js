"use client";

import ModelSection from '@/Components/Global/modelSection';
import { WelcomeSection } from "@/Components/Global/WelcomeSection";
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
