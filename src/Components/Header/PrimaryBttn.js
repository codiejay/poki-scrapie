import { Button } from "@chakra-ui/react";

export function PrimaryBttn({ bttnText, fontWeight }) {
  return (
    <Button
      w="fit-content"
      color="white"
      fontFamily="primary"
      fontSize="15px"
      fontWeight={fontWeight || "400"}
      bg="#D2A63C"
      _hover={{
        bg: "#e0a03f",
      }}
    >
      {bttnText}
    </Button>
  );
}

export function SecondaryBttn({ bttnText }) {
  return (
    <Button
      w="fit-content"
      color="#1A202C"
      fontFamily="primary"
      fontSize="15px"
      fontWeight="400"
      bg="white"
    >
      {bttnText}
    </Button>
  );
}
