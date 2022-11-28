import { Menu, Transition } from "@headlessui/react";
import {
  Github,
  Instagram,
  Twitter,
  Unsplash as UnplashIcon,
} from "@styled-icons/fa-brands";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import {
  DesktopComputer,
  DotsVertical,
  Moon,
  Sun,
} from "styled-icons/heroicons-solid";
import { createApi, OrderBy } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import Credits from "../components/Credits";
import FlexZone from "../components/FlexZone";
import GuidingLines from "../components/GuidingLines";
import Unsplash from "../components/Unsplash";
import Videos from "../components/Videos";
import useLocalStorageState from "../hooks/useLocalStorageState";
import { classNames } from "../lib/util";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

interface Props {
  photos: Basic[];
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const response = await unsplash.users.getPhotos({
    username: "regirock365",
    orderBy: OrderBy.POPULAR,
    perPage: 6,
  });

  const photos = response.response.results;

  return {
    props: {
      photos,
    },
  };
};

const webPresence = [
  {
    name: "Github",
    url: "https://github.com/regirock365",
    username: "regirock365",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/regirock365",
    username: "regirock365",
    icon: Twitter,
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com/@regirock365",
    username: "regirock365",
    icon: UnplashIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/regirock365",
    username: "regirock365",
    icon: Instagram,
  },
];

const projects = [
  {
    title: "ClassCart",
    link: "class-cart.com",
    address: "https://class-cart.com/",
    description: "Save time while managing food orders.",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/v1655107303/ClassCart_Card_Image_gmi5v9.png",
    time: "2015",
    major: true,
  },
  {
    title: "Convert",
    link: "convert.class-cart.com",
    address: "https://convert.class-cart.com/",
    description: "A conversion tool for common ingredient measurements.",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/v1601877136/Convert_Meta_Image_siit36.png",
    time: "2020",
    major: false,
  },
  {
    title: "Recipe Generator",
    link: "recipegenerator.ai",
    address: "https://recipegenerator.ai/",
    description: "GPT-3 generated recipe ideas!",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1608934980/Recipe_Generator_Meta_Image_e8iwvt.png",
    time: "2021",
    soon: false,
    major: false,
  },
  // {
  //   title: "Jibu",
  //   link: "jibu.vercel.app",
  //   address: "https://jibu.vercel.app/",
  //   description: "A GPT-3 powered answer engine.",
  //   imageURL:
  //     "https://res.cloudinary.com/projectgroceries/image/upload/v1626779778/regirock365/wp7420571_fg16eo.jpg",
  //   time: "Coming Soon...",
  //   soon: true,
  // },
  {
    title: "Recipe Search",
    link: "recipe-search-delta.vercel.app",
    address: "https://recipe-search-delta.vercel.app/",
    description: "Search for recipes across many sites at once.",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1663414068/Recipe_Search_Card_Image_nvyerh.png",
    time: "2022",
    soon: false,
    major: false,
  },
];

const Home: React.FC<Props> = ({ photos }) => {
  const [showLight, setShowLight] = useState(false);
  const [lightOn, setLightOn] = useState(false);
  const [theme, setTheme] = useLocalStorageState("theme", "system");
  const [guidelines, setGuidelines] = useLocalStorageState("guidelines", true);

  useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setShowLight(true);
    } else {
      document.documentElement.classList.remove("dark");
      setShowLight(false);
    }

    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = "light";

    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
  }, [theme]);

  return (
    <>
      <div
        className={classNames(
          "area hidden transition lg:block",
          showLight ? "" : "hide"
        )}
      >
        <div className="wire"></div>
        <div className="fixture">
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
        </div>
        <div
          className={classNames(
            "bulb cursor-pointer transition",
            showLight && lightOn ? "light" : ""
          )}
          onClick={() => {
            setLightOn(!lightOn);
          }}
        >
          <div className="zig"></div>
          <div className="zig"></div>
          <div className="zig"></div>
        </div>
      </div>

      <div className="fixed top-2 right-2 z-20 flex gap-2 sm:top-3 sm:right-3 md:top-8 md:right-8">
        <button
          className={classNames(
            "rounded-md bg-gray-100/50 p-2 text-gray-800 transition hover:bg-gray-100 dark:bg-slate-800/50 dark:text-slate-700 dark:hover:bg-slate-800/75",
            guidelines ? "opacity-100" : "opacity-25"
          )}
          onClick={() => {
            setGuidelines(!guidelines);
          }}
        >
          <DotsVertical className="w-6 text-gray-800 dark:text-slate-100" />
        </button>

        <Menu>
          <Menu.Button className="rounded-md bg-gray-100/50 p-2 text-gray-900 transition hover:bg-gray-100 dark:bg-slate-800/50 dark:text-slate-700 dark:hover:bg-slate-800/75">
            <Sun className="w-6 text-gray-800 dark:text-slate-100" />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute top-2 right-0 flex w-max max-w-md flex-col gap-1 rounded-md bg-gray-100 p-2 text-black dark:bg-slate-800 dark:text-slate-50">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      "flex items-center gap-2 rounded-md p-2 md:pr-12",
                      active ? "bg-gray-200 dark:bg-slate-700" : "",
                      theme === "light" ? "text-sky-500" : ""
                    )}
                    onClick={() => {
                      setTheme("light");
                    }}
                  >
                    <Sun
                      className={classNames(
                        "w-6 text-gray-500 dark:text-slate-400",
                        theme === "light"
                          ? "text-sky-600 dark:text-sky-600"
                          : ""
                      )}
                    />
                    Light
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      "flex items-center gap-2 rounded-md p-2 md:pr-12",
                      active ? "bg-gray-200 dark:bg-slate-700" : "",
                      theme === "dark" ? "text-sky-500" : ""
                    )}
                    onClick={() => {
                      setTheme("dark");
                    }}
                  >
                    <Moon
                      className={classNames(
                        "w-6 text-gray-500 dark:text-slate-400",
                        theme === "dark" ? "text-sky-600 dark:text-sky-600" : ""
                      )}
                    />
                    Dark
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      "flex items-center gap-2 rounded-md p-2 md:pr-12",
                      active ? "bg-gray-200 dark:bg-slate-700" : "",
                      theme === "system" ? "text-sky-500" : ""
                    )}
                    onClick={() => {
                      setTheme("system");
                    }}
                  >
                    <DesktopComputer
                      className={classNames(
                        "w-6 text-gray-500 dark:text-slate-400",
                        theme === "system"
                          ? "text-sky-600 dark:text-sky-600"
                          : ""
                      )}
                    />
                    System
                  </button>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ active }) => (
                  <a
                    // className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                <span className="opacity-75">
                  Invite a friend (coming soon!)
                </span>
              </Menu.Item> */}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div
        className="absolute bg-cover bg-top"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/projectgroceries/image/upload/v1626779778/regirock365/wp7420571_fg16eo.jpg)",
        }}
      >
        <div className="h-[500px] w-screen bg-gradient-to-b from-white/25 to-white backdrop-blur dark:from-slate-900/25 dark:to-slate-900" />
      </div>
      <div className="sticky pb-16">
        <header className="flex items-center">
          <div className="to m-3 rounded-full bg-red-500 bg-gradient-to-tr from-yellow-500 via-amber-500 p-1 md:m-6">
            <img
              src="https://pbs.twimg.com/profile_images/1291555016155619329/9uGuMPfy_400x400.jpg"
              alt="Picture of me"
              className="h-24 w-24 rounded-full shadow-lg md:h-32 md:w-32"
            />
          </div>
          <div className="ml-3 md:ml-6">
            <h1>regirock365</h1>
            <span className="text-xl text-gray-800 dark:text-slate-100">
              Web Developer
            </span>
          </div>
        </header>
        <section id="online" className="flex items-center px-3 pt-0 md:px-0">
          <div className="m-3 hidden h-4 w-24 p-1 md:m-6 md:block md:w-32" />
          <div className="ml-0 flex flex-wrap md:ml-6 md:flex-row">
            {webPresence.map((presence) => (
              <a
                key={presence.name}
                href={presence.url}
                target="_blank"
                rel="noopener noreferrer"
                className="m-1 flex items-center gap-2 rounded-lg bg-white/25 p-2 text-xl transition hover:bg-white/50 dark:bg-white/40 dark:text-slate-900 dark:hover:bg-white/60"
              >
                <presence.icon className="mr-1 w-5" /> {presence.username}
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="px-3 md:px-6">
        <section className="relative max-w-7xl py-3 pb-16 md:py-6 md:pb-16">
          <GuidingLines
            showGuidingLines={guidelines}
            mdAmount={2}
            lgAmount={3}
          />

          <section className="md:px-2">
            <h2 className="mb-3 md:mb-6">My Work</h2>
            <div className="grid grid-cols-1 items-stretch gap-10 sm:grid-cols-2 md:grid-cols-1 md:gap-5 lg:grid-cols-2">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.address}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classNames(
                    "flex flex-shrink-0 flex-grow flex-col rounded-lg p-2 transition hover:bg-gray-200/75 dark:hover:bg-slate-800/75 md:flex-row",
                    project.major
                      ? "border-2 border-amber-500/50 hover:border-amber-500"
                      : ""
                  )}
                >
                  <div
                    className={classNames(
                      "mr-3 h-32 w-full rounded-lg bg-cover bg-center shadow-lg md:mr-6 md:h-24 md:w-32",
                      project.soon
                        ? "to animate-pulse cursor-wait bg-red-500 bg-gradient-to-tr from-yellow-500 via-amber-500"
                        : ""
                    )}
                    style={
                      project.soon
                        ? {}
                        : {
                            backgroundImage: `url('${project.imageURL}')`,
                          }
                    }
                  />
                  <div>
                    <h3>{project.title}</h3>
                    <div className="flex items-center gap-5">
                      <span className="text-blue-500 hover:text-blue-600 active:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 dark:active:text-blue-700">
                        {project.link}
                      </span>
                      <span className="w-5 border border-gray-400 dark:border-gray-500"></span>
                      <span className="text-gray-600 dark:text-slate-300">
                        {project.time}
                      </span>
                    </div>
                    <p className="max-w-xl">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </section>

        <Unsplash photos={photos} key="og" showGuidingLines={guidelines} />

        <Videos showGuidingLines={guidelines} />

        {/* <FlexZone showGuidingLines={guidelines} /> */}

        <Credits theme={theme} showGuidingLines={guidelines} />
      </div>
    </>
  );
};

export default Home;
