export default function BehanceEmbed() {
  return (
    <section id="portfolio" className="py-20 text-white px-6 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        My Graphic Design Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-center">
        {[
          "225292189",
          "225291827",
          "210102869",
          "210102657",
          "192526473",
          "165918423",
          "195861371",
          "195176219",
          "195173795",
        ].map((id) => (
          <div key={id} className="aspect-video w-full">
            <iframe
              src={`https://www.behance.net/embed/project/${id}?ilo0=1`}
              className="w-full h-full rounded-lg border-none"
              allowFullScreen
              loading="lazy"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
              scrolling="no"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
