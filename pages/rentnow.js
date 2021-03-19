import useSWR from "swr";
import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
//Custom UI components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Lift up content
const RentNow = (props) => {
  return (
    <>
      <Navbar position={"relative"} background={"#1687a7"} />
      <Listing data={props.res} />
      <Footer />
    </>
  );
};

//Move state down
const Listing = ({ data }) => {
  console.log(data);

  return (
    <Flex p="8">
      <Text>Here's the listing in other component...</Text>
    </Flex>
  );
};

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/hello");
  const res = await data.json();

  return {
    props: {
      res,
    },
    // Incremental Static Regeneration
    revalidate: 1,
  };
}

export default RentNow;
