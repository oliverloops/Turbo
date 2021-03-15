import Image from "next/image";
import styled from "styled-components";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";

// Custom UI components
import CallToAction from "./CallToAction";

// Styled components
const Span = styled.span`
  background-color: #1687a7;
  padding: 0 12px 0 12px;
`;

const Cover = () => (
  <Box>
    <Flex
      p="8"
      flexDirection="column"
      position="absolute"
      style={{ zIndex: 1 }}
    >
      <Text
        p="8"
        pt="16"
        fontWeight="bold"
        fontSize={{ base: "24px", md: "36px", lg: "48px" }}
        color="#1687a7"
      >
        "Better to be electric than excentric."
      </Text>
      <Text
        pl="12"
        fontWeight="medium"
        fontSize={{ base: "18px", md: "22px", lg: "37px" }}
        color="white"
      >
        <Span>Rent amazing electric vehicles</Span> <br />{" "}
        <Span>trusted by incredible owners in no time.</Span>
      </Text>

      <Box p="12">
        <CallToAction />
      </Box>
    </Flex>

    <Box style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Image
        src={"/static/cover_home.jpg"}
        layout={"fill"}
        alt="Home page cover"
      />
    </Box>
  </Box>
);

export default Cover;
