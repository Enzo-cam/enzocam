
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex gap-2 mt-10">
        <Link href="#" className="flex gap-2 items-center border border-black rounded-md py-2 px-3 font-medium">
            <FaLinkedin />
            Linkedin
        </Link>
        <Link href="#" className="flex gap-2 items-center border border-black rounded-md py-2 px-3 font-medium">
            <FaGithub />
            GitHub
        </Link>
        <Link href="#" className="flex gap-2 items-center border border-black rounded-md py-2 px-3 font-medium">
            <MdEmail />
            Gmail
        </Link>
    </div>
  )
}

export default Contact