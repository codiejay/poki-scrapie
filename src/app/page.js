"use client";

import { WelcomeSection } from "@/Components/Global/WelcomeSection";
import { Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex flexDir="column">
      <WelcomeSection />
    </Flex>
  );
};

export default Home;
