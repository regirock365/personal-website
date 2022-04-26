import {
  Github,
  Instagram,
  Twitter,
  Unsplash as UnplashIcon,
} from "@styled-icons/fa-brands";
import { GetServerSideProps } from "next";
import { createApi, OrderBy } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import Unsplash from "../components/Unsplash";
import Videos from "../components/Videos";
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
    title: "Project Groceries",
    link: "projectgroceries.com",
    address: "https://projectgroceries.com/",
    description:
      "A website designed for home economics teachers to make the job of food ordering easier and more streamlined.",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1599364438/Project_Groceries_Card_Image_jjm3gs.png",
    time: "2015",
  },
  {
    title: "Convert",
    link: "convert.projectgroceries.com",
    address: "https://convert.projectgroceries.com/",
    description: "A conversion tool for common ingredient measurements.",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1601877136/Convert_Meta_Image_xzs3x2.png",
    time: "2020",
  },
  {
    title: "Recipe Generator",
    link: "recipegenerator.ai",
    address: "https://recipegenerator.ai/",
    description:
      "Type in what you're looking for and get an AI generated recipe!",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1608934980/Recipe_Generator_Meta_Image_e8iwvt.png",
    time: "2021",
    soon: false,
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
  // {
  //   title: "Recipe Search",
  //   link: "recipes.projectgroceries.com",
  //   address: "https://recipes.projectgroceries.com/",
  //   description: "An aggregated search engine for recipes",
  //   imageURL:
  //     "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1602072563/Recipe_Search_Meta_Image_ryb6d4.png",
  //   time: "Eventually",
  //   soon: true,
  // },
];

const Home: React.FC<Props> = ({ photos }) => {
  return (
    <>
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
          <div className="ml-3 flex flex-col md:ml-6 md:flex-row">
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

      <section className="sticky p-3 pb-16 md:p-6 md:pb-16">
        <h2 className="mb-3 md:mb-6">My Work</h2>
        <div className="space-y-10 md:space-y-5">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col md:flex-row">
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
                  <a
                    href={project.address}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 active:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 dark:active:text-blue-700"
                  >
                    {project.link}
                  </a>
                  <span className="w-5 border border-gray-400 dark:border-gray-500"></span>
                  <span className="text-gray-600 dark:text-slate-300">
                    {project.time}
                  </span>
                </div>
                <p className="max-w-xl">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Unsplash photos={photos} />

      <Videos />
    </>
  );
};

export default Home;
