import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import styled from "styled-components";
import Link from "next/router";

//Styled components
const Form = styled.form`
  padding: 10px;
`;

// Lift content up!
export default function CallToAction() {
  return (
    <Box
      p="4"
      height="380px"
      width="490px"
      backgroundColor="white"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Form>
        <Text p="3" fontWeight="bold" fontSize="2xl" color="#1687a7">
          Book in few minutes
        </Text>
        <Flex p="3" flexDirection="column" justifyContent="center">
          <Text color="gray">Place:</Text>

          <Input
            mt="2"
            type="text"
            focusBorderColor="#1687a7"
            placeholder="Where to pick up?"
          />
        </Flex>
        <Flex p="3" justifyContent="center">
          <Flex mr="2" flexDirection="column">
            <Text color="gray">From:</Text>
            <Input mt="2" type="date" focusBorderColor="#1687a7" />
          </Flex>

          <Flex ml="2" flexDirection="column">
            <Text color="gray">To:</Text>
            <Input mt="2" type="date" focusBorderColor="#1687a7" />
          </Flex>
        </Flex>
        <Flex p="6" justifyContent="center">
          <Button colorScheme="blue" size="md">
            Book Now
          </Button>
        </Flex>
      </Form>
    </Box>
  );
}

// Moving state down
