import Link from "next/link";

const Contact = () => {
  return (
    <div className="px-4 py-4 flex gap-4 flex-col mb-6">
      <h1 className="text-3xl font-semibold">~ Contact</h1>
      <p>
        Want to get in touch or talk about a project/job?
        <br />
        Write me at{" "}
        <Link
          className="font-semibold text-grisOsc"
          href="https://www.linkedin.com/in/enzo-camera/"
        >
          Linkedin
        </Link>{" "}
        or send me an email at{" "}
        <a
          className="text-grisOsc font-semibold"
          href="mailto:enzo.fcam@gmail.com"
        >
          Gmail
        </a>
      </p>
    </div>
  );
};

export default Contact;
