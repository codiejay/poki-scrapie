import useUtilityHooks from '@/utils/useUtilityHooks';
import { MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

export const FileInput = ({
  label,
  placeholder,
  controlProps,
  labelProps,
  handlechange,
  ...props
}) => {
  const { truncate } = useUtilityHooks();
  const fileSelect = useRef(null);
  const minFile = props.minfile || 1;
  const maxFiles = props.maxfile || 2;
  const sizeLimit = props.maxsize * 1024 * 1024 || 2 * 1024 * 1024;

  const [fileList, setFileList] = useState([]);

  // update parent state
  useEffect(() => {
    if (props?.handlechange) {
      props?.handlechange(fileList);
    }
    if (props?.onFileChange) {
      props?.onFileChange(fileList);
    }
  }, [fileList, props]);

  const renderSelectedImageNames = () => {
    const dataArray = Object.values(fileList);
    if (dataArray.length > 0) {
      return dataArray?.map((image, index) => (
        <Box key={index} pos={'relative'}>
          <Box
            pos={'relative'}
            maxW={'150px'}
            color={'#9D9D9D'}
            fontSize={'0.875rem'}
            fontWeight={'400'}
            bg={'transparent'}
            border={'1px'}
            borderColor={'#9D9D9D'}
            _hover={{ bg: 'transparent' }}
            rounded={'4px'}
            p={2}
          >
            <Text>{truncate(image?.name, 8)}</Text>

            <Box
              aria-label='Remove File Button'
              pos={'absolute'}
              h={'1rem'}
              w={6}
              cursor={'pointer'}
              userSelect={'none'}
              bg={'red.500'}
              color={'white'}
              _hover={{ bg: 'red.500' }}
              roundedTopRight={'4px'}
              p={2}
              top={0}
              right={0}
              lineHeight={0}
              onClick={() => onFileRemove(index)}
            >
              X
            </Box>
          </Box>
        </Box>
      ));
    }
  };

  const onFileRemove = (index) => {
    const newFileList = [...fileList];
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const onFileChange = (e) => {
    // check max files
    if (e.target.files.length > maxFiles) {
      alert(`Please select at most ${maxFiles} files`);
      return;
    }


    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i].size > sizeLimit) {
        alert(`Please select a file smaller than ${props.maxsize || 2}mb`);
        return;
      }
    }

    setFileList([...fileList, ...e.target.files]);
  };

  return (
    <FormControl w='max-content' {...controlProps}>
      <FormLabel {...labelProps}>
        {label}{' '}
        <Text
          as={'span'}
          textDecor={'underline'}
          color={'red.300'}
          display={{ base: 'block', '2xl': 'inline' }}
        >
          {props?.see_sample}
        </Text>
      </FormLabel>
      {props.tinylabel && (
        <FormLabel fontSize={'0.625rem'}> {props.tinylabel}</FormLabel>
      )}

      <HStack>
        <Button
          onClick={() => fileSelect.current.click()}
          color={'#9D9D9D'}
          fontSize={'0.875rem'}
          fontWeight={'400'}
          bg={'transparent'}
          border={props.isInvalid ? '2px' : '1px'}
          borderColor={props.isInvalid ? 'red.500' : '#9D9D9D'}
          _hover={{ bg: 'transparent' }}
        >
          {placeholder}
        </Button>
        <HStack align={'flex-start'} gap={2}>
          {renderSelectedImageNames()}
        </HStack>
      </HStack>

      <Input
        type='file'
        accept={`${props.accepts}/*`}
        ref={fileSelect}
        onChange={onFileChange}
        hidden
        {...props}
      />

      {props.isInvalid && (
        <Text color='red.500'>
          {props.errorMessage ?? 'This field is required'}
        </Text>
      )}

      {fileList.length < minFile ||
        (fileList.length > maxFiles && (
          <Text color='red.500'>
            {fileList.length < minFile &&
              `Please select at least ${minFile} file(s)`}
            {fileList.length > maxFiles &&
              `Please select at most ${maxFiles} file(s)`}
          </Text>
        ))}
    </FormControl>
  );
};
