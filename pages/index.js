import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Box, Flex, Text } from "@chakra-ui/react";
// Custom UI components
import Navbar from "../components/Navbar";

// Styled components
const Div = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Cover />
      </main>
    </>
  );
}

const Cover = () => (
  <Div>
    <Flex>
      <Text p="8" fontSize={{ base: "24px", md: "32px", lg: "46px" }}>
        "Better to be electric than a excentric."
      </Text>
    </Flex>
    <Image
      src={"/static/cover_home.jpg"}
      width={1200}
      height={800}
      alt="Home page cover"
    />
  </Div>
);
