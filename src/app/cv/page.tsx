import CvCard from "@/Components/CvCard"
import { cvInfo, stackInfo } from "../../../utils/cvInfo"
import StackCard from "@/Components/StackCard"

export const metadata = {
  title: 'CV - Enzo Camera'
}

const HomePage = () => {
  return (
    <div className="px-4 mb-8">
        <h1 className="text-3xl font-semibold tracking-wide mb-6">
          Curriculum
        </h1>

        <div>
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <div className="flex flex-col mt-4 gap-7">
            {cvInfo.map(experience => (
              <CvCard 
                key={experience.name}
                experience={experience}
              />
            ))}
          </div>
        </div>


        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
          {stackInfo.map(area => (
            <StackCard 
              area={area}
            />
          ))}
        </div>
        


    </div>
  )
}

export default HomePage