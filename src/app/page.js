"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const Home = () => {
  const [url, setUrl] = useState(
    "https://www.pricecharting.com/game/pokemon-paldean-fates/pikachu-18"
  );
  const [result, setResult] = useState(null);
  const [usedPrice, setUsedPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleScrape = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/scrape?url=${encodeURIComponent(url)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResult(data.fullResponse);
      setUsedPrice(data.usedPrice);
    } catch (error) {
      console.error("Error:", error);
      setResult({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      bg="black"
      flexDir="column"
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      p={4}
    >
      <Input
        placeholder="Enter URL to scrape"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        mb={4}
        color="white"
      />
      <Button
        bg="white"
        onClick={handleScrape}
        isLoading={isLoading}
        spinner={<Spinner color="black" />}
      >
        Scrape
      </Button>

      {isLoading ? (
        <Flex direction="column" mt={4} w="100%" maxW="800px">
          <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="4" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Flex>
      ) : (
        <>
          {usedPrice && (
            <Box mt={4} p={3} bg="red.500" color="white" borderRadius="md">
              <Text fontWeight="bold">Ungraded Price: {usedPrice}</Text>
            </Box>
          )}
          {result && (
            <Box mt={4} color="white" maxW="800px" maxH="800px" overflow="auto">
              <Text>Scrape Result:</Text>
              <Text>{JSON.stringify(result, null, 2)}</Text>
            </Box>
          )}
        </>
      )}
    </Flex>
  );
};

export default Home;
