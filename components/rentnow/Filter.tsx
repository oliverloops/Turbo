import { Box, Button, Text, Flex, Spacer } from "@chakra-ui/react";

const Filter = () => {
  return (
    <Flex
      w="100%"
      h="70"
      bg="white"
      boxShadow="base"
      position="fixed"
      mt="55"
      zIndex="1"
      borderColor="gray.200"
      borderWidth="2px 0 0 0"
    >
      <Flex p="3">
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
