import { useState, useEffect } from "react";
import useSWR from "swr";
import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
//Custom UI components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Lift up content
const RentNow = ({ listing }) => {
  return (
    <>
      <Navbar position={"relative"} background={"#1687a7"} />
      <Listing list={listing} />
      <Footer />
    </>
  );
};

//Move state down
const Listing = ({ list }) => {
  const { data } = useSWR("/api/lisiting", fetcher, { initialData: list });
  console.log(data);

  return (
    <Flex p="8">
      <Text>Here's the listing in other component...</Text>
    </Flex>
  );
};

export async function getStaticProps() {
  // Fetcher wrapper for data fetching (swr)
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const listing = fetcher("/api/listing");

  return {
    props: {
      listing,
    },
    // Incremental Static Regeneration
    revalidate: 1,
  };
}

export default RentNow;
