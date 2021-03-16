import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import styled from "styled-components";

const Foot = styled.footer`
  background-color: #000;
  width: 100%;
  height: 20vh;
`;

const Small = styled.small`
  color: #fff;
  font-weight: 600;
`;

const Footer = () => (
  <Foot>
    <Flex p="4">
      <Text color="white">This is a footer</Text>
      <Spacer />
      <Small>©2021 Turble, Inc.</Small>
    </Flex>
  </Foot>
);

export default Footer;
