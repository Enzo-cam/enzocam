
import { workInfo } from "../../utils/workInfo"
import WorkCard from "./WorkCard"

const Work = () => {
  return (
    <div id="work" className="px-4 py-10 flex gap-4 flex-col">
        <h1 className="text-3xl font-semibold">~ Work</h1>
        {/* Destap */}
        {workInfo.map(work => (
          <WorkCard
            key={work.projectName}
            work={work}
          />
        ))}

    </div>
  )
}

export default Work