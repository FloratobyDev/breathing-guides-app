import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function PageLayout({ children, className }: Props) {
  const divClass = classNames("px-8 py-6 lg:w-[70%] mx-auto", className);
  return <div className={divClass}>{children}</div>;
}

export default PageLayout;
