import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-primary text-bg px-6 py-12 text-center text-sm mt-28">
      <a href="#" className="text-2xl font-medium mb-8 block">
        Alupsss | Red Dalunos
      </a>

      <ul className="flex flex-wrap justify-center gap-8 mb-12">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
        </li>
        {/* <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li> */}
        <li>
          <a href="#portfolio" className="hover:underline">
            Portfolio
          </a>
        </li>
        {/* <li>
            <a href="#testimonials" className="hover:underline">
              Testimonials
            </a>
          </li> */}
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-12">
        <a
          href="https://www.facebook.com/Reddalunos"
          target="_blank"
          className="bg-bg text-white p-3 rounded-xl border border-transparent hover:bg-transparent hover:text-bg hover:border-bg transition"
        >
          <IoLogoFacebook />
        </a>
        <a
          href="https://www.instagram.com/akai.kakkoii/"
          target="_blank"
          className="bg-bg text-white p-3 rounded-xl border border-transparent hover:bg-transparent hover:text-bg hover:border-bg transition"
        >
          <IoLogoInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/dalunos-red/"
          target="_blank"
          className="bg-bg text-white p-3 rounded-xl border border-transparent hover:bg-transparent hover:text-bg hover:border-bg transition"
        >
          <IoLogoLinkedin />
        </a>
      </div>

      <div className="text-bg mb-12">
        <small>&copy; Red Dalunos. All rights reserved</small>
      </div>
    </footer>
  );
}
