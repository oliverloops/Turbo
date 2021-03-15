import Link from "next/link";
import styled from "styled-components";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

// Styled components
const Header = styled.header`
  position: relative;
`;

export default function Navbar() {
  return (
    <Header>
      <Flex bg="#1687a7">
        <Box p="4" color="white">
          <Heading size="md">Turble ⚡️</Heading>
        </Box>
        <Spacer />
        <Flex>
          <Box p="4">
            <Link href="/">
              <a>Rent</a>
            </Link>
          </Box>
          <Box p="4">
            <Link href="/">
              <a>Be a Turbler</a>
            </Link>
          </Box>
          <Box p="4">
            <Link href="/">
              <a>About</a>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Header>
  );
}
