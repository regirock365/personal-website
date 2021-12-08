interface Props {}

const images = [
  {
    url: "https://images.unsplash.com/photo-1603067091314-f45f8a227d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    link: "https://unsplash.com/photos/paqNLV9YcKg",
    color: "#26260c",
    blur_hash: "LMA,wJRk02oe9Zoe%LafDkkA-:a#",
    description: "green trees near gray concrete pathway",
  },
  {
    url: "https://images.unsplash.com/photo-1609159202005-b421471ed069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    link: "https://unsplash.com/photos/iGzg4Tu_zo0",
    color: "#2673c0",
    blur_hash: "LHBOzuMvIAWB0DV?V@ay^DWBt3j[",
    description: "at the beach, blue sky with white clouds",
  },
  {
    url: "https://images.unsplash.com/photo-1605412073921-8f0dc37427a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    link: "https://unsplash.com/photos/OPDJqZgXJHo",
    color: "#408cf3",
    blur_hash: "LVACQAxwNRWGI$kCs4ocwVj]kEWF",
    description: "green trees under blue sky during daytime",
  },
  {
    url: "https://images.unsplash.com/photo-1603067129777-87e8dd6377cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80",
    link: "https://unsplash.com/photos/4BPmf4dzCzA",
    color: "#26260c",
    blur_hash: "LbDcmnRl9Ga{01oe%Mj[-qWBRij[",
    description: "green trees beside gray concrete road",
  },
];

const Unsplash: React.FC<Props> = () => {
  return (
    <section className="p-3">
      <h2>Unsplash Favourites</h2>
      <div className="flex items-center flex-wrap gap-4 mt-3">
        <div className="flex items-center flex-wrap gap-4">
          {images
            .filter((_, i) => i < 2)
            .map((image, i) => (
              <a
                key={i}
                href={image.link}
                target="_blank"
                className="w-[500px] max-w-full rounded-lg overflow-hidden"
              >
                <img src={image.url} alt="unsplash" />
              </a>
            ))}
        </div>
        <div className="flex items-center flex-wrap gap-4">
          {images
            .filter((_, i) => i >= 2)
            .map((image, i) => (
              <a
                key={i}
                href={image.link}
                target="_blank"
                className="w-[500px] max-w-full rounded-lg overflow-hidden"
              >
                <img src={image.url} alt={image.description} />
              </a>
            ))}
        </div>
      </div>
      <p>Images will be here... soon</p>
    </section>
  );
};

export default Unsplash;
