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
  {
    title: "Andrej Karpathy",
    url: "https://karpathy.ai/",
    thumbnail_url: "https://karpathy.ai/assets/me_new.jpg",
    description: "I like to train deep neural nets on large datasets 🧠🤖💥",
    twitter: "karpathy",
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
            If you have a suggestion, let me know{" "}
            <a
              href="https://twitter.com/regirock365"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              @regirock365
            </a>
          </span>
        </div>
        <div
          className="flex flex-col gap-3 space-y-4 pb-3 lg:grid lg:space-y-0"
          style={{ gridTemplateColumns: "repeat(2, minmax(300px, 1fr))" }}
        >
          {site_data.map((site) => (
            <a
              key={site.url}
              href={site.url}
              target="_blank"
              className="flex items-center gap-9 rounded-md border-2 border-slate-300/25 p-2 transition hover:border-slate-300 hover:bg-gray-200 dark:hover:bg-slate-800 xl:gap-8"
              style={{ gridTemplateColumns: "1fr 28rem" }}
            >
              {/* <div className="w-20 aspect-video rounded" style={{  }} /> */}
              <img
                src={site.thumbnail_url}
                alt={site.title}
                className="h-16 w-16 shrink-0 rounded-full sm:h-20 sm:w-20 md:h-16 md:w-16"
              />
              {/* <div className="group relative h-min shrink-0">
                <small className="absolute bottom-0 right-0 mb-2 mr-2 bg-black/75 p-1 text-white">
                  {video.duration}
                </small>
              </div> */}
              <div>
                <div className="mb-1 flex flex-col items-start gap-2 sm:flex-row sm:items-center md:mb-0">
                  <h4 className="text-xl md:text-2xl" title={site.title}>
                    {site.title}
                  </h4>
                  <span className="hidden w-5 border border-gray-400 dark:border-gray-500 sm:inline-block" />
                  <span className="text-blue-500 hover:text-blue-600 active:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 dark:active:text-blue-700">
                    {site.url.replace(/https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </div>
                <p className="xl:line-clamp-3">
                  {site.description} {/* Button to Twitter, if exists */}
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
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PersonalSites;
