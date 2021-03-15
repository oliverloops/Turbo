import Image from "next/image";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const FeaturesHome = () => (
  <Box>
    <Flex p="8" justifyContent="center" textAlign="center">
      <Text
        p="8"
        fontWeight="bold"
        fontSize={{ base: "16px", md: "24px", lg: "30px" }}
      >
        Because you're not just want to book a car, <br /> you want a change
      </Text>
    </Flex>
    <Flex p="8" flexDirection="column" alignItems="center">
      <Flex p="8" justifyContent="center">
        <Flex flexDirection="column">
          <Image
            src={"/static/landing_1.jpg"}
            width={360}
            height={220}
            alt="woman and car"
          />
        </Flex>
        <Flex pl="6" flexDirection="column">
          <Text fontWeight="bold" fontSize="xl">
            This is a title
          </Text>
          <Text>This a subtitle</Text>
        </Flex>
      </Flex>
      <Flex p="8" justifyContent="center">
        <Flex pr="6" flexDirection="column">
          <Text fontWeight="bold" fontSize="xl">
            This is a title
          </Text>
          <Text>This a subtitle</Text>
        </Flex>
        <Flex flexDirection="column">
          <Image
            src={"/static/landing_3.jpg"}
            width={360}
            height={220}
            alt="woman and car"
          />
        </Flex>
      </Flex>
      <Flex p="8" justifyContent="center">
        <Flex flexDirection="column">
          <Image
            src={"/static/landing_2.jpg"}
            width={360}
            height={220}
            alt="woman and car"
          />
        </Flex>
        <Flex pl="6" flexDirection="column">
          <Text fontWeight="bold" fontSize="xl">
            This is a title
          </Text>
          <Text>This a subtitle</Text>
        </Flex>
      </Flex>
    </Flex>
  </Box>
);

export default FeaturesHome;
