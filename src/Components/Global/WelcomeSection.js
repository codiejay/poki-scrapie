import { Models } from '@/utils/modelJSON';
import { Box, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import ModelCard from '../ModelCard';

export const WelcomeSection = () => {
  return (
    <Flex
      mt={10}
      flexDir={{ base: 'column', md: 'row' }}
      gap={{ base: 10, md: 0 }}
    >
      <VStack
        w={{ base: 'full', md: '50%' }}
        alignItems={'flex-start'}
        gap={30}
        px={5}
      >
        <Heading
          w={{ base: 'full', md: '50%' }}
          color='white'
          fontFamily='Clashreg'
          fontSize={'35px'}
        >
          100% Access To Top Professional Video Chat Girls In Nigeria
        </Heading>
        <Text
          w={{ base: 'full', md: '50%' }}
          color='white'
          fontFamily='Clashmid'
          fontSize={'1rem'}
        >
          <Text as={'span'} color={'primary'} mr={1} fontFamily='Clashreg'>
            Balaclava Girls™
          </Text>
          is 100% Responsible for any refund if due. Your cash is 100% safe. See
          Our Policy that covers you.
        </Text>
      </VStack>
      <VStack w={{ base: 'full', md: '50%' }} pl={{ base: 5, md: 0 }}>
        <HStack w={'100%'}>
          <Text color='white' flexShrink={0}>
            Top performing models
          </Text>
          <Box w={'100%'} h={0.5} bg={'primary'} />
        </HStack>
        <Flex
          gap='2'
          overflowX='scroll'
          w='100%'
          css={{
            '&::-webkit-scrollbar': {
              display: 'none', // for Chrome, Safari, and Opera
            },
            '&::-webkit-scrollbar': {
              width: '0', // for Internet Explorer, Edge, and Firefox
            },
            scrollbarWidth: 'none', // for Firefox
            msOverflowStyle: 'none', // for Internet Explorer and Edge
          }}
        >
          {Models.map((model, key) => (
            <ModelCard
              name={model.name}
              img={model.cvcIMG}
              bio={model.bio}
              tags={model.tags}
              w={{ base: '250px', md: '400px' }}
              h='500px'
              key={key}
            />
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
};
