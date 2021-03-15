import Image from "next/image";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const FeaturesHome = () => (
  <Box>
    <Flex p="8" justifyContent="center" textAlign="center">
      <Text
        p="8"
        fontWeight="bold"
        fontSize={{ base: "18px", md: "26px", lg: "32px" }}
        bgGradient="linear(to-l, purple.400, #1687a7)"
        bgClip="text"
      >
        Because you're not just want to book a car, <br /> you want a change.
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
          <Text fontWeight="bold" fontSize="xl" color="#1687a7">
            We keep you safe
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Vestibulum feugiat accumsan ullamcorper.
          </Text>
        </Flex>
      </Flex>
      <Flex p="8" justifyContent="center">
        <Flex pr="6" flexDirection="column">
          <Text fontWeight="bold" fontSize="xl" color="#1687a7">
            Discover amazing cars
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Vestibulum feugiat accumsan ullamcorper.
          </Text>
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
          <Text fontWeight="bold" fontSize="xl" color="#1687a7">
            Real and trusted owners
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Vestibulum feugiat accumsan ullamcorper.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Box>
);

export default FeaturesHome;
