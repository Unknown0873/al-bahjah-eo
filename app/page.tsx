import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portofolio from "../components/Portofolio";
import KatalogPeralatan from "../components/KatalogPeralatan";
import Testimoni from "../components/Testimoni";
import Keunggulan from "../components/Keunggulan";
import VisionMission from "../components/VisionMission";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Keunggulan />
      <Services />
      <VisionMission />
      <Portofolio />
      <KatalogPeralatan />
      <Testimoni />
      <Footer />
    </>
  );
}

