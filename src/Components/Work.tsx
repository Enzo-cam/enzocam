
import WorkCard from "./WorkCard"


const Work = () => {
  return (
    <div className="px-4 py-10 flex gap-4 flex-col">
        <h1 className="text-3xl font-semibold">Work</h1>
        {/* Destap */}
        <WorkCard />

        {/* Yaguarete */}
        <WorkCard />

        {/* IS */}
        <WorkCard />

    </div>
  )
}

export default Work