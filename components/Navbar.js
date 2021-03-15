import Link from "next/link";
import styled from "styled-components";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Styled components
const Header = styled.header`
  position: absolute;
  z-index: 1;
  width: 100%;
`;

export default function Navbar() {
  return (
    <Header>
      <Flex bg="transparent">
        <Box p="4" color="black">
          <Heading size="md">
            <Link href="/">
              <a>Turble ⚡️</a>
            </Link>
          </Heading>
        </Box>
        <Spacer />
        <Flex>
          <Box p="4" color="black" fontWeight="medium">
            <Link href="/">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.45 }}
              >
                Rent
              </motion.a>
            </Link>
          </Box>
          <Box p="4" color="black" fontWeight="medium">
            <Link href="/">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.45 }}
              >
                Be a Turbler
              </motion.a>
            </Link>
          </Box>
          <Box p="4" color="black" fontWeight="medium">
            <Link href="/">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.45 }}
              >
                About
              </motion.a>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Header>
  );
}
