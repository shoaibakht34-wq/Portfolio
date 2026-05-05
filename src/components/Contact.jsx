import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:shoaibakht34@gmail.com",
      desc: "Professional inquiries, collaborations, and opportunities",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Call",
      href: "tel:+917759812838",
      desc: "Direct communication for urgent opportunities",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/917759812838",
      desc: "Quick networking and project discussions",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shoaib-akhtar-90b286297/",
      desc: "Professional profile, experience, and networking",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/shoaibakht34-wq",
      desc: "Projects, source code, and technical portfolio",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 text-center relative">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">
          Let’s <span className="gradient-text">Connect</span>
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed max-w-3xl mx-auto">
          Open to full-stack development roles, AI engineering opportunities,
          internships, freelance collaborations, and innovative projects where I
          can contribute scalable systems, modern UI, and automation-driven
          solutions.
        </p>
      </div>

      {/* CONTACT GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mt-14">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target={
              contact.label === "LinkedIn" ||
              contact.label === "GitHub" ||
              contact.label === "WhatsApp"
                ? "_blank"
                : "_self"
            }
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-2xl p-6 hover:border-purple-400/40 hover:-translate-y-2 
            hover:shadow-[0_0_30px_#8b5cf6] transition duration-500"
          >
            {/* ICON */}
            <div className="text-3xl text-purple-400 flex justify-center mb-4 group-hover:scale-110 transition">
              {contact.icon}
            </div>

            {/* LABEL */}
            <h3 className="text-lg font-semibold group-hover:text-purple-300 transition">
              {contact.label}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              {contact.desc}
            </p>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14">
        <a
          href="mailto:shoaibakht34@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 
          rounded-xl shadow-[0_0_25px_#8b5cf6] hover:scale-105 transition"
        >
          <FaEnvelope />
          Let’s Work Together
        </a>
      </div>
    </section>
  );
}