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
      <h2 className="mb-3">Unsplash Favourites</h2>
      <div className="relative w-full flex gap-8 snap-x overflow-x-auto ...">
        {images.map((image) => (
          <a
            key={image.link}
            href={image.link}
            target="_blank"
            className="snap-center shrink-0 ..."
          >
            <img
              src={image.url}
              alt={image.description}
              className="h-80 rounded-lg"
            />
          </a>
        ))}
        {/* <div className="snap-center ...">
          <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center ...">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center ...">
          <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center ...">
          <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center ...">
          <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center ...">
          <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div> */}
      </div>
      {/* <div className="flex flex-col items-center flex-wrap gap-4 mt-3 xl:flex-row xl:flex-nowrap">
        <div className="flex-1 flex flex-col items-center gap-4 sm:flex-row">
          {images
            .filter((_, i) => i < 2)
            .map((image, i) => (
              <a
                key={i}
                href={image.link}
                target="_blank"
                className="flex-1 rounded-lg overflow-hidden"
              >
                <img src={image.url} alt={image.description} />
              </a>
            ))}
        </div>
        <div className="flex-1 flex flex-col items-center gap-4 sm:flex-row">
          {images
            .filter((_, i) => i >= 2)
            .map((image, i) => (
              <a
                key={i}
                href={image.link}
                target="_blank"
                className="flex-1 rounded-lg overflow-hidden"
              >
                <img src={image.url} alt={image.description} />
              </a>
            ))}
        </div>
      </div> */}
    </section>
  );
};

export default Unsplash;
