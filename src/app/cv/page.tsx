import CvCard from "@/Components/CvCard";
import { cvInfo, stackInfo } from "../../../utils/cvInfo";
import StackCard from "@/Components/StackCard";
import Link from "next/link";

export const metadata = {
  title: "CV - Enzo Camera",
};

const HomePage = () => {
  return (
    <div className="px-4 mb-8 w-full max-w-screen-lg mx-auto lg:px-20">
      <h1 className="text-3xl font-semibold tracking-wide mb-6">Curriculum</h1>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <Link
          href="/CV-Enzo Camera.pdf"
          target="_blank"
        >
          <button className="bg-grisAbout hover:bg-stone-800 text-bgWhite mt-2 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>CV</span>
          </button>
        </Link>
      </div>

      <div>
        <div className="flex flex-col mt-4 gap-7 lg:gap-10">
          {cvInfo.map((experience) => (
            <CvCard key={experience.name} experience={experience} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
        {stackInfo.map((area) => (
          <StackCard key={area.name} area={area} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
