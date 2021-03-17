import Link from "next/link";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import styled from "styled-components";

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
  padding-right: 1rem;
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
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>About</a>
            </Link>
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>Policies</a>
            </Link>
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>Careers</a>
            </Link>
          </Flex>
        </Flex>

        <Flex p="8" flexDirection="column">
          <Text color="white" fontWeight="bold">
            Discover
          </Text>
          <Flex pt="4" flexDirection="column">
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>Book a Car</a>
            </Link>
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>
                How it works
              </a>
            </Link>
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>FAQs</a>
            </Link>
          </Flex>
        </Flex>

        <Flex p="8" flexDirection="column">
          <Text color="white" fontWeight="bold">
            Be a Turbler (Host)
          </Text>
          <Flex pt="4" flexDirection="column">
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>
                List your car
              </a>
            </Link>
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>
                Create an account
              </a>
            </Link>
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>FAQs</a>
            </Link>
          </Flex>
        </Flex>

        <Flex p="8" flexDirection="column">
          <Text color="white" fontWeight="bold">
            Vehicle types
          </Text>
          <Flex pt="4" flexDirection="column">
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>Cars</a>
            </Link>
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>Trucks</a>
            </Link>
            <Link href="#">
              <a style={{ color: "#fff", paddingTop: "0.45rem" }}>Others</a>
            </Link>
          </Flex>
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
