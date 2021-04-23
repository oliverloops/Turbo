import { useState, useContext, createContext } from "react";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
//Custom UI components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/rentnow/Filter";
import Card from "../components/rentnow/Card";
import { getData } from "./api/listing";
//Dynamic map component import
const Map = dynamic(
  () => {
    return import("../components/rentnow/Map");
  },
  { ssr: false }
);

// Fetcher wrapper for data fetching (swr)
const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

//Context API
export const listingContext = createContext({});

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
    <Flex>
      <Flex p="10" flexWrap="wrap" pt="17vh" pb="12vh" width="72%">
        <Box p="4">
          <Card />
        </Box>
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

      <Map>
        <Flex p="4">
          <div id="mapid"></div>
        </Flex>
      </Map>
    </Flex>
  );
};

export async function getStaticProps() {
  const listing = await getData();

  return {
    props: {
      listing,
    },
    // Incremental Static Regeneration
    revalidate: 1,
  };
}

export default RentNow;
