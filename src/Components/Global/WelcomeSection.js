import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export const WelcomeSection = () => {
  return (
    <Flex>
      <VStack w="50%">
        <Heading color="white" fontFamily="Clashreg">
          100% Access To Top Professional Video Chat Girls In Nigeria
        </Heading>
      </VStack>
      <VStack w="50%">
        <Box>
          <Text color="white">Top performing models</Text>
        </Box>
        <Flex w="50%" gap={2}>
          <Box bg="primary" w="400px" h="400px" />
          <Box bg="primary" w="400px" h="400px" />
          <Box bg="primary" w="400px" h="400px" />
        </Flex>
      </VStack>
    </Flex>
  );
};
