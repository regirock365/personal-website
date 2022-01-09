import { Hand } from "styled-icons/heroicons-solid";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { shuffle } from "../lib/util";

interface Props {
  photos: Basic[];
}

const Unsplash: React.FC<Props> = ({ photos }) => {
  return (
    <section className="p-3 pb-16 md:p-6 md:pb-16">
      <div className="mb-3 md:mb-6">
        <h2 className="mb-1">Unsplash Favourites</h2>
        <span className="text-gray-600">
          <Hand className="w-4" /> Scroll horizontally to see all images
        </span>
      </div>
      <div className="relative w-full flex gap-8 pb-3 snap-x overflow-x-auto md:pb-6">
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
      </div>
    </section>
  );
};

export default Unsplash;
