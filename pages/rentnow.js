import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
//Custom UI components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RentNow = ({ props }) => {
  // console.log(props);

  return (
    <>
      <Navbar position={"relative"} background={"#1687a7"} />
      <Flex p="8">
        <Text>Here's the lisitng...</Text>
      </Flex>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/hello");
  const res = await data.json();

  console.log(res);
  return {
    props: {
      res,
    },
  };
}

export default RentNow;
