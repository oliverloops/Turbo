import { useState, useContext, createContext } from "react";
import useSWR from "swr";
import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
//Custom UI components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/rentnow/Filter";
import Card from "../components/rentnow/Card";

// Fetcher wrapper for data fetching (swr)
const fetcher = (...args) => fetch(...args).then((res) => res.json());

//Context API
export const listingContext = createContext();

// Lift up content
const RentNow = ({ listing }) => {
  return (
    <>
      <Navbar position={"fixed"} background={"white"} />
      <Filter />
      <listingContext.Provider value={listing}>
        <Listing />
      </listingContext.Provider>
      <Footer />
    </>
  );
};

//Move state down
const Listing = () => {
  const list = useContext(listingContext);
  const { data, error } = useSWR("/api/listing", fetcher, {
    initialData: list,
  });

  if (!data) return <div>Loading, please wait...</div>;

  return (
    <Flex p="10" flexWrap="wrap">
      <Box p="4">
        <Card />
      </Box>
      <Box p="4">
        <Card />
      </Box>
      <Box p="4">
        <Card />
      </Box>
    </Flex>
  );
};

export async function getStaticProps() {
  const listing = await fetcher("http://localhost:3000/api/listing");

  return {
    props: {
      listing,
    },
    // Incremental Static Regeneration
    revalidate: 1,
  };
}

export default RentNow;
