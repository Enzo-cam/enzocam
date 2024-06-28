import Image from "next/image";
import { workInfo } from "../../../../utils/workInfo";
import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "./components/Carousel";

interface Props {
  params: {
    name: string;
  };
}

const ProjectPage: FC<Props> = ({ params }) => {
  const projectUrl = params.name;
  console.log(projectUrl)
  
  const project = workInfo.find((work) => work.url === projectUrl);

  if (!project) {
    // Manejar el caso en el que el proyecto no se encuentra
    return <div>Project not found</div>;
  }

  return (
    <div className="px-4 max-w-screen-lg mx-auto lg:px-20">
      {/* Main */}
      <div className="mt-20 mb-14">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-semibold tracking-wide">
            {project.projectName}
          </h1>
          <p
            className="text-sm"
          >{project.developmentPeriod}</p>
        </div>
        <div className="flex justify-center">
          <Carousel 
            images={project.imagesProject}
          />
          {/* <Image
            src={project.images}
            alt="Icono del producto"
            width={800}
            height={800}
            className="rounded-md sm:w-full sm:object-cover md:w-auto md:object-scale-down"
            /> */}
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold mb-4">The Project</h3>
        <h3 className="text-lg text-grisAbout">{project.projectDescription}</h3>
      </div>

      {/* Details */}
      <div className="mb-20 lg:mb-12">
        <h3 className="text-2xl font-semibold mb-4">Technical details</h3>
        <p className="text-lg mb-4">
          For this project I use the following technologies:{" "}
        </p>
        <ul className="px-1">
          {project.technologies.map((tech) => (
            <li
              className="flex gap-1 items-center text-lg font-medium"
              key={tech}
            >
              <FaLongArrowAltRight className="text-blue-900" />
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Personal Growth */}
      <div className="mb-20 lg:mb-12">
        <h3 className="text-2xl font-semibold mb-4">Personal Growth</h3>
        <p className="">{project.growth}</p>
      </div>

      {/* Challenges and Solution */}
      <div className="mt-8 mb-10">
        <h3 className="text-2xl font-semibold mb-4">Challenges</h3>

        <h4 className="text-lg font-semibold mb-2">~ Objective</h4>
        <p className="mb-6">{project.challenge}</p>

        <h4 className="text-lg font-semibold mt-6 mb-2">~ Solution</h4>
        <p className="">{project.solution}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
