import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const TextInput = ({ label, placeholder, controlProps, labelProps, ...props  }) => {
  return (
    <FormControl w='max-content' {...controlProps}>
      <FormLabel {...labelProps}>{label}</FormLabel>
      {props.tinyLabel && <FormLabel fontSize={'0.625rem'}>{props.tinyLabel}</FormLabel>}
      <Input placeholder={placeholder} fontSize={'0.875rem'} {...props} />
    </FormControl>
  );
};
