import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Select,
  Text,
  useRadioGroup,
  VStack,
  FormLabel,
  FormControl,
  Checkbox,
  Link,
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { SpinnerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import animation from '../../app/animation.module.css';
import { body_type } from '@/utils/constants';
import useUtilityHooks from '@/utils/useUtilityHooks';
import { TextInput } from '../Forms/chakraTextForm';
import { FileInput } from '../Forms/chakraFileForm';
import RadioCard from '../Forms/chakraRadio';
export const ModelForm = () => {
  // form data
  const [nickName, setNickName] = useState('');
  const [sexToy, setSexToy] = useState('No');
  const [height, setHeight] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [price, setPrice] = useState('');
  const [customRequest, setCustomRequest] = useState('No');
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [bankName, setBankName] = useState('');
  const [bankNumber, setBankNumber] = useState('');
  const [bankAccountName, setBankAccountName] = useState('');
  const [contactInformation, setContactInformation] = useState('');
  const [
    is21orOlderAndAgreesToTheTermsOfUse,
    setIs21orOlderAndAgreesToTheTermsOfUse,
  ] = useState(false);

  const [disableSubmit, setDisableSubmit] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // hooks
  const { truncate } = useUtilityHooks();

  const sexToyRadioGroup = useRadioGroup({
    name: 'sexToy',
    defaultValue: 'No',
    onChange: setSexToy,
  });

  const customRequestRadioGroup = useRadioGroup({
    name: 'sexToy',
    defaultValue: 'No',
    onChange: setCustomRequest,
  });
  const group = sexToyRadioGroup?.getRootProps();

  useEffect(() => {
    const validateForm = () => {
      if (
        nickName &&
        sexToy &&
        height &&
        bodyType &&
        price &&
        customRequest &&
        bankName &&
        bankNumber &&
        bankAccountName &&
        images.length >= 3 &&
        images.length <= 4 &&
        videos.length > 0 &&
        is21orOlderAndAgreesToTheTermsOfUse &&
        contactInformation
      ) {
        setDisableSubmit(false);
      } else {
        setDisableSubmit(true);
      }

      console.log({
        is21orOlderAndAgreesToTheTermsOfUse,
        nickName,
        sexToy,
        height,
        bodyType,
        price,
        customRequest,
        bankName,
        bankNumber,
        bankAccountName,
        images,
        videos,
      });
    };

    validateForm();
  }, [
    is21orOlderAndAgreesToTheTermsOfUse,
    contactInformation,
    nickName,
    sexToy,
    height,
    bodyType,
    price,
    customRequest,
    bankName,
    bankNumber,
    bankAccountName,
    images,
    videos,
  ]);

  const [loading, setLoading] = useState(false);
  const yesOrNoArray = ['Yes', 'No'];

  const handleSubmit = async () => {
    setLoading(true);
    setIsSubmitted(true);
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
      setIsSubmitted(false);
    }, 5000);
  };

  const handleImageChange = (files) => {
    setImages(files);
  }

  const handleVideoChange = (files) => {
    setVideos(files);
  }

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
        isInvalid={isSubmitted && nickName.trim() === '' ? true : false}
      />

      <Flex
        gap={'42px'}
        justifyContent={'flex-start'}
        w='full'
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <Flex flexDir={'column'} gap={2}>
          <Text fontWeight={500}>Do you have a sex toy?</Text>
          <HStack {...group}>
            {yesOrNoArray?.map((value) => {
              const radio = sexToyRadioGroup?.getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
          {isSubmitted && sexToy.trim() === '' && (
            <Text color={'red.500'}>This field is required</Text>
          )}
        </Flex>

        <TextInput
          label='Height'
          placeholder="5ft'12"
          width='100px'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          isInvalid={isSubmitted && height.trim() === '' ? true : false}
        />
      </Flex>

      <Flex gap={'42px'} justifyContent={'flex-start'} w='full'>
        <FormControl w='max-content'>
          <FormLabel>Body Type</FormLabel>
          <Select
            placeholder='Thick'
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
            isInvalid={isSubmitted && bodyType.trim() === '' ? true : false}
          >
            {body_type?.map((value, key) => (
              <option value={value} key={key}>
                {value}
              </option>
            ))}
          </Select>
          {isSubmitted && bodyType.trim() === '' && (
            <Text color={'red.500'}>This field is required</Text>
          )}
        </FormControl>

        <TextInput
          label='Price '
          placeholder='7,000'
          width='100px'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          isInvalid={isSubmitted && price.trim() === '' ? true : false}
        />
      </Flex>

      <Flex flexDir={'column'} gap={2}>
        <Box>
          <Text fontWeight={500}>Do You Accept Custom Request?</Text>
          <Text fontSize={'0.725rem'}>
            For example, will you be willing to use the customer&apos;s name if
            they request for this?
          </Text>
        </Box>
        <HStack {...group}>
          {yesOrNoArray?.map((value) => {
            const radio = customRequestRadioGroup?.getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
        {isSubmitted && customRequest.trim() === '' && (
          <Text color={'red.500'}>This field is required</Text>
        )}
      </Flex>

      <HStack>
        <FileInput
          accepts='image'
          label='Add Image (Minimum of 3 images)'
          placeholder={'Select Images'}
          minfile={3}
          maxfile={4}
          maxsize={5} // 5mb
          multiple
          onFileChange={handleImageChange}
          isInvalid={isSubmitted && images?.length < 3 ? true : false}
        />
      </HStack>
      <FileInput
        accepts='video'
        label='Add A Sneak Video (<~6seconds)'
        see_sample='See Sample Of A Sneek Video'
        placeholder={'Select Video'}
        minfile={1}
          maxfile={1}
          maxsize={25} // 25mb
        onFileChange={handleVideoChange}
        isInvalid={isSubmitted && videos?.length < 1 ? true : false}
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
          isInvalid={isSubmitted && bankName.trim() === '' ? true : false}
        />

        <TextInput
          label='Bank Number'
          placeholder='112243422134'
          value={bankNumber}
          onChange={(e) => setBankNumber(e.target.value)}
          isInvalid={isSubmitted && bankNumber.trim() === '' ? true : false}
        />

        <TextInput
          label='Your Bank Name'
          placeholder='Bella Uche'
          value={bankAccountName}
          onChange={(e) => setBankAccountName(e.target.value)}
          isInvalid={
            isSubmitted && bankAccountName.trim() === '' ? true : false
          }
        />

        <TextInput
          label='Telegram Handle / WhatsApp Number'
          placeholder='+2348080808080'
          value={contactInformation}
          onChange={(e) => setContactInformation(e.target.value)}
          isInvalid={
            isSubmitted && contactInformation.trim() === '' ? true : false
          }
        />
      </Grid>

      <Checkbox
        alignItems={'flex-start'}
        value={is21orOlderAndAgreesToTheTermsOfUse}
        onChange={(e) =>
          setIs21orOlderAndAgreesToTheTermsOfUse(e.target.checked)
        }
      >
        I confirm that I am over 21 years of age and I agree with the{' '}
        <Link as={NextLink} href={'/terms-and-conditions'} color={'primary'}>
          {' '}
          terms and conditions{' '}
        </Link>
      </Checkbox>
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
        isLoading={loading}
        isDisabled={loading || disableSubmit}
        _disabled={{
          opacity: 0.5,
          cursor: 'not-allowed',
          bg: 'primary',
          color: 'white',
        }}
      >
        <Text>Submit</Text>
        {loading && (
          <SpinnerIcon rotate={'360deg'} className={animation.spin} />
        )}
      </Button>
    </VStack>
  );
};
