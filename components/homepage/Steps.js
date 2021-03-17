import { Box, Flex, Text } from "@chakra-ui/react";
import { GrMap } from "react-icons/gr";
import { BiCalendarCheck } from "react-icons/bi";
import { IoLogoModelS } from "react-icons/io";

const Steps = () => (
  <Box height="500px">
    <Flex p="8" justifyContent="center" textAlign="center">
      <Flex flexDirection="column">
        <Text
          fontWeight="bold"
          fontSize={{ base: "18px", md: "26px", lg: "32px" }}
          bgGradient="linear(to-l, #1687a7, purple.400)"
          bgClip="text"
        >
          Rent with this easy steps
        </Text>
        <Text
          fontWeight="bold"
          fontSize={{ base: "14px", md: "22px", lg: "28px" }}
          bgGradient="linear(to-l, #1687a7, purple.400)"
          bgClip="text"
        >
          How it works
        </Text>
      </Flex>
    </Flex>

    <Flex p="8" justifyContent="space-evenly">
      <Flex flexDirection="column" alignItems="center">
        <Box
          p="6"
          bg="white"
          rounded="md"
          boxShadow="md"
          color="#1687a7"
          _hover={{ boxShadow: "base" }}
        >
          <GrMap style={{ width: "50px", height: "50px" }} />
        </Box>
        <Text pt="3" fontWeight="bold" color="#1687a7">
          Choose a Location
        </Text>
        <Text>This is a description</Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Box
          p="6"
          bg="white"
          rounded="md"
          boxShadow="md"
          color="#1687a7"
          _hover={{ boxShadow: "base" }}
        >
          <BiCalendarCheck style={{ width: "50px", height: "50px" }} />
        </Box>
        <Text pt="3" fontWeight="bold" color="#1687a7">
          Pick-up Date
        </Text>
        <Text>This is a description</Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Box
          p="6"
          bg="white"
          rounded="md"
          boxShadow="md"
          color="#1687a7"
          _hover={{ boxShadow: "base" }}
        >
          <IoLogoModelS style={{ width: "50px", height: "50px" }} />
        </Box>
        <Text pt="3" fontWeight="bold" color="#1687a7">
          Book a car
        </Text>
        <Text>This is a description</Text>
      </Flex>
    </Flex>
  </Box>
);

export default Steps;
