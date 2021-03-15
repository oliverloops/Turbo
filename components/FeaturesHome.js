import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

const FeaturesHome = () => (
  <Flex justifyContent="center" textAlign="center">
    <Text
      p="8"
      fontWeight="bold"
      fontSize={{ base: "16px", md: "24px", lg: "30px" }}
    >
      Because you're not just want a riding, <br /> you want a change
    </Text>
  </Flex>
);

export default FeaturesHome;
