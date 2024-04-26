import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { VscSettings } from 'react-icons/vsc';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { useState } from 'react';

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const options = ['Body Type', 'Sex Toy', 'Price'];
  const [openOption, setOpenOption] = useState('');
  const filterQueriesOptions = {
    body_type: ['Bulk', 'Average', 'Athletic', 'Lean', 'Slim'],
    sex_toy: ['Yes', 'No'],
    price: ['10,000', '20,000', '30,000', '40,000', '50,000+'],
  };
  const replaceSpacesWithUnderscoreInLowerCase = (str) => {
    return str.replace(/ /g, '_').toLowerCase();
  };

  const selectedOptionLength = (optionsInArray) => {
    const filterQueriesOptionsLength =
      filterQueriesOptions[
        replaceSpacesWithUnderscoreInLowerCase(optionsInArray)
      ]?.length;
    return filterQueriesOptionsLength;
  };

  return (
    <Flex
      gap={'2.25rem'}
      display={{ base: 'flex', md: 'flex' }}
      flexWrap={'wrap'}
      zIndex={1}
    >
      <Button
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'8px'}
        bg={'white'}
        fontSize={'0.825rem'}
        fontWeight={700}
        px={'12px'}
        py={'9px'}
        rounded={'full'}
        cursor='pointer'
        onClick={() => setOpen(!open)}
      >
        <Icon transform={'rotate(90deg)'} fill='#000' as={VscSettings} />
        Filters
      </Button>

      {open && (
        <Flex gap={'2.25rem'} flexWrap={'wrap'}>
          {options.map((option, key) => (
            <Box
              key={key}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              height={'40px'}
              minW={'100px'}
              px={'12px'}
              gap={'8px'}
              pos={'relative'}
              bg={'primary'}
              color={'white'}
              fontSize={'0.825rem'}
              fontWeight={700}
              rounded={'full'}
              cursor={'pointer'}
              onClick={() => {
                if (option === openOption) {
                  setOpenOption('');
                } else {
                  setOpenOption(option);
                }
              }}
            >
              {option}
              <Icon
                as={openOption === option ? GoTriangleUp : GoTriangleDown}
              />

              {openOption === option && (
                <Flex
                  flexDir={'column'}
                  gap={'8px'}
                  pos={'absolute'}
                  top={'45px'}
                  left={0}
                  width={'100%'}
                  bg={'white'}
                  color={'black'}
                  fontSize={'0.825rem'}
                  fontWeight={700}
                  cursor={'pointer'}
                  zIndex={1}
                  rounded={'xl'}
                >
                  {filterQueriesOptions[
                    replaceSpacesWithUnderscoreInLowerCase(option)
                  ]?.map((option, key) => (
                    <Text
                      key={key}
                      px={'12px'}
                      py={'9px'}
                      // first option has a rounded top
                      roundedTop={key === 0 ? 'xl' : 'none'}
                      roundedBottom={
                        key ==
                        selectedOptionLength(
                          replaceSpacesWithUnderscoreInLowerCase(openOption)
                        ) -
                          1
                          ? 'xl'
                          : 'none'
                      }
                      _hover={{ color: 'white', bg: 'primary' }}
                    >
                      {option}
                    </Text>
                  ))}
                </Flex>
              )}
            </Box>
          ))}

          <Button
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'8px'}
            bg={'white'}
            fontSize={'0.825rem'}
            fontWeight={700}
            px={'12px'}
            py={'9px'}
            rounded={'full'}
            onClick={() => {
              setOpen(false);
              setOpenOption('');
            }}
          >
            Clear Filters
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
