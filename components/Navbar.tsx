import Link from "next/link";
import styled from "styled-components";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";

// Styled components
const Header = styled.header`
  position: ${(props) => props.position};
  z-index: 2;
  width: 100%;
`;

export default function Navbar({ position, background }) {
  return (
    <Header position={position}>
      <Flex bg={background} pr="4">
        <Box p="4" color="black">
          <Heading size="md">
            <Link href="/">
              <a style={{ cursor: "pointer" }}>Turble ⚡️</a>
            </Link>
          </Heading>
        </Box>
        <Spacer />
        <Flex>
          <Box p="4" color="black" fontWeight="medium">
            <Link href="/rentnow">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                Rent
              </motion.a>
            </Link>
          </Box>
          <Box p="4" color="black" fontWeight="medium">
            <Link href="/rentnow">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                Be a Turbler
              </motion.a>
            </Link>
          </Box>
          <Box p="4" color="black" fontWeight="medium">
            <Link href="/rentnow">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                Log in
              </motion.a>
            </Link>
          </Box>
          <Box p="4" color="black" fontWeight="medium">
            <Link href="/rentnow">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                Sign up
              </motion.a>
            </Link>
          </Box>
          <Box p="3">
            <Link href="/">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                <CgProfile fontSize={32} />
              </motion.a>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Header>
  );
}
