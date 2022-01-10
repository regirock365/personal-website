interface Props {}

const video_data = [
  {
    title: "Luke Cage Saves Method Man and Shop Owner Part One",
    url: "https://www.youtube.com/watch?v=x_t6go-947o",
    thumbnail_url:
      "https://i.ytimg.com/vi/x_t6go-947o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8tojMZAZluhcdGXDmk8NKDTfZpA",
    preview_url:
      "https://i.ytimg.com/an_webp/x_t6go-947o/mqdefault_6s.webp?du=3000&sqp=CIjm744G&rs=AOn4CLC8xgUrkDasY83WHv2EB2sc2W14Vw",
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
      <div className="pb-3 space-y-8">
        {video_data.map((video) => (
          <a
            key={video.url}
            href={video.url}
            target="_blank"
            className="flex flex-col gap-3 md:flex-row"
          >
            {/* <div className="w-20 aspect-video rounded" style={{  }} /> */}
            <div className="relative shrink-0">
              <img
                src={video.thumbnail_url}
                alt={video.title}
                className="w-full rounded md:w-56"
              />
              <small className="absolute bottom-0 right-0 mb-2 mr-2 p-1 bg-black/75 text-white">
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
