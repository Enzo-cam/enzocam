

import { workInfo } from "../../../../utils/workInfo";
import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Props {
  params: {
    name: string
  };
}


const ProjectPage: FC<Props> = ({ params }) => {
  const projectName = params.name;
  const project = workInfo.find(work => work.projectName === projectName);

  if (!project) {
    // Manejar el caso en el que el proyecto no se encuentra
    return <div>Project not found</div>;
  }

  return (
    <div className="px-4 mb-6">
      {/* Main */}
      <h1 className="text-4xl font-semibold tracking-wide">{project.projectName}</h1>
      <p className="my-16">Aca va una IMAGEN</p>
      <h3 className="text-3xl font-semibold mb-6">The Project</h3>
      <h3 className="text-lg text-grisAbout">{project.projectDescription}</h3>

      {/* Details */}
      <h3 className="text-3xl font-semibold mt-8 mb-6">Technical details</h3>
      <p className="text-lg mb-4">For this project I use the following technologies: </p>
      <ul className="px-1">
        {project.technologies.map(tech => (
          <li className="flex gap-1 items-center text-lg font-medium" key={tech}>
            <FaLongArrowAltRight className="text-blue-900" />
            {tech}
          </li>
        ))}
      </ul>

      {/* Personal Growth */}
      <h3 className="text-3xl font-semibold mt-8 mb-4">Personal Growth</h3>


    </div>
  );
};

export default ProjectPage;