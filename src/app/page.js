"use client";
import { Box, Flex } from "@chakra-ui/react";
import { About } from "../components/About/About";
import { Acts } from "../components/Acts/Acts";
import { FiguresQuotes } from "../components/Figures";
import { Footer } from "../components/Footer/Footer";
import { FooterInfo } from "../components/Footer/FooterInfo";
import { Header } from "../components/Header/Header";
import { JoinSection } from "../components/JoinSection/JoinSection";
import { Showcase } from "../components/Showcase/Showcase";
import { Team } from "../components/Team/Team";

const LimitLayout = ({ children }) => {
  return (
    <Box paddingTop="16px" px="100px" maxW="1440px" m="0 auto">
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
