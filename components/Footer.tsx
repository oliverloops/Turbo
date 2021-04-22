import Link from "next/link";
import { Flex, Text, Spacer } from "@chakra-ui/react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";

const Foot = styled.footer`
  background-color: #000;
  width: 100%;
  height: auto;
  padding-left: 7%;
  padding-right: 7%;
`;

const Small = styled.small`
  color: #fff;
  font-weight: 600;
`;

const Footer = () => (
  <Foot>
    <Flex flexDirection="column" flexWrap="wrap">
      <Flex pt="8" pb="8">
        <Flex p="8" flexDirection="column">
          <Text color="white" fontWeight="bold">
            Turble
          </Text>
          <Flex pt="4" flexDirection="column">
            <Link href="#">
              <motion.a
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                About
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                Policies
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
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
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                Book a Car
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                How it works
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
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
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                List your car
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                Create an account
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
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
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                Cars
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
              >
                Trucks
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  paddingTop: "0.45rem",
                }}
                whileHover={{ color: "#1687a7" }}
                transition={{ duration: 0.42 }}
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
        <Small>
          <Flex>
            ©2021 Turble, Inc. |&nbsp;
            <a href="https://oliverloops.com">Created by oliverloops</a>
          </Flex>
        </Small>
      </Flex>
    </Flex>
  </Foot>
);

export default Footer;
