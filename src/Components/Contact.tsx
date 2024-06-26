import Link from "next/link";

const Contact = () => {
  return (
    <div className="px-4 py-4 flex gap-4 flex-col mb-6 w-full max-w-screen-lg mx-auto lg:px-20">
      <h1 className="text-3xl font-semibold">~ Contact</h1>
      <p>
        Want to get in touch or talk about a project/job?
        <br />
        Write me at{" "}
        <Link
          className="font-semibold text-grisOsc"
          target="_blank"
          href="https://www.linkedin.com/in/enzo-camera/"
        >
          Linkedin
        </Link>{" "}
        or send me an email at{" "}
        <Link
          className="text-grisOsc font-semibold"
          href="mailto:enzo.fcam@gmail.com"
        >
          Gmail
        </Link>
      </p>
    </div>
  );
};

export default Contact;
