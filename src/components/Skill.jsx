import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCanva,
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";

export default function SkillSection() {
  return (
    <section id="skills" className="py-20 text-white px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Skills & Tools
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Frontend Dev Tools */}
        <div>
          <h3 className="text-[#FFD66B] text-xl font-semibold mb-6 text-center">
            Frontend Development
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SiHtml5
              className="text-5xl text-orange-500 transition duration-300 cursor-pointer hover:scale-125"
              title="HTML5"
            />
            <SiWordpress
              className="text-5xl text-white-500 transition duration-300 cursor-pointer hover:scale-125"
              title="Wordpress"
            />
            <SiCss3
              className="text-5xl text-blue-500 duration-300 cursor-pointer hover:scale-125"
              title="CSS3"
            />
            <SiTailwindcss
              className="text-5xl text-teal-400 duration-300 cursor-pointer hover:scale-125"
              title="Tailwind CSS"
            />
            <SiJavascript
              className="text-5xl text-yellow-400 duration-300 cursor-pointer hover:scale-125"
              title="JavaScript"
            />
          </div>
        </div>

        {/* Graphic Design Tools */}
        <div>
          <h3 className="text-[#FFD66B] text-xl font-semibold mb-6 text-center">
            Graphic Design
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SiAdobephotoshop
              className="text-5xl text-blue-300 duration-300 cursor-pointer hover:scale-125"
              title="Photoshop"
            />
            <SiAdobeillustrator
              className="text-5xl text-orange-400 duration-300 cursor-pointer hover:scale-125"
              title="Illustrator"
            />
            <SiCanva
              className="text-5xl text-teal-500 duration-300 cursor-pointer hover:scale-125"
              title="Canva"
            />
            <SiFigma
              className="text-5xl text-pink-500 duration-300 cursor-pointer hover:scale-125"
              title="Figma"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
