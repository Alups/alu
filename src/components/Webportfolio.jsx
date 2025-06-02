export default function WebPortfolioEmbed() {
  const websites = [
    {
      title: "SJ Jewelry",
      url: "https://sjjewelry.com.ph",
      preview: "https://sjjewelry.com.ph", // Replace with a screenshot URL if available
    },
    {
      title: "Tech Metal Corp",
      url: "https://techmetalcorp.com",
      preview: "https://techmetalcorp.com", // Replace with a screenshot URL if available
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
            className="w-full bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg flex flex-col items-center"
          >
            <iframe
              src={site.preview}
              title={site.title}
              className="w-full aspect-video rounded-md border-none"
              loading="lazy"
              scrolling="no"
            ></iframe>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-center">
              {site.title}
            </h3>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Live
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
