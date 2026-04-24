import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">

      <h2 className="text-4xl mb-6">Get In Touch</h2>

      <p className="text-gray-400 mb-10">
        I'm open to jobs, internships, freelance work, and collaboration opportunities.
      </p>

      <div className="flex justify-center gap-10 text-2xl">

        {/* Email */}
        <a
          href="mailto:shoaibakht34@gmail.com"
          className="hover:text-purple-400 transition"
        >
          <FaEnvelope />
        </a>

        {/* Phone */}
        <a
          href="tel:+917759812838"
          className="hover:text-purple-400 transition"
        >
          <FaPhoneAlt />
        </a>

      </div>

    </section>
  );
}