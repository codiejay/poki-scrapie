import { Input, InputGroup } from '@chakra-ui/react';
import { forwardRef } from 'react';

const Search = forwardRef((props, ref) => (
  <InputGroup maxW={'400px'} fontSize={{base: '0.75rem', md: '1rem'}}>
    <Input ref={ref} {...props} bg={'white'} placeholder='Search for model name' fontSize={'1rem'}/>
  </InputGroup>
));

Search.displayName = 'Search Navbar Component';

export default Search;
