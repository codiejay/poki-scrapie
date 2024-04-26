import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";

// Custom ImageSlider Component
export const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null; // or some fallback UI
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      position="relative"
      height="500px"
      width="100%"
    >
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={prevSlide}
        position="absolute"
        left="10px"
        top="50%"
        zIndex="10"
        colorScheme="teal"
      />
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={nextSlide}
        position="absolute"
        right="10px"
        top="50%"
        zIndex="10"
        colorScheme="teal"
      />
      {images.map((image, index) => (
        <Box
          key={index}
          display={index === current ? "block" : "none"}
          width="100%"
          height="100%"
        >
          <Image alt="d" src={image} fit="cover" width="100%" height="100%" />
        </Box>
      ))}
    </Flex>
  );
};
