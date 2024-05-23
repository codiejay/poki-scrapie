import { Box } from "@chakra-ui/react";
import React from "react";
import "../../../public/embla.css";
import EmblaCarousel from "../Slider/EmCarousel";

const images = [
  "https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7H0Y6u4dbtpPQifEjG_2IVaEambq0pZGBRT2YPDgJCGiwOvjUSbO-wxF9KAqxKY6eLs&usqp=CAU",
  "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYWZyaWNhfGVufDB8fDB8fHww",
];

export const ImgSlider = () => {
  return (
    <Box h="440px" w="50%">
      <EmblaCarousel
        slides={images}
        options={{
          loop: true,
        }}
      />
    </Box>
  );
};
