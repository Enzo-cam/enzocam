
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const ContactRRSS = () => {
  return (
    <div className="flex gap-2 mt-6">
        <Link href="https://www.linkedin.com/in/enzo-camera/" className="flex gap-2 items-center border border-black rounded-md py-2 px-3 font-medium">
            <FaLinkedin />
            Linkedin
        </Link>
        <Link href="https://github.com/Enzo-cam" className="flex gap-2 items-center border border-black rounded-md py-2 px-3 font-medium">
            <FaGithub />
            GitHub
        </Link>
        <Link id="about-me" href="enzo.fcam@gmail.com" className="flex gap-2 items-center border border-black rounded-md py-2 px-3 font-medium">
            <MdEmail />
            Gmail
        </Link>
    </div>
  )
}

export default ContactRRSS