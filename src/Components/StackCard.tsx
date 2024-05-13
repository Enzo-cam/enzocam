import { IStack } from "@/Interfaces/CV"
import {FC} from 'react'

interface Props {
    area: IStack;
}

const StackCard: FC<Props> = ({area}) => {

    const {name, technologies} = area;

  return (
    <div className="mb-4">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p>{technologies}</p>
    </div>
  )
}

export default StackCard