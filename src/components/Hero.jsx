// import { motion } from "framer-motion";
// import DevImage from "./img/DevImage.jpg";
// import WebImage from "./img/WebImage.jpg";
import WebImage from "./img/WebImage.png";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="w-full h-screen  text-white flex items-center justify-center px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center w-full max-w-7xl justify-between gap-10">
          {/* Left - Text Content */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-400 mb-2">Hello, My name is</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
              Red Dalunos
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFD66B] mb-4">
              Web & Graphic Designer
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Creativity has always been my way of expressing my self, I love to
              think an ideas as a kid and designing it in my head. I am a
              Graphic Designer and Website Developer, I have a 2 years of
              experience in Graphic Designing while I am an Entry Level In Web
              Developing.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv/cv.pdf"; // path to your file
                  link.download = "Red Dalunos.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-6 py-2 bg-white text-black rounded-sm hover:bg-gray-200 transition cursor-pointer"
              >
                Download CV
              </button>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={WebImage}
              alt="Lorem "
              className="w-full rounded-2xl transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="py-20 text-white px-6 md:px-20 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-justify text-gray-300 max-w-3xl mx-auto"
        >
          My specialization in Designing is creating a social media static posts
          and create an appealing Ad posts. As a Web Developer I am Handling a
          website right now which is Sjjewelry.com.ph. I love businesses bring
          their ideas to life, whether it's through a scroll-stopping Instagram,
          Facebook post of a clean, functional eCommerce website. I believe good
          design isn't Just beautiful, it's throughful and strategic. I love to
          explore things and learning new skills and I am always open for
          improvement. Let's build something meaningful together.
        </motion.p>
      </section>

      <section id="experience" className="py-20 text-white px-6 md:px-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-[#FFD66B] text-xl font-semibold mb-4">
              EDUCATION
            </h3>
            <ul className="space-y-6">
              <li className="bg-white/5 p-6 rounded-lg border-l-4 border-[#FFD66B] hover:scale-[1.02] transition">
                <p className="text-sm text-[#FFD66B] font-semibold">
                  Gordon College 2019 - 2024
                </p>
                <h4 className="text-lg font-bold">
                  Bachelor of Science in Information Technology
                </h4>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFD66B] text-xl font-semibold mb-4">
              EXPERIENCE
            </h3>
            <ul className="space-y-6">
              <li className="bg-white/5 p-6 rounded-lg border-l-4 border-[#FFD66B] hover:scale-[1.02] transition">
                <p className="text-sm text-[#FFD66B] font-semibold">
                  S&J Jewelry | March 2025 - Present
                </p>
                <h4 className="text-lg font-bold">
                  Web Developer/Graphic Designer
                </h4>
                <p className="text-sm text-gray-300">
                  I build an eCommerce website for S&J Jewelry and makes a
                  jewelry catalog for the customers.
                </p>
              </li>
              <li className="bg-white/5 p-6 rounded-lg border-l-4 border-[#FFD66B] hover:scale-[1.02] transition">
                <p className="text-sm text-[#FFD66B] font-semibold">
                  Ordermo.ph | May 2024 - February 2025
                </p>
                <h4 className="text-lg font-bold">Graphic Artist</h4>
                <p className="text-sm text-gray-300">
                  Created impactful static ads, social media banners, print
                  materials, merchant ad creatives, and engaging TikTok reels
                  for OrderMo PH, helping enhance their brand visibility and
                  customer engagement across platforms.
                </p>
              </li>
              <li className="bg-white/5 p-6 rounded-lg border-l-4 border-[#FFD66B] hover:scale-[1.02] transition">
                <p className="text-sm text-[#FFD66B] font-semibold">
                  Subic Bay Marine Exploratorium Inc. | December 2023 - March
                  2024
                </p>
                <h4 className="text-lg font-bold">Graphic Artist</h4>
                <p className="text-sm text-gray-300">
                  Produced social media ads, captured live performance photos,
                  filmed engaging video content for social media reels, and
                  designed print advertisements for Subic Bay Marine
                  Exploratorium Inc. supporting both their digital and on-ground
                  marketing efforts.
                </p>
              </li>
              <li className="bg-white/5 p-6 rounded-lg border-l-4 border-[#FFD66B] hover:scale-[1.02] transition">
                <p className="text-sm text-[#FFD66B] font-semibold">
                  Hotel Bahia | on call Freelance
                </p>
                <h4 className="text-lg font-bold">
                  Graphic Artist/Web Developer
                </h4>
                <p className="text-sm text-gray-300">
                  Designed social media posters, crafted print materials, and
                  developed web design layouts for Hotel Bahia, contributing to
                  their cohesive and visually appealing brand presence both
                  online and offline.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default Hero;
