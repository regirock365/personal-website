import Head from "next/head";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <div
        className="bg-cover bg-top"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/projectgroceries/image/upload/v1626779778/regirock365/wp7420571_fg16eo.jpg)",
        }}
      >
        <div className="bg-gradient-to-b from-white/25 to-white backdrop-blur pb-8 lg:pb-20">
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
            <div className="w-32 m-2 h-2"> {/** asdasdasd */}</div>
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
      </div>

      <section className="p-3">
        <h2 className="">Projects</h2>
        <div className="flex my-5">
          <div
            className="w-32 h-24 mr-3 rounded-lg shadow-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_250/v1599364438/Project_Groceries_Card_Image_jjm3gs.png')",
            }}
          />
          <div>
            <h3>Project Groceries</h3>
            <a
              href="https://projectgroceries.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 active:text-blue-800"
            >
              projectgroceries.com
            </a>
            <p className="max-w-xl">
              A website designed for home economics teachers to make the job of
              food ordering easier and more streamlined.
            </p>
          </div>
        </div>

        <div className="flex my-5">
          <div
            className="w-32 h-24 mr-3 rounded-lg shadow-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_250/v1601877136/Convert_Meta_Image_xzs3x2.png')",
            }}
          />
          <div>
            <h3>Convert</h3>
            <a
              href="https://convert.projectgroceries.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 active:text-blue-800"
            >
              convert.projectgroceries.com
            </a>
            <p className="max-w-xl">
              A conversion tool for common ingredient measurements.
            </p>
          </div>
        </div>

        <div className="flex my-5">
          <div
            className="w-32 h-24 mr-3 rounded-lg shadow-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_250/v1608934980/Recipe_Generator_Meta_Image_e8iwvt.png')",
            }}
          />
          <div>
            <h3>Recipe Generator</h3>
            <a
              href="https://recipegenerator.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 active:text-blue-800"
            >
              recipegenerator.ai
            </a>
            <p className="max-w-xl">
              Type in what you're looking for and get an AI generated recipe!
            </p>
          </div>
        </div>

        {/* <div>
          <div
            style="
              background-image: url('https://res.cloudinary.com/projectgroceries/image/upload/c_scale,w_250/v1602072563/Recipe_Search_Meta_Image_ryb6d4.png');
            "
          ></div>
          <div>
            <h3>
              Recipes (<a
                href="https://recipes.projectgroceries.com/"
                target="_blank"
                rel="noopener noreferrer"
                >recipes.projectgroceries.com</a
              >)
            </h3>
            <p>An aggregated search engine for recipes</p>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Home;
