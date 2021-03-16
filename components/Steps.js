import { Box, Flex, Text } from "@chakra-ui/react";
import { GrMap } from "react-icons/gr";

const Steps = () => (
  <Box>
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
        <Box p="4" bg="white" rounded="md" boxShadow="md">
          <GrMap style={{ width: "60px", height: "60px" }} />
        </Box>
        <Text pt="3" fontWeight="bold" color="#1687a7">
          Choose a Location
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Box bg="white" rounded="md" boxShadow="md">
          Icon
        </Box>
        <Text pt="3" fontWeight="bold" color="#1687a7">
          Select a Pick-up Date
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Box bg="white" rounded="md" boxShadow="md">
          Icon
        </Box>
        <Text pt="3" fontWeight="bold" color="#1687a7">
          Book your prefered car
        </Text>
      </Flex>
    </Flex>
  </Box>
);

export default Steps;
