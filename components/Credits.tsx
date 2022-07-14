import { useEffect, useState } from "react";

interface Props {
  theme: string;
}

const Credits: React.FC<Props> = ({ theme }) => {
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
    <section className="p-3 pb-16 md:p-6 md:pb-16">
      <div className="mb-3 md:mb-6">
        <h2 className="mb-1">Credits</h2>
        {/* <span className="text-gray-600">
          <Hand className="w-4" /> Scroll horizontally to see all images
        </span> */}
      </div>

      <div className="max-w-7xl space-y-4 font-mono">
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
          .
          {isDarkMode ? null : (
            <span className="hidden md:inline">
              {" "}
              Toggle dark mode to see it.
            </span>
          )}
        </p>
      </div>
    </section>
  );
};

export default Credits;
