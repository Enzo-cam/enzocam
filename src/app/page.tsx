import AboutMe from "@/Components/AboutMe"
import Contact from "@/Components/Contact"

export default function Home() {
  return (
    <div>
      <AboutMe />

      <div className="justify-center mx-auto">
        <Contact />
      </div>
    </div>
  )
}
