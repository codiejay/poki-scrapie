"use client";

import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ModelDashBoard = () => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const user = await appwrite.account.get();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("Getting user");
    getUser();
  }, []);

  return (
    <Flex pt="12" px="12">
      <VStack w="50%" align="start">
        <Heading color="white" fontFamily="Clashreg" fontSize="60px" w="70%">
          Welcome
        </Heading>
        <Flex gap="2" fontFamily="Clashmid" color="white"></Flex>
      </VStack>
      <VStack w="50%" justify="center"></VStack>

      {/* Todo: Add a scrollable image section with heading of "Join The Family" */}
    </Flex>
  );
};

export default ModelDashBoard;
