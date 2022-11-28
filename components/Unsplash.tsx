import { useMemo } from "react";
import { Hand } from "styled-icons/heroicons-solid";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { classNames, shuffle } from "../lib/util";
import GuidingLines from "./GuidingLines";

interface Props {
  photos: Basic[];
  showGuidingLines?: boolean;
}

const Unsplash: React.FC<Props> = ({ photos, showGuidingLines }) => {
  const shuffledPhotos = useMemo(() => shuffle(photos), []);

  return (
    <section className="relative max-w-7xl py-3 pb-16 md:py-6 md:pb-16">
      <GuidingLines showGuidingLines={showGuidingLines} mdAmount={3} />

      <div className="mb-3 md:mb-6">
        <h2 className="mb-1">Unsplash Favourites</h2>
        <span className="text-gray-600 dark:text-slate-300">
          <Hand className="w-4" /> Scroll horizontally to see all images
        </span>
      </div>
      <div className="relative pb-3 md:pb-6">
        <div className="absolute top-0 left-1/2 h-[120%] w-0 -translate-y-[10%] -translate-x-0.5 rounded-md border-2 border-solid border-gray-600/80 dark:border-slate-300/80" />

        <div className="relative overflow-hidden rounded-lg">
          <div className="flex w-full snap-x gap-8 overflow-x-auto">
            <div
              className="absolute left-0 top-0 z-10 h-full bg-black/10 opacity-100 transition"
              style={{ width: "1px", boxShadow: "2px 0px 30px 4px black" }}
            />
            <div
              className="absolute right-0 top-0 z-10 h-full bg-black/10 opacity-100 transition"
              style={{ width: "1px", boxShadow: "-2px 0px 30px 4px black" }}
            />

            <div className="z-10 h-52 w-[40%] shrink-0  md:h-80" />
            {shuffledPhotos.map((photo) => (
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
            <div className="z-10 h-52 w-[40%] shrink-0  md:h-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
