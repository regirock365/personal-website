import { useEffect, useState } from "react";
import GuidingLines from "./GuidingLines";

interface Props {
  theme: string;
  showGuidingLines?: boolean;
}

const Credits: React.FC<Props> = ({ theme, showGuidingLines }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [theme]);

  return (
    <section className="relative max-w-7xl py-3 pb-16 md:py-6 md:pb-16">
      <GuidingLines showGuidingLines={showGuidingLines} mdAmount={2} />

      <section className="md:px-2">
        <div className="mb-3 md:mb-6">
          <h2 className="mb-1">Credits</h2>
          {/* <span className="text-gray-600">
          <Hand className="w-4" /> Scroll horizontally to see all images
        </span> */}
        </div>

        <div className="space-y-4 font-mono">
          <p>
            Swinging lightbulb{" "}
            <a
              href="https://light.cretu.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline transition hover:text-sky-600"
            >
              inspired by
            </a>{" "}
            <a
              href="https://codepen.io/joebocock/pen/eYZKOjR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline transition hover:text-sky-600"
            >
              Joe Bocock
            </a>
            , July 2022.
            {isDarkMode ? null : (
              <span className="hidden md:inline">
                {" "}
                Toggle dark mode to see it.
              </span>
            )}
          </p>
          <p>
            Guiding lines inspired by{" "}
            <a
              href="https://stripe.com/au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline transition hover:text-sky-600"
            >
              Stripe
            </a>{" "}
            circa{" "}
            <a
              href="https://web.archive.org/web/20221127171935/https://stripe.com/au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline transition hover:text-sky-600"
            >
              November 2022
            </a>
            .
          </p>
        </div>
      </section>
    </section>
  );
};

export default Credits;
