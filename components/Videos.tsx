import GuidingLines from "./GuidingLines";

interface Props {
  showGuidingLines?: boolean;
}

const video_data = [
  {
    title: "Hexagons are the Bestagons",
    url: "https://www.youtube.com/watch?v=thOifuHs6eY",
    thumbnail_url:
      "https://i.ytimg.com/vi/thOifuHs6eY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3lLjyVDtpjCDYtXno120GH-pFfQ",
    preview_url:
      "https://i.ytimg.com/an_webp/thOifuHs6eY/mqdefault_6s.webp?du=3000&sqp=CKCM3pIG&rs=AOn4CLB-0KhI6sYeWA-tWr924Rc1kfMdbQ",
    duration: "9:27",
    description: "",
  },
  {
    title: "Luke Cage Saves Method Man and Shop Owner Part One",
    url: "https://www.youtube.com/watch?v=x_t6go-947o",
    thumbnail_url:
      "https://i.ytimg.com/vi/x_t6go-947o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8tojMZAZluhcdGXDmk8NKDTfZpA",
    preview_url:
      "https://i.ytimg.com/an_webp/x_t6go-947o/mqdefault_6s.webp?du=3000&sqp=CO6G3pIG&rs=AOn4CLA1roQjOV9sj0lxp_EOzQzBKSLfbA",
    duration: "2:26",
    description:
      "Luke Cage Saves Method Man and  Shop Owner Part One.\nJust love Luke Cage and a huge fan of Method Man",
  },
  {
    title: "nature must wait",
    url: "https://www.youtube.com/watch?v=eVbXeg98l2k",
    thumbnail_url:
      "https://i.ytimg.com/vi/eVbXeg98l2k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA87PM5QAQZZV4Hqw63Nll0jo2UZw",
    preview_url:
      "https://i.ytimg.com/vi/eVbXeg98l2k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA87PM5QAQZZV4Hqw63Nll0jo2UZw",
    duration: "0:39",
    description: "gilmore girls, 5x12",
  },
  {
    title: "Richard and Jared Screaming Excited (Silicon Valley)",
    url: "https://www.youtube.com/watch?v=gQV8MKGo4CM",
    thumbnail_url:
      "https://i.ytimg.com/vi/gQV8MKGo4CM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2i77eIHVyqKylAbbzcdnjWRz4XQ",
    preview_url:
      "https://i.ytimg.com/an_webp/gQV8MKGo4CM/mqdefault_6s.webp?du=3000&sqp=CJmT3pIG&rs=AOn4CLDw_dmPkRDnLfpldj5AZKG1Rraxnw",
    duration: "0:53",
    description:
      "Richard and Jared so pumped up and unleash their inner enthusiastic beast! (Silicon Valley) 😂",
  },
  {
    title: `Martin Freeman and Matthew Horne - the "sigh-off"`,
    url: "https://www.youtube.com/watch?v=4zarpQbhPr0",
    thumbnail_url:
      "https://i.ytimg.com/vi/4zarpQbhPr0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCX22_VgOaWOYJsSjRluAnijUXzQ",
    preview_url:
      "https://i.ytimg.com/an_webp/4zarpQbhPr0/mqdefault_6s.webp?du=3000&sqp=COLe3ZIG&rs=AOn4CLCge6n5Chbrz5za7UPbBJ_FfA-P0w",
    duration: "0:47",
    description: "Two TV comedy legends head to head",
  },
  {
    title: "The Riddle That Seems Impossible Even If You Know The Answer",
    url: "https://www.youtube.com/watch?v=iSNsgj1OCLA",
    thumbnail_url:
      "https://i.ytimg.com/vi/iSNsgj1OCLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTCzTes5nhCdf5ZeFE15z1eydO4Q",
    preview_url:
      "https://i.ytimg.com/an_webp/iSNsgj1OCLA/mqdefault_6s.webp?du=3000&sqp=CIDHuZYG&rs=AOn4CLB9VEAzWVDZX-ZV4GnQmwfG3k2o5Q",
    duration: "17:45",
    description:
      "The 100 Prisoners Riddle feels completely impossible even once you know the answer.",
  },
  {
    title: "Breaking Bad Season 2: Episode 7: Mexican song",
    url: "https://www.youtube.com/watch?v=_Stn0dsEayA",
    thumbnail_url:
      "https://i.ytimg.com/vi/_Stn0dsEayA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQGasl1v7V2zkJ1dxlf4fjZD1bTw",
    preview_url:
      "https://i.ytimg.com/an_webp/_Stn0dsEayA/mqdefault_6s.webp?du=3000&sqp=CMCFspcG&rs=AOn4CLBtz5LH4iPv0zvFjWF_o7hvKXO0LQ",
    duration: "3:22",
    description:
      'What’s happening in this Breaking Bad clip?\nThe episode opens with the band Los Cuates de Sinaloa performing a song called "Negro y Azul" ("Black and Blue"), which is about how a gringo boss named Heisenberg is disrespecting the Mexican drug cartel by cornering the Albuquerque market with high-quality blue crystal methamphetamine.',
  },
  {
    title: 'Jay Z "God Did" Reaction + Breakdown With Young Guru',
    url: "https://www.youtube.com/watch?v=NEadoEGgcHk",
    thumbnail_url:
      "https://i.ytimg.com/vi/NEadoEGgcHk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxnPJ3ntWmF0lM4rGuX4-cdLTURw",
    preview_url:
      "https://i.ytimg.com/an_webp/NEadoEGgcHk/mqdefault_6s.webp?du=3000&sqp=CKanlpkG&rs=AOn4CLCs8M0Q1_Qo3VKyWUEY2hZwBJdGuw",
    duration: "39:30",
    description: "",
  },
];

const Videos: React.FC<Props> = ({ showGuidingLines }) => {
  return (
    <section className="relative max-w-7xl py-3 pb-16 md:py-6 md:pb-16">
      <GuidingLines
        showGuidingLines={showGuidingLines}
        mdAmount={2}
        xlAmount={3}
      />

      <section className="md:px-2">
        <div className="mb-3 md:mb-6">
          <h2 className="mb-1">Videos I Like</h2>
          <span className="text-gray-600 dark:text-slate-300">
            In no particular order
          </span>
        </div>
        <div
          className="block gap-3 space-y-4 pb-3 xl:grid xl:space-y-0"
          style={{ gridTemplateColumns: "repeat(2, minmax(300px, 1fr))" }}
        >
          {video_data.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              className="block gap-3 rounded-md p-2 transition hover:bg-gray-200 dark:hover:bg-slate-800 sm:flex sm:flex-row xl:grid"
              style={{ gridTemplateColumns: "1fr 24rem" }}
            >
              {/* <div className="w-20 aspect-video rounded" style={{  }} /> */}
              <div className="shape-around group relative h-min shrink-0">
                <img
                  src={video.thumbnail_url}
                  alt={video.title}
                  className="sms:w-32 w-32 rounded sm:w-40 md:w-56"
                />
                {/* <img
                src={video.preview_url}
                alt={video.title}
                className="w-full rounded sm:w-56 absolute inset-0 opacity-0 group-hover:opacity-100"
              /> */}
                <small className="absolute bottom-0 right-0 mb-2 mr-2 bg-black/75 p-1 text-white">
                  {video.duration}
                </small>
              </div>
              <div className="min-h-[4rem]">
                <h4
                  className="mb-1 text-xl sm:mb-0 sm:text-2xl xl:mb-2 xl:truncate"
                  title={video.title}
                >
                  {video.title}
                </h4>
                <p className="xl:line-clamp-3">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Videos;
