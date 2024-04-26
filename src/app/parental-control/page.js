'use client';

import { Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

const UnderConstructionPage = () => {
  useEffect(() => {
    window.location.href =
      'https://www.hostinger.com/tutorials/how-to-block-a-website-on-chrome';
  });
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
      minH={'90vh'}
    >
      <Heading fontSize={'2xl'}>Under Construction</Heading>
      <Text fontSize={'lg'}>
        This page is currently under construction. Please check back later.
      </Text>
    </Flex>
  );
};

export default UnderConstructionPage;
