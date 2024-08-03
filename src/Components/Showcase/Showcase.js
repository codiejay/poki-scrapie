import {
  Flex,
  HStack,
  Heading,
  Img,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { PrimaryBttn } from "../Header/PrimaryBttn";
import { ShowcaseModal } from "../Modals/ShowcaseModal";

export const Showcase = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex pb="24px" pt={["20px", "30px", "80px"]} w="100%">
      <HStack
        w="100%"
        gap={["24px", "24px", "40px"]}
        flexDir={["column", "row"]}
      >
        <Flex flexDir="column" w={["100%", "50%"]} gap="32px">
          <Heading
            fontFamily="secondary"
            fontWeight="800"
            fontSize={["45px", "70px"]}
          >
            Join Us In Educating The Next Generation
          </Heading>
          <Text
            fontFamily="primary"
            fontSize="20px"
            fontWeight="500"
            color="#4A5568"
          >
            Every donation helps a child get closer to their dreams, Give today
            to empower tomorrow’s leaders
          </Text>
          <PrimaryBttn as={Link} href="/donate" bttnText="Donate now" />
        </Flex>
        <Flex
          h="477px"
          align="center"
          justify="center"
          w={["100%", "50%"]}
          bg="url(/showcaseImg.png) no-repeat center center"
          alt="Children in a classroom"
          borderRadius="12px"
          onClick={() => {
            onOpen();
          }}
          cursor="pointer"
        >
          <Img cursor="pointer" src="/play.png" boxSize="40px" />
        </Flex>
      </HStack>
      <ShowcaseModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
