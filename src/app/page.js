"use client";

import { ComingSoon } from "@/Components/ComingSoon/ComingSoon";
import { Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex
      flexDir="column"
      h={{
        base: "100vh",
        md: "100vh",
      }}
    >
      <ComingSoon />
    </Flex>
  );
};

export default Home;
