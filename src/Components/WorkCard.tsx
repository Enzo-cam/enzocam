import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IWork } from "@/Interfaces/Work";
import { FC } from "react";

interface Props {
  work: IWork;
}

const WorkCard: FC<Props> = ({ work }) => {
  const { icon, projectName, projectDescription, technologies, url } = work;
  const newTechs = technologies.join(' | ')

  return (
    <div className="flex flex-col gap-4 max-w-sm border rounded-lg shadow bg-bgWhiteGris p-4">
      <div className="flex gap-2 items-center">
        <Image
          height={30}
          width={40}
          src={icon}
          className="rounded-md"
          alt="icono del producto"
        />

        <h1 className="text-xl font-medium underline underline-offset-2">{projectName}</h1>
      </div>

      <p className="">{projectDescription}</p>

      <div className="">
        <h3 className="font-semibold text-lg">Stack</h3>
        <p>{newTechs}</p>
      </div>

      {work.available ? (
        <Link
          className="bg-grisOsc text-white font-medium gap-2 px-3 py-2 rounded-md w-fit flex items-center"
          href={`projects/${url}`}
        >
          View project <FaLongArrowAltRight />
        </Link>
      ) : (
        <button
          className="bg-gray-300 text-grisOsc opacity-60 font-medium gap-2 px-1 py-2 rounded-md justify-center w-2/6 flex items-center"
          disabled={true}
          type="button"
        >
          Soon
          {/* <FaLongArrowAltRight /> */}
        </button>
      )}
    </div>
  );
};

export default WorkCard;
