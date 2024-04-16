import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { TechniqueType } from "../types";
import TechniqueInfo from "./TechniqueInfo";
import Sidebar from "./Sidebar";
import axios from "axios";
import { FilterType } from "../types";

function Main() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [techniques, setTechniques] = useState<TechniqueType[]>([]);
  const [filteredTechniques, setFilteredTechniques] = useState<TechniqueType[]>(
    []
  );
  const [selectedTechnique, setSelectedTechnique] = useState<TechniqueType>(
    techniques[0]
  );

  const [filters, setFilters] = useState<FilterType>({
    name: "",
    purpose: [],
    difficulty: [],
    duration: [],
    culture: [],
  });

  useEffect(() => {
    axios
      .get("/api/techniques")
      .then((response) => {
        setTechniques(response.data.techniques);
        setFilteredTechniques(response.data.techniques);
        setSelectedTechnique(response.data.techniques[0]);
      })
      .catch((error) => {
        console.error("Error fetching techniques:", error);
      });
  }, []);

  useEffect(() => {
    let temporaryTechniques = [...techniques];

    if (filters.name.length > 0) {
      const filteredTechniques = temporaryTechniques.filter((technique) => {
        return technique.technique_name
          .toLowerCase()
          .includes(filters.name.toLowerCase());
      });
      temporaryTechniques = filteredTechniques;
    }

    if (filters.purpose.length > 0) {
      const filteredTechniques = temporaryTechniques.filter((technique) => {
        return filters.purpose.includes(technique.purpose.toLowerCase());
      });
      temporaryTechniques = filteredTechniques;
    }

    if (filters.difficulty.length > 0) {
      const filteredTechniques = temporaryTechniques.filter((technique) => {
        return filters.difficulty.includes(technique.difficulty);
      });
      temporaryTechniques = filteredTechniques;
    }

    if (filters.duration.length > 0) {
      const filteredTechniques = temporaryTechniques.filter((technique) => {
        return filters.duration.some((value) => {
          const duration = parseInt(value);
          return duration <= parseInt(technique.duration);
        });
      });
      temporaryTechniques = filteredTechniques;
    }

    if (filters.culture.length > 0) {
      const filteredTechniques = temporaryTechniques.filter((technique) => {
        return filters.culture.includes(technique.culture.toLowerCase());
      });
      temporaryTechniques = filteredTechniques;
    }

    setFilteredTechniques(temporaryTechniques);
  }, [filters]);

  function handleOpen() {
    setOpenDrawer(!openDrawer);
  }

  const drawerClass = classNames(
    "fixed right-0 top-0 translate-x-0 h-screen w-[90%] bg-background all-transition duration-200 p-6 flex flex-col",
    {
      "translate-x-full": !openDrawer,
    }
  );

  return (
    <div className=" bg-primary min-h-screen flex">
      <div className="basis-1/5 sticky h-screen top-0 bg-background p-12 hidden lg:flex flex-col">
        <Sidebar
          techniques={filteredTechniques}
          selectedTechnique={selectedTechnique}
          setSelectedTechnique={setSelectedTechnique}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      {selectedTechnique && (
        <TechniqueInfo
          selectedTechnique={selectedTechnique}
          handleOpen={handleOpen}
        />
      )}
      <div className={drawerClass}>
        <svg
          onClick={handleOpen}
          className="self-start cursor-pointer"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.45459"
            width="20.5704"
            height="2.05704"
            rx="1.02852"
            transform="rotate(45 1.45459 0)"
            fill="#FCFEED"
          />
          <rect
            x="16"
            y="1.45459"
            width="20.5704"
            height="2.05704"
            rx="1.02852"
            transform="rotate(135 16 1.45459)"
            fill="#FCFEED"
          />
        </svg>
        <Sidebar
          techniques={filteredTechniques}
          selectedTechnique={selectedTechnique}
          setSelectedTechnique={setSelectedTechnique}
          onSubmit={() => {
            setOpenDrawer(false);
          }}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </div>
  );
}

export default Main;
