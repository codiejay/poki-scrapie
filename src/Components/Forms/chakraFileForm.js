import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useRef } from 'react';

export const FileInput = ({
  label,
  placeholder,
  controlProps,
  labelProps,
  ...props
}) => {
  const fileSelect = useRef(null);
  const minFile = props.minFile || 1;

  const onFileChange = (e) => {
    console.log(e.target.files);
    if (e.target.files.length < minFile) {
      alert(`Please select at least ${minFile} files`);
      return;
    }
  };
  return (
    <FormControl w='max-content' {...controlProps}>
      <FormLabel {...labelProps}>
        {label}{' '}
        <Text
          as={'span'}
          textDecor={'underline'}
          color={'red.300'}
        >
          {props?.see_sample}
        </Text>
      </FormLabel>
      {props.tinylabel && (
        <FormLabel fontSize={'0.625rem'}> {props.tinylabel}</FormLabel>
      )}

      <Button
        onClick={() => fileSelect.current.click()}
        color={'#9D9D9D'}
        fontSize={'0.875rem'}
        fontWeight={'400'}
        bg={'transparent'}
        border={'1px'}
        borderColor={'#9D9D9D'}
        _hover={{ bg: 'transparent' }}
      >
        {placeholder}
      </Button>
      <Input
        type='file'
        accept={`${props.accepts}/*`}
        ref={fileSelect}
        onChange={onFileChange}
        hidden
        {...props}
      />
    </FormControl>
  );
};
