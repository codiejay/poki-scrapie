'use client';
import {
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { ModelForm } from '@/Components/Model';

export const Model = () => {
  return (
    <Flex flexDir={{ base: 'column', md: 'row' }} justifyContent={'space-between'} py='12' px='12'>
      <VStack w={{ base: 'full', md: '50%' }} align='start'>
        <Heading color='white' fontFamily='Clashreg' fontSize='60px' w='70%'>
          Become A Model- For Free
        </Heading>
      </VStack>
      <VStack
        w={{ base: 'full', md: '40%' }}
        alignItems={'flex-start'}
        bg={'white'}
        borderRadius={'12px'}
      >
        <ModelForm />
      </VStack>
    </Flex>
  );
};

export default Model;
