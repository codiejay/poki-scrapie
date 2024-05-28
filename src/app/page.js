"use client";
import { Team } from "@/Components/Team/Team";
import { Box, Flex } from "@chakra-ui/react";
import { About } from "../Components/About/About";
import { Acts } from "../Components/Acts/Acts";
import { FiguresQuotes } from "../Components/Figures";
import { Footer } from "../Components/Footer/Footer";
import { FooterInfo } from "../Components/Footer/FooterInfo";
import { Header } from "../Components/Header/Header";
import { JoinSection } from "../Components/JoinSection/JoinSection";
import { Showcase } from "../Components/Showcase/Showcase";

const LimitLayout = ({ children }) => {
  return (
    <Box
      paddingTop="16px"
      px={["10px", "15px", "100px"]}
      maxW="1440px"
      m="0 auto"
    >
      {children}
    </Box>
  );
};
export const Home = () => {
  return (
    <Flex flexDir="column">
      <LimitLayout>
        <Header />
        <Showcase />
      </LimitLayout>

      <FiguresQuotes />
      <Acts />
      <About />
      <JoinSection />
      <Team />
      <Footer />
      <FooterInfo />
    </Flex>
  );
};

export default Home;
