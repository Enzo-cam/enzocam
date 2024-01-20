import Perfil from "@/Components/Perfil";
import Contact from "@/Components/Contact";
import AboutMe from "@/Components/AboutMe";
import Work from "@/Components/Work";

export default function Home() {
  return (
    <>
      <div className="px-4 mb-10">
        <Perfil />
        <Contact />
      </div>

      <AboutMe />
      <Work/>
    </>
  );
}
