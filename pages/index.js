import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
// Custom UI components
import Navbar from "../components/Navbar";

// Style components

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Cover />
      </main>
    </>
  );
}

const Cover = () => (
  <div>
    <Image
      src={"/static/cover_home.jpg"}
      width={1200}
      height={800}
      alt="Home page cover"
    />
  </div>
);
