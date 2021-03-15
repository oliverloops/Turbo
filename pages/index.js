import Head from "next/head";
// Custom UI components
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import FeaturesHome from "../components/FeaturesHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Turble | Rent electric now</title>
      </Head>
      <Navbar />
      <main>
        <Cover />
        <FeaturesHome />
      </main>
    </>
  );
}
