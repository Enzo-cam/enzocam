import Perfil from "@/Components/Perfil";
import AboutMe from "@/Components/AboutMe";
import Work from "@/Components/Work";
import Contact from "@/Components/Contact";

export const metadata = {
  title: 'Enzo Cámera',
  description: 'Enzo Cámera personal webpage with information about projects and CV',
}

export default function Home() {
  return (
    <>
      <div className="px-4 mb-10">
        <Perfil />
      </div>

      <AboutMe />
      <Work/>

      <Contact />
    </>
  );
}
