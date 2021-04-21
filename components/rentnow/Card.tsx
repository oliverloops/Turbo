import { useContext } from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

// Context Provider
import { listingContext } from "../../pages/rentnow";

const StyledImage = styled(Image)`
  border-radius: 8px 8px 0 0;
`;

const Card = () => {
  const data = useContext(listingContext);

  return (
    <Link href="#">
      <a>
        <Box
          w={[150, 290, 360]}
          h={[85, 185, 325]}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="base"
          _hover={{ filter: "opacity(80%)", transition: "filter 0.25s linear" }}
        >
          <StyledImage
            src={"/static/tesla_3.jpg"}
            width={"360px"}
            height={"215px"}
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
                  <AiFillStar
                    style={{ color: "#1687a7", fontSize: "1.25em" }}
                  />
                </Box>
                <Text fontWeight="medium">({data.trips} trips)</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </a>
    </Link>
  );
};

export default Card;
