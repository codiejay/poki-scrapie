import { Box, Flex, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import ModelCard from '../ModelCard';
import { Carousel, Provider } from 'chakra-ui-carousel';
import { Models } from '@/utils/modelJSON';

export const WelcomeSection = () => {
  return (
    <Flex mt={10}>
      <VStack w='50%' alignItems={'flex-start'} gap={30} px={5}>
        <Heading color='white' fontFamily='Clashreg' fontSize={'35px'}>
          100% Access To Top Professional Video Chat Girls In Nigeria
        </Heading>
        <Text color='white' fontFamily='Clashmid' fontSize={'1rem'}>
          <Text as={'span'} color={'primary'} fontFamily='Clashreg'>
            CodeVideoCall™
          </Text>
          is 100% Responsible for any refund if due. Your cash is 100% safe. See
          Our Policy that covers you.
        </Text>
      </VStack>
      <VStack w='50%'>
        <HStack w={'100%'}>
          <Text color='white' flexShrink={0}>
            Top performing models
          </Text>
          <Box w={'100%'} h={0.5} bg={'primary'} />
        </HStack>
        <Provider>
          <Carousel gap={300} className='carousel-container'>
            {Models.map((model, key) => (
              <ModelCard
                name={model.name}
                img={model.cvcIMG}
                bio={model.bio}
                tags={model.tags}
                w='400px'
                h='500px'
                key={key}
              />
            ))}
          </Carousel>
        </Provider>
      </VStack>
    </Flex>
  );
};
