import { useState, useContext, createContext } from "react";
import useSWR from "swr";
import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
//Custom UI components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//Context API
const listingContext = createContext();

// Lift up content
const RentNow = ({ listing }) => {
  return (
    <>
      <Navbar position={"relative"} background={"#1687a7"} />
      <listingContext.Provider value={listing}>
        <Listing />
      </listingContext.Provider>
      <Footer />
    </>
  );
};

// Fetcher wrapper for data fetching (swr)
const fetcher = (...args) => fetch(...args).then((res) => res.json());

//Move state down
const Listing = () => {
  // const { data } = useSWR("/api/lisiting", fetcher, { initialData: list });
  const list = useContext(listingContext);
  console.log(list);

  return (
    <Flex p="8">
      <Text>Here's the listing in other component...</Text>
    </Flex>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/listing");
  const listing = await res.json();
  // const listing = await fetcher("/api/listing");

  return {
    props: {
      listing,
    },
    // Incremental Static Regeneration
    revalidate: 1,
  };
}

export default RentNow;
