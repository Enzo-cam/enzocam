import Perfil from "@/Components/Perfil";
import ContactRRSS from "@/Components/ContactRRSS";
import AboutMe from "@/Components/AboutMe";
import Work from "@/Components/Work";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <>
      <div className="px-4 mb-10">
        <Perfil />
        <ContactRRSS />
      </div>

      <AboutMe />
      <Work/>

      <Contact />
    </>
  );
}
