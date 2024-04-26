'use client';
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const AgePopup = () => {
  const [showAgeVerificationPrompt, setShowAgeVerificationPrompt] =
    useState(false);

  const ageVerificationKey = 'ageVerified';
  const ageVerificationExpiryKey = 'ageVerifiedExpiry';

  const yesClosePopup = () => {
    sessionStorage.setItem(ageVerificationKey, 'true');

    // set to 1 day if user doesn't close the site
    const oneDay = 24 * 60 * 60 * 1000;
    const expiryDate = new Date(Date.now() + oneDay);
    sessionStorage.setItem(ageVerificationExpiryKey, expiryDate);

    // close the popup
    setShowAgeVerificationPrompt(false);
  };

  const noCloseSite = () => {
    window.close();
  };

  const checkAgeVerification = () => {
    if (!sessionStorage) {
      return;
    }
    const isVerifiedSession = sessionStorage?.getItem(ageVerificationKey);
    const expiryDateSession = sessionStorage?.getItem(ageVerificationExpiryKey);


    console.log({isVerifiedSession, expiryDateSession})

    if (!isVerifiedSession || new Date(expiryDateSession) < new Date()) {
      setShowAgeVerificationPrompt(true);
    } else {
      setShowAgeVerificationPrompt(false);
    }
  };

  useEffect(() => {
    checkAgeVerification();
  }, []);

  return (
    <>
      {showAgeVerificationPrompt && (
        <Box
          h={'100vh'}
          minH={'100%'}
          w={'100vw'}
          minW={'100%'}
          pos={'fixed'}
          top={0}
          left={0}
          background={'black'}
          zIndex={100}
          css={{ boxShadow: '0 0 40px 5px rgba(255,255,255,.15)' }}
          display={showAgeVerificationPrompt ? 'block' : 'none'}
        >
          <Flex
            height={{ base: '100%', md: '460px' }}
            maxW={'750px'}
            w={'100%'}
            py={'4rem'}
            px={'2rem'}
            pos={'fixed'}
            top={'50%'}
            left={'50%'}
            transform={'auto'}
            translateX={'-50%'}
            translateY={'-50%'}
            zIndex={'100'}
            bg={'white'}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text
              as='h2'
              fontSize={'2.5rem'}
              lineHeight={{ base: '2.5rem', md: '4rem' }}
              fontWeight={'700'}
            >
              This is an adult website
            </Text>
            <Text as='h3' fontSize={'1.25rem'}>
              This website contains age-restricted materials including nudity
              and explicit depictions of sexual activity. By entering, you
              affirm that you are at least 18 years of age or the age of
              majority in the jurisdiction you are accessing the website from
              and you consent to viewing sexually explicit content.
            </Text>

            <Flex
              gap={'2'}
              mt={'4'}
              w={'100%'}
              flexDir={{ base: 'column', md: 'row' }}
            >
              <Button
                bg={'#1f1f1f'}
                color={'white'}
                w={{ base: '100%', md: '20rem' }}
                px={4}
                py={'1rem'}
                borderRadius={'lg'}
                borderColor={'#1f1f1f'}
                border={'1px'}
                _hover={{ bg: 'white', color: '#1f1f1f' }}
                cursor={'pointer'}
                onClick={noCloseSite}
              >
                <Text>No</Text>
              </Button>

              <Button
                bg={'primary'}
                color={'white'}
                w={{ base: '100%', md: '20rem' }}
                px={4}
                py={'1rem'}
                borderRadius={'lg'}
                cursor={'pointer'}
                borderColor={'primary'}
                border={'1px'}
                _hover={{ bg: 'white', color: 'primary' }}
                onClick={yesClosePopup}
              >
                <Text>Yes, I am over 18</Text>
              </Button>
            </Flex>

            <Text fontSize={'1rem'} mt={'4'}>
              Our{' '}
              <Link color={'primary'} href={'/parental-control'}>
                parental controls
              </Link>{' '}
              page explains how you can easily block access to this site.
            </Text>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default AgePopup;
