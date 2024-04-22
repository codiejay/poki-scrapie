import { forwardRef } from 'react';
import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';

const Tags = ({ tags }) => {
  return (
    <Flex
      gap={'10px'}
      rowGap={2}
      pos={'absolute'}
      flexWrap={'wrap'}
      left={'10px'}
      bottom={13}
    >
      {tags &&
        tags.length > 0 &&
        tags.map((tag) => (
          <Box
            key={tag}
            bg='primary'
            color='white'
            borderRadius='900px '
            px={4}
            py={1}
          >
            <Text fontSize={'8px'}>{tag}</Text>
          </Box>
        ))}
    </Flex>
  );
};

const ModelCard = forwardRef(
  ({ name, location, img, bio, tags, ...props }, ref) => (
    <Box
      ref={ref}
      bg='white'
      borderTopRadius='16px'
      boxShadow='xl'
      flexShrink={0}
      {...props}
    >
      <VStack gap='4' align='center' h={'50%'} pos={'relative'}>
        <Image
          src={img}
          alt={name}
          objectFit='cover'
          objectPosition={'top'}
          w={'100%'}
          h={'100%'}
          borderTopRadius={'16px'}
          className='no-drag'
          userSelect={'none'}
        />
        <Tags tags={tags} />
      </VStack>
      <Flex flexDir={'column'} justifyContent={'space-between'} p='4' h={'50%'}>
        <Box>
          <Text fontWeight='700' fontSize='20px'>
            {name}
          </Text>
          <Text color='gray.500' mt='2'>
            {bio}
          </Text>
        </Box>
        <Flex mt='2' gap='1' justifySelf={'flex-end'} >
          <Button
            bg={'primary'}
            color={'white'}
            borderRadius={'0'}
            border={'1px'}
            borderColor={'primary'}
            _hover={{
              bg: 'white',
              color: 'primary',
              border: '1px',
              borderColor: 'primary',
            }}
            transition={'0.3s ease-in-out'}
          >
            ₦7,000{' '}
          </Button>
          <Button
            bg={'primary'}
            color={'white'}
            borderRadius={'0'}
            w={'158px'}
            border={'1px'}
            borderColor={'primary'}
            _hover={{
              bg: 'white',
              color: 'primary',
              border: '1px',
              borderColor: 'primary',
            }}
            transition={'0.3s ease-in-out'}
          >
            Pay & Chat
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
);

ModelCard.displayName = 'ModelCard Component';

export default ModelCard;
