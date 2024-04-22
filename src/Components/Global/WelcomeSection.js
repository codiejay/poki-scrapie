import { Box, Flex, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import ModelCard from '../ModelCard';
import { Carousel, Provider } from 'chakra-ui-carousel';

export const WelcomeSection = () => {
  const Models = [
    {
      cvcIMG: '/cvcTest.png',
      name: 'Sarah',
      bio: 'Goddess of pleasure, I’m always horny🍯 Good at Switching 6 positions in 2mins😋I offer Pornstar vibes,I give Virtual Sloopy head Deep throat no teeth straight esophagus👅🍾 Come let me spoil you a little😋',
      tags: ['Thick', '5.8ft', 'Uses Sex Toy '],
    },
    {
      cvcIMG: '/cvcTest.png',
      name: 'Isabella',
      bio: "When you need a sweet girl yo spend the day/night and when u need good bj hit me up let's vibe baby boy",
      tags: ['Thick', '5.8ft', 'Uses Sex Toy '],
    },
    {
      cvcIMG: '/cvcTest.png',
      name: 'Mia',
      bio: 'Calabar Sweetness ready to create memories with you😊 Dn’t hit me up if you aren’t already to hookup🙏 Serious Gent only 🥰 +234 904 598 4881',
      tags: ['Thick', '5.8ft', 'Uses Sex Toy '],
    },
    {
      cvcIMG: '/cvcTest.png',
      name: 'Olivia',
      bio: "Ambitious and goal-oriented. Let's chase our dreams together!",
      tags: ['Thick', '5.8ft', 'Uses Sex Toy '],
    },
    {
      cvcIMG: '/cvcTest.png',
      name: 'Sophia',
      bio: 'Yoga enthusiast who loves to find balance in life. Wanna join me for a flow session?',
      tags: ['Thick', '5.8ft', 'Uses Sex Toy '],
    },
  ];

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
