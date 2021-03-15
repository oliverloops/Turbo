import Head from "next/head";
// Custom UI components
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";

export default function Home() {
  return (
    <>
      <Head>
        <title>Turble | Rent electric now</title>
      </Head>
      <Navbar />
      <main>
        <Cover />
        <h2>I'm other section</h2>
      </main>
    </>
  );
}
