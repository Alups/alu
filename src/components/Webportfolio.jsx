import bahiaPrev from "./img/bahia.png";
import portPrev from "./img/portfolio.png";
import sjPrev from "./img/sj.png";
import tmcPrev from "./img/tmc.png";

export default function WebPortfolioEmbed() {
  const websites = [
    {
      title: "Hotel Bahia",
      description:
        "Hotel Bahia is a premier hotel located in Subic Bay, offering luxurious accommodations and exceptional service.",
      preview: bahiaPrev,
      url: "https://github.com/Alups/hotel-bahia",
      github: "https://github.com/Alups/hotel-bahia",
    },
    {
      title: "My Web Portfolio",
      description:
        "This is my personal web portfolio showcasing my skills and projects in web development.",
      preview: portPrev,
      url: "https://github.com/Alups/hotel-bahia",
      github: "https://github.com/Alups/alu",
    },
    {
      title: "SJ Jewelry",
      description:
        "Sjjewelry is a jewelry store that offers a wide range of high-quality jewelry products.",
      url: "https://sjjewelry.com.ph",
      preview: sjPrev,
    },
    {
      title: "Tech Metal Corp",
      description:
        "Tech Metal Corp is a company that specializes in providing high-quality Jewelry products and services.",
      url: "https://techmetalcorp.com",
      preview: tmcPrev,
    },
  ];

  return (
    <section className="py-20 text-white px-6 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        My Web Development Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-center">
        {websites.map((site, index) => (
          <div
            key={index}
            className="w-full bg-white/20 backdrop-blur-md rounded-xl p-4 shadow-lg flex flex-col items-center"
          >
            <div className="w-full h-48 md:h-56 overflow-hidden rounded-md mb-4">
              <img
                src={site.preview}
                alt={`${site.title} preview`}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-center mb-2">
              {site.title}
            </h3>

            <p className="text-sm text-gray-300 text-center mb-4">
              {site.description}
            </p>

            <div className="flex gap-4">
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2.5 flex items-center gap-2 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.022c-3.338.726-4.033-1.61-4.033-1.61-.546-1.386-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.834 2.809 1.304 3.495.997.107-.774.418-1.305.76-1.605-2.665-.3-5.467-1.333-5.467-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 6 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.628-5.48 5.922.43.37.814 1.102.814 2.222v3.293c0 .32.216.694.825.576C20.565 22.297 24 17.798 24 12.5 24 5.87 18.63.5 12 .5Z" />
                  </svg>
                </a>
              )}

              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 flex items-center gap-2 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7m0 0v7m0-7L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
