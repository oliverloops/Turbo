import Head from "next/head";
// Custom UI components
import Navbar from "../components/Navbar";
import Cover from "../components/homepage/Cover";
import FeaturesHome from "../components/homepage/FeaturesHome";
import Steps from "../components/homepage/Steps";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Turble | Rent electric now</title>
      </Head>
      <Navbar position={"absolute"} background={"transparent"} />
      <main>
        <Cover />
        <FeaturesHome />
        <Steps />
      </main>
      <Footer />
    </>
  );
}
