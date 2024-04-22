'use client';

import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { createUserWithGoogle } from '../appwrite';
import { useState } from 'react';
import { ModelForm } from '@/Components/Model';

const RegisterAsAModel = () => {
  const [step, setStep] = useState(1);
  return (
    <Flex pt='12' px='12'>
      <VStack w='50%' align='start'>
        <Heading color='white' fontFamily='Clashreg' fontSize='60px' w='70%'>
          Become A VC Model, For Free.
        </Heading>
        <Flex gap='2' fontFamily='Clashmid' color='white'>
          <Box bg='primary' borderRadius='4px' p='2'>
            Pick your availability
          </Box>
          <Box bg='primary' borderRadius='4px' p='2'>
            Set your price
          </Box>
          <Box bg='primary' borderRadius='4px' p='2'>
            Get paid
          </Box>
        </Flex>
      </VStack>
      {step === 0 && (
        <VStack w='50%' justify='center'>
          <Button
            onClick={() => {
              createUserWithGoogle();
            }}
            leftIcon={<FcGoogle fontSize='21px' />}
            fontFamily='Clashreg'
          >
            Continue With Google Account
          </Button>
          <Text color='white' fontSize='14px' fontFamily='Clashmid'>
            *No fear- All your information will be kept private and secure.
          </Text>
        </VStack>
      )}

      {step === 1 && (
        <VStack
          w={{ base: 'full', md: '40%' }}
          alignItems={'flex-start'}
          bg={'white'}
          borderRadius={'12px'}
        >
          <ModelForm />
        </VStack>
      )}

      {/* Todo: Add a scrollable image section with heading of "Join The Family" */}
    </Flex>
  );
};

export default RegisterAsAModel;
