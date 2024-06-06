'use client'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactRRSS = () => {
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('enzo.fcam@gmail.com')
      .then(() => {
        toast.success('Email copiado al portapapeles');
      })
      .catch(err => {
        toast.error('Error al copiar el email');
      });
  }

  return (
    <div className="flex gap-2 mt-6">
      <Link href="https://www.linkedin.com/in/enzo-camera/" target='_blank' className="flex gap-2 items-center border border-black rounded-md py-2 px-3 font-medium">
        <FaLinkedin />
        Linkedin
      </Link>
      <Link href="https://github.com/Enzo-cam" target='_blank' className="flex gap-2 items-center border border-black rounded-md py-2 px-3 font-medium">
        <FaGithub />
        GitHub
      </Link>
      <button onClick={handleCopyEmail} className="flex gap-2 items-center border border-black rounded-md py-2 px-3 font-medium cursor-pointer">
        <MdEmail />
        Gmail
      </button>
      <ToastContainer position="bottom-right" autoClose={1000} hideProgressBar closeOnClick pauseOnHover />
    </div>
  )
}

export default ContactRRSS
