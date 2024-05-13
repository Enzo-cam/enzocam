import Image from "next/image";
import {ICV} from '@/Interfaces/CV'
import { FC } from "react";

interface Props {
  experience: ICV;
}

const CvCard: FC<Props> = ({ experience }) => {
  const { icon, name, experienceDescription, technologies, experiencePeriod } = experience;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex items-center gap-2">
            <Image
            height={30}
            width={40}
            src={icon}
            className="rounded-md"
            alt="Icon of emprise"
            />

            <h1 className="text-xl font-medium underline underline-offset-2">{name}</h1>
        </div>

        <p className="text-sm">{experiencePeriod}</p>
      </div>

      <p className="">{experienceDescription}</p>
      <p className="">Technologies: {technologies}</p>

      
    </div>
  );
};

export default CvCard;
