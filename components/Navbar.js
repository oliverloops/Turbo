import Link from "next/link";
import styled from "styled-components";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

// Styled components
const StyledLink = styled(Link)`
  padding: 0 0.8em 0 0.8em;
`;

export default function Navbar() {
  return (
    <header>
      <Flex bg="#1687a7">
        <Box p="2" color="white">
          <Heading size="md">Turble ⚡️</Heading>
        </Box>
        <Spacer />
        <Box>
          <StyledLink href="/">
            <a>Rent</a>
          </StyledLink>
          <StyledLink href="/">
            <a>Be a Turbler</a>
          </StyledLink>
          <StyledLink href="/">
            <a>About</a>
          </StyledLink>
        </Box>
      </Flex>
    </header>
  );
}
