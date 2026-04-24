export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-semibold tracking-wide">
          Shoaib Akhtar<span className="text-purple-400">.</span>
        </h1>

        <div className="flex gap-6 text-sm">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}