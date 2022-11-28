import React from "react";
import { classNames } from "../lib/util";

interface Props {
  showGuidingLines?: boolean;
  mdAmount?: number;
  lgAmount?: number;
  xlAmount?: number;
}

const GuidingLines: React.FC<Props> = ({
  showGuidingLines,
  mdAmount,
  lgAmount,
  xlAmount,
}) => {
  return showGuidingLines ? (
    <div className="pointer-events-none absolute flex h-full w-full justify-between">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={classNames(
            "hidden w-[1px] bg-gradient-linear-to-b from-gray-600/20 to-transparent bg-left-top bg-repeat-y dark:from-slate-300/20",
            mdAmount ? (index < mdAmount ? "md:block" : "md:hidden") : "",
            lgAmount ? (index < lgAmount ? "lg:block" : "lg:hidden") : "",
            xlAmount ? (index < xlAmount ? "xl:block" : "xl:hidden") : ""
          )}
          style={{
            // backgroundImage:
            //   "linear-gradient(to bottom, rgb(255 255 255 / 20%) 50%, transparent 50%)",
            backgroundSize: "1px 30px",
          }}
        />
      ))}
    </div>
  ) : null;
};

export default GuidingLines;
