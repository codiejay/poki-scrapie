import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { VscSettings } from 'react-icons/vsc';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { useEffect, useState } from 'react';
import FilterBy from './filterBy.js';

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const [openOption, setOpenOption] = useState('');

  const body_type = {
    name: 'Body Type',
    options: ['Bulk', 'Average', 'Athletic', 'Lean', 'Slim'],
  };

  const sex_toy = {
    name: 'Sex Toy',
    options: ['Yes', 'No'],
  };

  const price = {
    name: 'Price Tag',
    options: ['10,000', '20,000', '30,000', '40,000', '50,000+'],
  };

  const [selectedFilters, setSelectedFilters] = useState({
    bodyType: '',
    sexToy: '',
    price_tag: '',
  });

  const clearAllFilters = () => {
    setSelectedFilters({
      bodyType: '',
      sexToy: '',
      price: '',
    });
    setOpenOption('');
    setOpen(false);
  };

  const handleFilterBtnClick = () => {
    setOpen(!open);
    setOpenOption('');
  }

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
        onClick={handleFilterBtnClick}
      >
        <Icon transform={'rotate(90deg)'} fill='#000' as={VscSettings} />
        Filters
      </Button>

      {open && (
        <Flex gap={'2.25rem'} flexWrap={'wrap'}>
          <FilterBy
            filterName={body_type.name}
            filterValues={body_type.options}
            value={selectedFilters.bodyType}
            handleFilter={(value) =>
              setSelectedFilters({ ...selectedFilters, bodyType: value })
            }
            // props to close other options and keep track of which one is open
            selectedOption={openOption}
            closeOtherOptions={(name) => setOpenOption(name)}
          />
          <FilterBy
            filterName={sex_toy.name}
            filterValues={sex_toy.options}
            value={selectedFilters.sexToy}
            handleFilter={(value) =>
              setSelectedFilters({ ...selectedFilters, sexToy: value })
            }
            selectedOption={openOption}
            closeOtherOptions={(name) => setOpenOption(name)}
          />
          <FilterBy
            filterName={price.name}
            filterValues={price.options}
            value={selectedFilters.price_tag}
            handleFilter={(value) =>
              setSelectedFilters({ ...selectedFilters, price_tag: value })
            }
            selectedOption={openOption}
            closeOtherOptions={(name) => setOpenOption(name)}
          />
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
            onClick={clearAllFilters}
          >
            Clear Filters
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
