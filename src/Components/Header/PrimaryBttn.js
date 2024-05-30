import { Button } from "@chakra-ui/react";

export function PrimaryBttn({ bttnText, fontWeight, props }) {
  console.log(props);
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
      px="12"
      h={["32px", "32px", "54px"]}
      py={["6px", "6px", "0"]}
      {...props}
    >
      {bttnText}
    </Button>
  );
}

export function SecondaryBttn({ bttnText, ...props }) {
  return (
    <Button
      w="fit-content"
      color="#1A202C"
      fontFamily="primary"
      fontSize="15px"
      fontWeight="400"
      bg="white"
      px="12"
      h={["32px", "32px", "54px"]}
      py={["6px", "6px", "0"]}
      {...props}
    >
      {bttnText}
    </Button>
  );
}
