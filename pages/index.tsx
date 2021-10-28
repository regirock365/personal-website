import Head from "next/head";
import { classNames } from "../lib/util";

const projects = [
  {
    title: "Project Groceries",
    link: "projectgroceries.com",
    address: "https://projectgroceries.com/",
    description:
      "A website designed for home economics teachers to make the job of food ordering easier and more streamlined.",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1599364438/Project_Groceries_Card_Image_jjm3gs.png",
    time: "2015 <=> Present",
  },
  {
    title: "Convert",
    link: "convert.projectgroceries.com",
    address: "https://convert.projectgroceries.com/",
    description: "A conversion tool for common ingredient measurements.",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1601877136/Convert_Meta_Image_xzs3x2.png",
    time: "2020 <=> Present",
  },
  {
    title: "Recipe Generator",
    link: "recipegenerator.ai",
    address: "https://recipegenerator.ai/",
    description:
      "Type in what you're looking for and get an AI generated recipe!",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1608934980/Recipe_Generator_Meta_Image_e8iwvt.png",
    time: "2021 <=> Present",
  },
  {
    title: "Jibu AI",
    link: "regirock365.com",
    address: "https://regirock365.com/",
    description:
      "search engine - oracle - that is really a collection of search engines. Search for books etc.",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/v1626779778/regirock365/wp7420571_fg16eo.jpg",
    time: "Coming Soon...",
    soon: true,
  },
  {
    title: "Recipe Search",
    link: "recipes.projectgroceries.com",
    address: "https://recipes.projectgroceries.com/",
    description: "An aggregated search engine for recipes",
    imageURL:
      "https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_750/v1602072563/Recipe_Search_Meta_Image_ryb6d4.png",
    time: "Coming Soon...",
    soon: true,
  },
];

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <div
        className="bg-cover bg-top absolute"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/projectgroceries/image/upload/v1626779778/regirock365/wp7420571_fg16eo.jpg)",
        }}
      >
        <div className="h-96 w-screen bg-gradient-to-b from-white/25 to-white backdrop-blur" />
      </div>
      <div className="pb-8 sticky">
        <header className="flex items-center">
          <img
            src="https://pbs.twimg.com/profile_images/1291555016155619329/9uGuMPfy_400x400.jpg"
            alt="Picture of me"
            className="w-32 h-32 m-2 rounded-full shadow-lg border-2 border-amber-500"
          />
          <div className="ml-3">
            <h1>regirock365</h1>
            <span className="text-xl">Web Developer</span>
          </div>
        </header>
        <section id="online" className="flex items-center p-3 pt-0">
          <div className="w-32 m-2 h-2" />
          <div>
            <div className="text-xl flex items-center gap-2">
              Github:
              <a
                href="https://github.com/regirock365"
                target="_blank"
                rel="noopener noreferrer"
              >
                regirock365
              </a>
            </div>
            <div className="text-xl flex items-center gap-2">
              Twitter:
              <a
                href="https://twitter.com/regirock365"
                target="_blank"
                rel="noopener noreferrer"
              >
                regirock365
              </a>
            </div>
            <div className="text-xl flex items-center gap-2">
              Unsplash:
              <a
                href="https://unsplash.com/@regirock365"
                target="_blank"
                rel="noopener noreferrer"
              >
                @regirock365
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="p-3 sticky">
        <h2 className="mb-3">Projects</h2>
        <a
          href="https://wormhole.app/YA3kN#PclvzXlW9ceDH-rHqvP8aQ"
          target="_blank"
          rel="noreferrer"
        >
          Secret Link
        </a>
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row mb-10 md:my-5"
          >
            <div
              className={classNames(
                "w-full h-32 md:w-32 md:h-24 mr-3 rounded-lg shadow-lg bg-cover bg-center",
                project.soon ? "animate-pulse cursor-wait" : ""
              )}
              style={{
                backgroundImage: `url('${project.imageURL}')`,
              }}
            />
            <div>
              <h3>{project.title}</h3>
              <div className="flex items-center gap-5">
                <a
                  href={project.address}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 active:text-blue-800"
                >
                  {project.link}
                </a>
                <span className="w-5 border border-gray-400"></span>
                <span className="text-gray-600">{project.time}</span>
              </div>
              <p className="max-w-xl">{project.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
