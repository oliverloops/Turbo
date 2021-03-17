import Link from "next/link";
import { Flex, Text, Spacer } from "@chakra-ui/react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";

const Foot = styled.footer`
  background-color: #000;
  width: 100%;
  height: 40vh;
  padding-left: 7%;
  padding-right: 7%;
`;

const Small = styled.small`
  color: #fff;
  font-weight: 600;
`;

const Footer = () => (
  <Foot>
    <Flex flexDirection="column">
      <Flex pt="8" pb="8">
        <Flex p="8" flexDirection="column">
          <Text color="white" fontWeight="bold">
            Turble
          </Text>
          <Flex pt="4" flexDirection="column">
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                About
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                Policies
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                Careers
              </motion.a>
            </Link>
          </Flex>
        </Flex>

        <Flex p="8" flexDirection="column">
          <Text color="white" fontWeight="bold">
            Discover
          </Text>
          <Flex pt="4" flexDirection="column">
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                Book a Car
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                How it works
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                FAQs
              </motion.a>
            </Link>
          </Flex>
        </Flex>

        <Flex p="8" flexDirection="column">
          <Text color="white" fontWeight="bold">
            Be a Turbler (Host)
          </Text>
          <Flex pt="4" flexDirection="column">
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                List your car
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                Create an account
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                FAQs
              </motion.a>
            </Link>
          </Flex>
        </Flex>

        <Flex p="8" flexDirection="column">
          <Text color="white" fontWeight="bold">
            Vehicle types
          </Text>
          <Flex pt="4" flexDirection="column">
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                Cars
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                Trucks
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{ cursor: "pointer" }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
                style={{ color: "#fff", paddingTop: "0.45rem" }}
              >
                Others
              </motion.a>
            </Link>
          </Flex>
        </Flex>

        <Flex
          p="8"
          color="white"
          fontSize={{ base: "12px", md: "16px", lg: "23px" }}
        >
          <FaFacebook style={{ margin: "0 0.5rem 0 0.5rem" }} />
          <FaTwitter style={{ margin: "0 0.5rem 0 0.5rem" }} />
          <FaInstagram style={{ margin: "0 0.5rem 0 0.5rem" }} />
          <SiYoutube style={{ margin: "0 0.5rem 0 0.5rem" }} />
        </Flex>
      </Flex>

      <Flex p="4">
        <Text
          pl="4"
          color="white"
          fontWeight="bold"
          fontSize={{ base: "7px", md: "12px", lg: "18px" }}
        >
          Turble ⚡️
        </Text>
        <Spacer />
        <Small>©2021 Turble, Inc.</Small>
      </Flex>
    </Flex>
  </Foot>
);

export default Footer;
