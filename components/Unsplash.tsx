import { Hand } from "styled-icons/heroicons-solid";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { classNames, shuffle } from "../lib/util";

interface Props {
  photos: Basic[];
}

const Unsplash: React.FC<Props> = ({ photos }) => {
  return (
    <section className="p-3 pb-16 md:p-6 md:pb-16">
      <div className="mb-3 md:mb-6">
        <h2 className="mb-1">Unsplash Favourites</h2>
        <span className="text-gray-600 dark:text-slate-300">
          <Hand className="w-4" /> Scroll horizontally to see all images
        </span>
      </div>
      <div className="pb-3 md:pb-6">
        <div className="relative max-w-7xl overflow-hidden rounded-lg">
          <div className="flex w-full snap-x gap-8 overflow-x-auto">
            <div
              className="absolute left-0 top-0 z-10 h-full bg-black/10 opacity-100 transition"
              style={{ width: "1px", boxShadow: "2px 0px 30px 4px black" }}
            />
            <div
              className="absolute right-0 top-0 z-10 h-full bg-black/10 opacity-100 transition"
              style={{ width: "1px", boxShadow: "-2px 0px 30px 4px black" }}
            />
            {shuffle(photos).map((photo) => (
              <a
                key={photo.id}
                href={photo.links.html}
                target="_blank"
                className="group relative shrink-0 snap-center overflow-x-hidden rounded-lg"
              >
                <img
                  src={photo.urls.small}
                  alt={photo.description}
                  className="h-52 md:h-80"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
