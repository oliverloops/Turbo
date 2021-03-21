import { Box, Button, Text, Flex, Spacer } from "@chakra-ui/react";

const Filter = () => {
  return (
    <Flex
      w="100%"
      h="55"
      bg="white"
      boxShadow="base"
      position="fixed"
      zIndex="1"
    >
      <Flex p="2">
        <Button color="purple.400" colorScheme="purple" variant="outline">
          Price
        </Button>
        <Button color="purple.400" colorScheme="purple" variant="outline">
          Year
        </Button>
      </Flex>
    </Flex>
  );
};

export default Filter;
