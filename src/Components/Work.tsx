import { workInfo } from "../../utils/workInfo"
import WorkCard from "./WorkCard"

const Work = () => {
  return (
    <div id="work" className="px-4 py-10 w-full max-w-screen-lg mx-auto lg:px-20">
      <h1 className="text-3xl font-semibold mb-4">~ Work</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {workInfo.map(work => (
          <WorkCard
            key={work.projectName}
            work={work}
          />
        ))}
      </div>
    </div>
  )
}

export default Work
