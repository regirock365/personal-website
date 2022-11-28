import React from "react";

interface Props {
  amount: number;
}

const GuidingLines: React.FC<Props> = ({ amount }) => {
  return (
    <div className="pointer-events-none absolute flex h-full w-full justify-between">
      {Array.from({ length: amount }).map((_, index) => (
        <div
          key={index}
          className="w-[1px] bg-gradient-linear-to-b from-gray-600/20 to-transparent bg-left-top bg-repeat-y dark:from-slate-300/20"
          style={{
            // backgroundImage:
            //   "linear-gradient(to bottom, rgb(255 255 255 / 20%) 50%, transparent 50%)",
            backgroundSize: "1px 30px",
          }}
        />
      ))}
    </div>
  );
};

export default GuidingLines;
