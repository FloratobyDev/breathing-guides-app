import React from "react";
import Instructions from "../components/Instructions";
import Label from "../components/Label";
import Wind from "../svgs/Wind";
import HamburgerLogo from "../svgs/HamburgerLogo";
import { TechniqueType } from "../types";

type Props = {
  selectedTechnique: TechniqueType;
  handleOpen: () => void;
};

function TechniqueInfo({
  selectedTechnique,
  handleOpen,
}: Props) {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between px-4 py-3 border-b border-background lg:hidden">
        <div className="flex gap-x-2 items-center">
          <Wind isBlack height={24} width={24} />
          <p className="font-koulen text-xl">Breathing Guides</p>
        </div>
        <HamburgerLogo onClick={handleOpen} />
      </div>
      <div className="p-6 md:py-12 flex flex-col gap-y-4 md:mx-auto md:w-[80%]">
        <Label label="NAME">
          <p className="text-xs md:text-lg font-kodchasan text-background">
            {selectedTechnique.technique_name}
          </p>
        </Label>
        <Label label="DESCRIPTION">
          <p className="text-xs md:text-lg font-kodchasan text-background">
            Active Inhalation and Passive Exhalation is a breathing technique
            that emphasizes a strong and deliberate inhalation followed by a
            relaxed and effortless exhalation.
          </p>
        </Label>
        <Label label="HOW TO PERFORM">
          <p className="text-xs md:text-lg font-kodchasan text-background">
            N/A
          </p>
        </Label>
        <Label label="INSTRUCTIONS">
          <Instructions instructions={selectedTechnique.instructions} />
        </Label>
      </div>
    </div>
  );
}

export default TechniqueInfo;
