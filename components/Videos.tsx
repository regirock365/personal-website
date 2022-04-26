interface Props {}

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
];

const Videos: React.FC<Props> = ({}) => {
  return (
    <section className="p-3 pb-16 md:p-6 md:pb-16">
      <div className="mb-3 md:mb-6">
        <h2 className="mb-1">Videos I Like</h2>
        {/* <span className="text-gray-600">
          <Hand className="w-4" /> Scroll horizontally to see all images
        </span> */}
      </div>
      <div
        className="xl:gridfff xl:space-y-0sda block max-w-7xl gap-3 space-y-4 pb-3"
        style={{ gridTemplateColumns: "repeat(2, minmax(300px, 1fr))" }}
      >
        {video_data.map((video) => (
          <a
            key={video.url}
            href={video.url}
            target="_blank"
            className="flex flex-col gap-3 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-slate-800 md:flex-row"
          >
            {/* <div className="w-20 aspect-video rounded" style={{  }} /> */}
            <div className="group relative shrink-0">
              <img
                src={video.thumbnail_url}
                alt={video.title}
                className="w-full rounded md:w-56"
              />
              {/* <img
                src={video.preview_url}
                alt={video.title}
                className="w-full rounded md:w-56 absolute inset-0 opacity-0 group-hover:opacity-100"
              /> */}
              <small className="absolute bottom-0 right-0 mb-2 mr-2 bg-black/75 p-1 text-white">
                {video.duration}
              </small>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl">{video.title}</h4>
              <p>{video.description}</p>
            </div>
          </a>
        ))}
      </div>
      {/* <div className="relative w-full flex gap-8 pb-3 snap-x overflow-x-auto md:pb-6">
        {shuffle(photos).map((photo) => (
          <a
            key={photo.id}
            href={photo.links.html}
            target="_blank"
            className="relative snap-center shrink-0 rounded-lg overflow-x-hidden group"
          >
            <img
              src={photo.urls.small}
              alt={photo.description}
              className="h-52 md:h-80"
            />
          </a>
        ))}
      </div> */}
    </section>
  );
};

export default Videos;
