import GuidingLines from "./GuidingLines";

interface Props {
  showGuidingLines?: boolean;
}

const site_data = [
  {
    title: "Nat Friedman",
    url: "https://nat.org/",
    thumbnail_url:
      "https://pbs.twimg.com/profile_images/1677873294/image_400x400.jpg",
    description: "An investor, entrepreneur, developer.",
    twitter: "natfriedman",
  },
  {
    title: "Patrick Collison",
    url: "https://patrickcollison.com/",
    thumbnail_url:
      "https://pbs.twimg.com/profile_images/825622525342199809/_iAaSUQf_400x400.jpg",
    description: "Co-founder of Stripe.",
    twitter: "patrickc",
  },
];

const PersonalSites: React.FC<Props> = ({ showGuidingLines }) => {
  return (
    <section className="relative max-w-7xl py-3 pb-16 md:py-6 md:pb-16">
      <GuidingLines
        showGuidingLines={showGuidingLines}
        mdAmount={2}
        lgAmount={3}
      />

      <section className="md:px-2">
        <div className="mb-3 md:mb-6">
          <h2 className="mb-1">Personal Websites I Like</h2>
          <span className="block text-gray-600 dark:text-slate-300">
            If you have any suggestions, please let me know{" "}
            <a
              href="https://twitter.com/regirock365"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              @regirock365
            </a>
            !
          </span>
        </div>
        <div
          className="xl:space-y-0sda flex flex-col gap-3 space-y-4 pb-3 lg:grid"
          style={{ gridTemplateColumns: "repeat(2, minmax(300px, 1fr))" }}
        >
          {site_data.map((site) => (
            <a
              key={site.url}
              href={site.url}
              target="_blank"
              className="flex items-center gap-9 rounded-md p-2 transition hover:bg-gray-200 dark:hover:bg-slate-800 xl:grid xl:gap-3"
              style={{ gridTemplateColumns: "1fr 28rem" }}
            >
              {/* <div className="w-20 aspect-video rounded" style={{  }} /> */}
              <img
                src={site.thumbnail_url}
                alt={site.title}
                className="h-16 w-16 shrink-0 rounded-full sm:h-20 sm:w-20 md:h-32 md:w-32"
              />
              {/* <div className="group relative h-min shrink-0">
                <small className="absolute bottom-0 right-0 mb-2 mr-2 bg-black/75 p-1 text-white">
                  {video.duration}
                </small>
              </div> */}
              <div>
                <h4
                  className="mb-1 text-xl md:mb-0 md:text-2xl xl:mb-2 xl:truncate"
                  title={site.title}
                >
                  {site.title}
                </h4>
                <p className="xl:line-clamp-3">{site.description}</p>

                {/* Button to Twitter, if exists */}
                {site.twitter ? (
                  <button
                    className="mt-2 text-blue-500 hover:underline"
                    onClick={() =>
                      window.open(`https://twitter.com/${site.twitter}`)
                    }
                  >
                    @{site.twitter}
                  </button>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PersonalSites;
