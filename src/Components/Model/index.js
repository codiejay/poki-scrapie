import { Button, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import { TextInput } from '../Forms/chakraTextForm';
import { FileInput } from '../Forms/chakraFileForm';
import { SpinnerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import animation from '../../app/animation.module.css';
export const ModelForm = () => {
  // form data
  const [nickName, setNickName] = useState('');
  const [sexToy, setSexToy] = useState('');
  const [height, setHeight] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [price, setPrice] = useState('');
  const [customRequest, setCustomRequest] = useState('');
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [bankName, setBankName] = useState('');
  const [bankNumber, setBankNumber] = useState('');
  const [bankAccountName, setBankAccountName] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    console.log({
      nickName,
      sexToy,
      height,
      bodyType,
      price,
      customRequest,
      images,
      videos,
      bankName,
      bankNumber,
      bankAccountName,
    });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <VStack
      maxW={{ base: 'full', md: '80%' }}
      gap={'24px'}
      justify='center'
      alignItems={'flex-start'}
      borderRadius={'12px'}
      p={'20px'}
    >
      <TextInput
        label='Your Nickname'
        placeholder='Bella Pretty'
        width='100%'
        controlProps={{
          w: 'full',
        }}
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      />

      <Flex gap={'42px'} justifyContent={'flex-start'} w='full'>
        <TextInput
          label='Do you have a sex toy? '
          placeholder='Yes'
          width='70px'
          value={sexToy}
          onChange={(e) => setSexToy(e.target.value)}
        />
        <TextInput
          label='Height'
          placeholder="5ft'12"
          width='70px'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </Flex>

      <Flex gap={'42px'} justifyContent={'flex-start'} w='full'>
        <TextInput
          label='Body Type'
          placeholder='Thick'
          width='70px'
          value={bodyType}
          onChange={(e) => setBodyType(e.target.value)}
        />
        <TextInput
          label='Price '
          placeholder='7,000'
          width='70px'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Flex>

      <TextInput
        label='Do You Accept Custom Request '
        tinylabel='For example, will you be willing to use the customer’s name if they request for this?'
        placeholder='Yes'
        width='60px'
        value={customRequest}
        onChange={(e) => setCustomRequest(e.target.value)}
      />

      <FileInput
        accepts='image'
        label='Add Image (Minimum of 3 images)'
        placeholder={'Select Images'}
        minFile={3}
        multiple
        onChange={(e) => setImages(e.target.files)}
      />
      <FileInput
        accepts='video'
        label='Add Sneak Video (<~6seconds)'
        see_sample='See Sample Of A Sneek Video'
        placeholder={'Select Videos'}
        onChange={(e) => setVideos(e.target.files)}
      />

      <Text color={'red'} fontWeight={700} fontSize={'0.875rem'}>
        IMPORTANT- PLEASE CAREFULLY FILL THIS BANK DETAILS. MAKE SURE IT IS
        YOURS AND YOU HAVE FULL CONTROL OVER IT. YOUR PAYMENT AFTER SERVICE WILL
        BE MADE DIRECTLY HERE
      </Text>

      <Grid gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }} gap={'37px'}>
        <TextInput
          label='Bank Name'
          placeholder='First Bank'
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          w={{ base: 'full', xl: '70%' }}
        />

        <TextInput
          label='Bank Number'
          placeholder='112243422134'
          value={bankNumber}
          onChange={(e) => setBankNumber(e.target.value)}
        />

        <TextInput
          label='Your Bank Name'
          placeholder='Bella Uche'
          value={bankAccountName}
          onChange={(e) => setBankAccountName(e.target.value)}
        />
      </Grid>

      <Button
        bg={'primary'}
        color={'white'}
        transition={'0.3s'}
        border={'1px'}
        borderColor={'primary'}
        _hover={{ bg: 'white', color: 'primary', borderColor: 'primary' }}
        borderRadius={0}
        display={'flex'}
        alignItems={'center'}
        gap={'2'}
        onClick={handleSubmit}
      >
        <Text>Submit</Text>
        {loading && (
          <SpinnerIcon rotate={'360deg'} className={animation.spin} />
        )}
      </Button>
    </VStack>
  );
};
