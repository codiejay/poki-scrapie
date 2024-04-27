import { Box } from "@chakra-ui/react";

export const PageContainer = ({ children }) => {
  return (
    <Box
      p={{
        base: "12px",
        lg: "2rem",
      }}
    >
      {children}
    </Box>
  );
};
