import { useContext } from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";

// Context Provider
import { listingContext } from "../../pages/rentnow";

const Card = () => {
  const data = useContext(listingContext);

  return (
    <Box borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Image
        src={"/static/tesla_3.jpg"}
        width={"300px"}
        height={"220px"}
        alt="An awesome electric car"
      />
      <Flex pl="4" pt="2" flexDirection="column">
        <Text fontSize="xl" fontWeight="bold">
          {data.name}
        </Text>
        <Text>$200/day</Text>
      </Flex>
    </Box>
  );
};

export default Card;
