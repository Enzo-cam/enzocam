import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IWork } from '@/Interfaces/Work';
import {FC} from 'react'


interface Props{
  work: IWork
}

const WorkCard: FC<Props> = ({work}) => {
  const {icon, projectName, projectDescription, technologies} = work;
  return (
    <div className="max-w-sm border rounded-lg shadow bg-bgWhiteGris p-4">
      <Image
        height={40}
        width={40}
        src={icon}
        className="rounded-md"
        alt="icono del producto"
      />

      <h1 className="text-xl font-semibold mt-4">{projectName}</h1>

      <p className="mt-2">{projectDescription}</p>

      <div className="mt-4 mb-10">
        <h3 className="font-semibold">Stack and Services</h3>
        <p>{technologies}</p>
      </div>

      <Link
        className="bg-azulOsc text-white font-medium gap-2 px-3 py-2 rounded-md w-3/6 flex items-center"
        href={`projects/${projectName}`}
      >
        Ver Proyecto
        <FaLongArrowAltRight />
      </Link>

      <div className="flex mt-4 justify-center border-black border-2 rounded-md">
        <Image
          src={"/IS.jpg"}
          width={280}
          height={150}
          alt="Imagen del proyecto"
        />
      </div>
    </div>
  );
};

export default WorkCard;
