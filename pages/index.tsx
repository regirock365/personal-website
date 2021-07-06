import Head from "next/head";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1291555016155619329/9uGuMPfy_400x400.jpg"
          alt="Picture of me"
        />
        <div>
          <h1>Regirock365</h1>
          <span>Web Developer</span>
        </div>
      </header>

      <section id="online">
        <h2>Online Presence</h2>
        <div>
          Github:
          <a
            href="https://github.com/regirock365"
            target="_blank"
            rel="noopener noreferrer"
          >
            regirock365
          </a>
        </div>
        <div>
          Twitter:
          <a
            href="https://twitter.com/regirock365"
            target="_blank"
            rel="noopener noreferrer"
          >
            regirock365
          </a>
        </div>
        <div>
          Unsplash:
          <a
            href="https://unsplash.com/@regirock365"
            target="_blank"
            rel="noopener noreferrer"
          >
            @regirock365
          </a>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div id="projects">
          <div>
            <div
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/projectgroceries/image/upload/v1599364438/Project_Groceries_Card_Image_jjm3gs.png')",
              }}
            ></div>
            <div>
              <h3>
                Project Groceries (
                <a
                  href="https://projectgroceries.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  projectgroceries.com
                </a>
                )
              </h3>
              <p>
                A website designed for home economics teachers to make the job
                of food ordering easier and more streamlined.
              </p>
            </div>
          </div>

          <div>
            <div
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/projectgroceries/image/upload/v1601877136/Convert_Meta_Image_xzs3x2.png')",
              }}
            ></div>
            <div>
              <h3>
                Convert (
                <a
                  href="https://convert.projectgroceries.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  convert.projectgroceries.com
                </a>
                )
              </h3>
              <p>A conversion tool for common ingredient measurements</p>
            </div>
          </div>

          <div>
            <div
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/projectgroceries/image/upload/v1608934980/Recipe_Generator_Meta_Image_e8iwvt.png')",
              }}
            ></div>
            <div>
              <h3>
                Recipe Generator (
                <a
                  href="https://recipegenerator.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  recipegenerator.ai
                </a>
                )
              </h3>
              <p>
                Type in what you're looking for and get an AI generated recipe!
              </p>
            </div>
          </div>

          {/* <div>
          <div
            style="
              background-image: url('https://res.cloudinary.com/projectgroceries/image/upload/v1602072563/Recipe_Search_Meta_Image_ryb6d4.png');
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
        </div>
      </section>
    </>
  );
};

export default Home;
