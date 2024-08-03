"use client";
import {
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa";
import { Header } from "../../Components/Header/Header";

export const Donate = () => {
  const copyIconSize = useBreakpointValue({ base: "16px", md: "30px" });
  return (
    <Flex
      flexDir="column"
      paddingTop="16px"
      px={["10px", "15px", "100px"]}
      maxW="1440px"
      m="0 auto"
    >
      <Header />
      <Flex pb="200px" m="0 auto" mt="61px" flexDir="column">
        <Flex w="100%" fontFamily="primary">
          <Heading
            fontSize={["36px", "50px"]}
            fontFamily="primary"
            fontWeight="600"
          >
            Please make your donation using any of this options
          </Heading>
        </Flex>
        <Flex w="100%" mt={["30px", "50px"]}>
          <Flex
            h={["145px", "262px"]}
            w={["282px", "502px"]}
            bg="url(/donateFlutterwave.svg) no-repeat center center"
            bgSize="contain"
            alt="Donate with Flutterwave"
            borderRadius="12px"
            as={Link}
            href="https://flutterwave.com/pay/g64yhigyvoed"
            target="_blank"
          />
        </Flex>
        <Flex mt={["40px", "80px"]} flexDir="column" gap={["10px", "24px"]}>
          <Heading
            fontSize={["20px", "48px"]}
            color="black"
            fontFamily="primary"
            fontWeight="700"
          >
            Naira Bank Transfer
          </Heading>
          <Flex flexDir="column" gap="14px">
            <HStack
              fontFamily="primary"
              display="flex"
              justify="start"
              align="start"
            >
              <Text fontSize={["16px", "30px"]}>Account Number:</Text>
              <Flex align={"center"}>
                <Text w="100%" fontSize={["16px", "30px"]} fontWeight="bold">
                  2045179136
                </Text>
                <FaRegCopy
                  display="inline"
                  onClick={() => {
                    navigator.clipboard.writeText("2045179136");
                  }}
                  style={{ marginLeft: "1rem" }}
                  fontSize={copyIconSize}
                  cursor="pointer"
                />
              </Flex>
            </HStack>
            <HStack fontFamily="primary">
              <Text fontSize={["16px", "30px"]}>Bank:</Text>
              <Flex align={"center"}>
                <Text fontSize={["16px", "30px"]} fontWeight="bold">
                  First Bank
                </Text>
                <FaRegCopy
                  onClick={() => {
                    navigator.clipboard.writeText("First Bank");
                  }}
                  style={{ marginLeft: "1rem" }}
                  fontSize={copyIconSize}
                  cursor="pointer"
                />
              </Flex>
            </HStack>
            <HStack fontFamily="primary">
              <Text fontSize={["16px", "30px"]}>Account Name:</Text>
              <Text fontSize={["16px", "30px"]} fontWeight="bold">
                The Ric Hassani Education Foundation TREF
              </Text>
            </HStack>
          </Flex>
        </Flex>

        <Flex mt="80px" flexDir="column" gap="24px">
          <Heading
            fontSize={["20px", "48px"]}
            color="black"
            fontFamily="primary"
            fontWeight="700"
          >
            US Dollar Donations
          </Heading>
          <Flex flexDir="column" gap="14px">
            <HStack fontFamily="primary">
              <Text fontSize={["16px", "30px"]}>Account Name:</Text>
              <Text fontSize={["16px", "30px"]} fontWeight="bold">
                The Ric Hassani Education Foundation TREF
              </Text>
              <FaRegCopy
                onClick={() => {
                  navigator.clipboard.writeText(
                    "The Ric Hassani Education Foundation TREF"
                  );
                }}
                style={{ marginLeft: "1rem" }}
                fontSize={copyIconSize}
                cursor="pointer"
              />
            </HStack>
            <HStack fontFamily="primary">
              <Text fontSize={["16px", "30px"]}>Account Number:</Text>
              <Text fontSize={["16px", "30px"]} fontWeight="bold">
                2045244212
              </Text>
              <FaRegCopy
                onClick={() => {
                  navigator.clipboard.writeText("2045244212");
                }}
                style={{ marginLeft: "1rem" }}
                fontSize={copyIconSize}
                cursor="pointer"
              />
            </HStack>
            <HStack fontFamily="primary">
              <Text fontSize={["16px", "30px"]}>Swift code:</Text>
              <Text fontSize={["16px", "30px"]} fontWeight="bold">
                FBNINGLA
              </Text>
              <FaRegCopy
                onClick={() => {
                  navigator.clipboard.writeText("FBNINGLA");
                }}
                style={{ marginLeft: "1rem" }}
                fontSize={copyIconSize}
                cursor="pointer"
              />
            </HStack>
            <HStack fontFamily="primary">
              <Text fontSize={["16px", "30px"]}>Sort code:</Text>
              <Text fontSize={["16px", "30px"]} fontWeight="bold">
                011171973
              </Text>
              <FaRegCopy
                onClick={() => {
                  navigator.clipboard.writeText("011171973");
                }}
                style={{ marginLeft: "1rem" }}
                fontSize={copyIconSize}
                cursor="pointer"
              />
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Donate;
