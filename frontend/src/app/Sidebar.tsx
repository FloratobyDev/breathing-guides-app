import classNames from "classnames";
import React from "react";
import Dropdown from "../components/Dropdown";
import brandImage from "../asset/breath-image.png";
import { TechniqueType } from "../types";

type Props = {
  techniques: TechniqueType[];
  purposeValues: string[];
  selectedTechnique: TechniqueType | null;
  setSelectedTechnique: (technique: TechniqueType) => void;
  onSubmit?: () => void;
};

function Sidebar({
  techniques,
  purposeValues,
  selectedTechnique,
  setSelectedTechnique,
  onSubmit,
}: Props) {
  return (
    <>
      <img
        src={brandImage}
        alt=""
        className="h-44 w-44 relative top-4 self-center z-20"
      />
      <div className="bg-primary rounded-md text-xs md:text-[16px] flex justify-between px-4 py-2 relative font-semibold">
        <input
          type="text"
          placeholder="Search by name..."
          className="placeholder:font-kodchasan placeholder:text-background focus:placeholder:opacity-0 outline-none bg-transparent"
        />
      </div>
      <div className="grid grid-cols-2 gap-1 my-1">
        <Dropdown
          label="Purpose"
          values={purposeValues}
          onSubmit={(value) => {
            console.log("value", value);
          }}
        />
        <Dropdown
          label="Purpose"
          values={purposeValues}
          onSubmit={(value) => {
            console.log("value", value);
          }}
        />
        <Dropdown
          label="Purpose"
          values={purposeValues}
          onSubmit={(value) => {
            console.log("value", value);
          }}
        />
        <Dropdown
          label="Purpose"
          values={purposeValues}
          onSubmit={(value) => {
            console.log("value", value);
          }}
        />
      </div>
      <div className="bg-primary rounded-md text-xs md:text-[16px] flex flex-col overflow-auto justify-between flex-1">
        <div className="overflow-auto px-2 py-2 ">
          {techniques.map((technique) => {
            const techniqueClass = classNames(
              "p-2 rounded-md cursor-pointer text-background",
              {
                "bg-secondary text-primary":
                  selectedTechnique?.name === technique.name,
              }
            );
            return (
              <div
                key={technique.name}
                className={techniqueClass}
                onClick={() => {
                  onSubmit && onSubmit();
                  setSelectedTechnique(technique);
                }}
              >
                <p className="font-kodchasan select-none">{technique.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
