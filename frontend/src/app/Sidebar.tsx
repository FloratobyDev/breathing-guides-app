import classNames from "classnames";
import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import brandImage from "../asset/breath-image.png";
import { FilterType, TechniqueType } from "../types";

export enum FilterEnum {
  purpose = "purpose",
  difficulty = "difficulty",
  duration = "duration",
  culture = "culture",
}

type Props = {
  techniques: TechniqueType[];
  selectedTechnique: TechniqueType | null;
  setSelectedTechnique: (technique: TechniqueType) => void;
  setFilters: (filter: any) => void;
  filters: FilterType;
  onSubmit?: () => void;
};

function Sidebar({
  techniques,
  selectedTechnique,
  setSelectedTechnique,
  filters,
  setFilters,
  onSubmit,
}: Props) {
  const purposeValues = ["relaxation", "focus"];
  const difficultyValues = ["easy", "medium", "hard"];
  const cultureValues = ["western", "eastern"];
  const durationValues = ["5", "10", "15", "20", "30"];

  function updateFilters(value: string, filterType: FilterEnum) {
    setFilters((prevFilters: FilterType) => {
      if (prevFilters[filterType].includes(value)) {
        return {
          ...prevFilters,
          [filterType]: prevFilters[filterType].filter(
            (purpose) => purpose !== value
          ),
        };
      }
      return {
        ...prevFilters,
        [filterType]: [...prevFilters[filterType], value],
      };
    });
  }

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
          value={filters.name}
          onChange={(e) => {
            setFilters((prevFilter: FilterType) => {
              return {
                ...prevFilter,
                name: e.target.value,
              };
            });
          }}
          className="placeholder:font-kodchasan placeholder:text-background focus:placeholder:opacity-0 outline-none bg-transparent"
        />
      </div>
      <div className="grid grid-cols-2 gap-1 my-1">
        <Dropdown
          label="By Purpose"
          values={purposeValues}
          onSubmit={(value) => {
            updateFilters(value, FilterEnum.purpose);
          }}
        />
        <Dropdown
          label="By Difficulty"
          values={difficultyValues}
          onSubmit={(value) => {
            updateFilters(value, FilterEnum.difficulty);
          }}
        />
        <Dropdown
          label="By Duration"
          values={durationValues}
          onSubmit={(value) => {
            updateFilters(value, FilterEnum.duration);
          }}
        />
        <Dropdown
          label="By Culture"
          values={cultureValues}
          onSubmit={(value) => {
            updateFilters(value, FilterEnum.culture);
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
                  selectedTechnique?.technique_name ===
                  technique.technique_name,
              }
            );
            return (
              <div
                key={technique.technique_name}
                className={techniqueClass}
                onClick={() => {
                  onSubmit && onSubmit();
                  setSelectedTechnique(technique);
                }}
              >
                <p className="font-kodchasan select-none">
                  {technique.technique_name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
