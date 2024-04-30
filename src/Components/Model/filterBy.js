import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

const FilterBy = ({
  filterName,
  filterValues,
  value,
  handleFilter,
  selectedOption,
  closeOtherOptions,
}) => {
  const [openOption, setOpenOption] = useState(false);

  const checkIfLastOption = (key, openOption) => {
    if (key == openOption.length - 1) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const checkIfSelectedFilterMatchesFilterName = () => {
      if (selectedOption.trim() == filterName.trim()) {
        setOpenOption(true);
        return;
      }
      setOpenOption(false);
    };

    checkIfSelectedFilterMatchesFilterName();
  }, [selectedOption, filterName]);
  return (
    <Box
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
        // handleFilter(value);
        setOpenOption(!openOption);
        closeOtherOptions(filterName.trim());
      }}
    >
      {/* If value is selected, show value otherwise show filterName */}

      <Text userSelect={'none'}> {value ? value : filterName}</Text>

      <Icon
        as={openOption ? GoTriangleUp : GoTriangleDown}
      />

      {openOption && (
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
          {filterValues?.map((option, key) => (
            <Text
              key={key}
              px={'12px'}
              py={'9px'}
              roundedTop={key === 0 ? 'xl' : 'none'}
              roundedBottom={
                checkIfLastOption(key, filterValues) ? 'xl' : 'none'
              }
              _hover={{ color: 'white', bg: 'primary' }}
              onClick={() => {
                handleFilter(option);
                setOpenOption(!openOption);
                closeOtherOptions(filterName.trim());
              }}
            >
              {option}
            </Text>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default FilterBy;
