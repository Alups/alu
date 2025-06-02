import { Component } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

class Nav extends Component {
  constructor() {
    super();
    this.state = { active: "#" };
  }

  render() {
    return (
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-md p-4 px-6 flex gap-4 rounded-full z-50">
        <a
          onClick={() => this.setState({ active: "#" })}
          className={`p-3 rounded-full text-lg ${
            this.state.active === "#"
              ? "bg-primary text-background"
              : "text-gray-300 hover:bg-black/30"
          }`}
          href="#"
        >
          <AiOutlineHome />
        </a>
        <a
          onClick={() => this.setState({ active: "#about" })}
          className={`p-3 rounded-full text-lg ${
            this.state.active === "#about"
              ? "bg-primary text-background"
              : "text-gray-300 hover:bg-black/30"
          }`}
          href="#about"
        >
          <AiOutlineUser />
        </a>
        <a
          onClick={() => this.setState({ active: "#experience" })}
          className={`p-3 rounded-full text-lg ${
            this.state.active === "#experience"
              ? "bg-primary text-background"
              : "text-gray-300 hover:bg-black/30"
          }`}
          href="#experience"
        >
          <BiBook />
        </a>
        <a
          onClick={() => this.setState({ active: "#services" })}
          className={`p-3 rounded-full text-lg ${
            this.state.active === "#services"
              ? "bg-primary text-background"
              : "text-gray-300 hover:bg-black/30"
          }`}
          href="#portfolio"
        >
          <RiServiceLine />
        </a>
        <a
          onClick={() => this.setState({ active: "#contact" })}
          className={`p-3 rounded-full text-lg ${
            this.state.active === "#contact"
              ? "bg-primary text-background"
              : "text-gray-300 hover:bg-black/30"
          }`}
          href="#contact"
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    );
  }
}

export default Nav;
