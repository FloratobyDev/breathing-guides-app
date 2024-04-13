import React from "react";

type Props = {
  label: string;
  description: string;
  svgComponent: React.ReactNode;
};

function Feature({ label, description, svgComponent }: Props) {
  return (
    <div className="flex flex-col lg:items-start items-center gap-x-4 w-[80%] mx-auto lg:basis-1/3 gap-y-2">
      <div>{svgComponent}</div>
      <div className="flex flex-col lg:items-start items-center">
        <h3 className="text-2xl lg:text-3xl font-koulen">{label}</h3>
        <p className="font-kodchasan text-sm text-center lg:text-start lg:w-[70%]">{description}</p>
      </div>
    </div>
  );
}

export default Feature;
