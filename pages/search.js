import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
//Custom UI components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Search = () => {
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

export default Search;
