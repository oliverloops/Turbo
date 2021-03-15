import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import styled from "styled-components";

//Styled components

export default function CallToAction() {
  return (
    <Box
      p="4"
      height="300px"
      width="450px"
      backgroundColor="white"
      borderRadius="lg"
      boxShadow="lg"
    >
      <form>
        <Flex p="3" flexDirection="column">
          <Text>Place:</Text>
          <Input type="text" placeholder="Where to pick up?" />
        </Flex>
        <Flex p="3">
          <Flex flexDirection="column">
            <Text>From:</Text>
            <Input type="date" />
          </Flex>

          <Flex flexDirection="column">
            <Text>To:</Text>
            <Input type="date" />
          </Flex>
        </Flex>
        <Flex p="6" justifyContent="center">
          <Button colorScheme="blue" size="md">
            Book Now
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
