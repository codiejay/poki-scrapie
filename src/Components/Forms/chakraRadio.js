const { Box, useRadio } = require( '@chakra-ui/react' )

const RadioCard = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'primary',
          color: 'white',
          borderColor: 'primary',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={1.5}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default RadioCard;