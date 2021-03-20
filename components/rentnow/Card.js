import { useContext } from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

// Context Provider
import { listingContext } from "../../pages/rentnow";

const Card = () => {
  const data = useContext(listingContext);

  return (
    <Box
      w={[140, 280, 350]}
      h={[80, 180, 250]}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <Image
        src={"/static/tesla_3.jpg"}
        width={"350px"}
        height={"250px"}
        alt="An awesome electric car"
      />
      <Flex p="4" flexDirection="column">
        <Text fontSize="xl" fontWeight="extrabold">
          {data.model}
        </Text>
        <Flex pt="1">
          <Text fontWeight="medium">${data.price}/day</Text>
          <Spacer />
          <Flex alignItems="center" justifyContent="center">
            <Text fontWeight="medium">{data.rating}</Text>
            <Box p="0.5">
              <AiFillStar style={{ color: "#1687a7", fontSize: "1.25em" }} />
            </Box>
            <Text fontWeight="medium">({data.trips} trips)</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
