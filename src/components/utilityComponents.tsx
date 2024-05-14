import React, {ComponentProps} from "react";
import classNames from "classnames";

export const Container = ({children}: ComponentProps<"div">) => {
  return <div className="">{children}</div>;
};

export const SectionHead = ({
  children,
  white,
}: ComponentProps<"div"> & {white: boolean}) => {
  return (
    <div
      className={classNames("text-lg md:text-5xl font-bold", {
        "text-white": white,
      })}
    >
      {children}
    </div>
  );
};
