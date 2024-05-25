import { Box, Flex } from "@chakra-ui/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2000 }),
  ]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <Box mb="12" w="100%">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${slide})`,
                    backgroundColor: "red",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="embla__slide__number"
                />
              </div>
            ))}
          </div>
        </div>
        <Flex gap={2} w="100%" justify="center" mt="6">
          <Flex
            align="center"
            justify="center"
            boxSize="30px"
            border="1px solid #D2A63C"
            borderRadius="90px"
            color="#D2A63C"
            cursor="pointer"
            onClick={onPrevButtonClick}
          >
            <MdOutlineNavigateBefore fontSize="19px" />
          </Flex>
          <Flex
            align="center"
            justify="center"
            boxSize="30px"
            border="1px solid #D2A63C"
            borderRadius="90px"
            color="#D2A63C"
            cursor="pointer"
            onClick={onNextButtonClick}
          >
            <MdOutlineNavigateNext fontSize="19px" />
          </Flex>
        </Flex>
      </Box>
    </section>
  );
};

export default EmblaCarousel;
