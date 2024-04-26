import { Input, InputGroup } from "@chakra-ui/react";
import { forwardRef } from "react";

const Search = forwardRef((props, ref) => (
  <InputGroup w="40%" fontSize={{ base: "0.75rem", md: "1rem" }}>
    <Input
      disabled
      ref={ref}
      {...props}
      bg={"white"}
      placeholder="Search coming soon"
      fontSize={"1rem"}
    />
  </InputGroup>
));

Search.displayName = "Search Navbar Component";

export default Search;
