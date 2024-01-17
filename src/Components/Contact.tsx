
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <div className="flex gap-2 mt-10">
        <button className="flex gap-2 items-center border border-black rounded-md p-2 font-medium">
            <FaLinkedin />
            Linkedin
        </button>
        <button className="flex gap-2 items-center border border-black rounded-md p-2 font-medium">
            <FaGithub />
            GitHub
        </button>
        <button className="flex gap-2 items-center border border-black rounded-md p-2 font-medium">
            <MdEmail />
            Gmail
        </button>
    </div>
  )
}

export default Contact