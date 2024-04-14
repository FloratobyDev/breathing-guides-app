import React, { useState } from "react";
import Brand from "../components/Brand";
import HamburgerIcon from "../svgs/HamburgerLogo";
import Wind from "../svgs/Wind";
import Label from "../components/Label";
import Instructions from "../components/Instructions";
import classNames from "classnames";
import brandImage from "../asset/breath-image.png";
import { TechniqueType } from "../types";
import TechniqueInfo from "./TechniqueInfo";

function Main() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [techniques, setTechniques] = useState<TechniqueType[]>([
    {
      name: "Active Inhalation and Passive Exhalation",
      description:
        "A breathing technique that emphasizes a strong and deliberate inhalation followed by a relaxed and effortless exhalation.",
      instructions: [
        {
          name: "Find a Comfortable Position",
          description:
            "Sit or lie down comfortably with a straight spine and relaxed shoulders.",
        },
        {
          name: "Focus on Active Inhalation",
          description:
            "Take a slow, deep breath in through your nose, actively filling your lungs with air.",
        },
        {
          name: "Expand Your Chest",
          description:
            "Allow your chest and rib cage to fully expand as you continue to inhale.",
        },
        {
          name: "Pause Briefly at the Top",
          description:
            "Hold the breath briefly at the top of your inhalation without straining.",
        },
        {
          name: "Relax and Release",
          description:
            "Allow the exhalation to happen naturally and passively, without any effort.",
        },
        {
          name: "Observe Sensations",
          description:
            "Notice the contrast between the effort of inhaling and the ease of exhaling.",
        },
        {
          name: "Repeat",
          description:
            "Practice for several rounds, gradually increasing the length of inhalation and exhalation.",
        },
        {
          name: "Practice Regularly",
          description:
            "Set aside a few minutes each day to practice this technique for relaxation and awareness.",
        },
      ],
    },
    {
      name: "Box Breathing",
      description:
        "A technique used to promote relaxation and reduce stress by regulating breathing rhythm.",
      instructions: [
        {
          name: "Find a Quiet Place",
          description:
            "Sit or lie down comfortably in a quiet environment, with your spine straight and shoulders relaxed.",
        },
        {
          name: "Inhale",
          description:
            "Inhale deeply through your nose for a count of four seconds, focusing on filling your lungs with air.",
        },
        {
          name: "Hold",
          description:
            "Hold your breath for a count of four seconds, maintaining a sense of calm and relaxation.",
        },
        {
          name: "Exhale",
          description:
            "Exhale slowly and completely through your mouth for a count of four seconds, releasing any tension or stress.",
        },
        {
          name: "Hold Again",
          description:
            "Hold your breath for another count of four seconds before beginning the next cycle of inhalation.",
        },
        {
          name: "Repeat",
          description:
            "Continue this pattern of breathing for several minutes, allowing yourself to relax deeply with each breath.",
        },
      ],
    },
    {
      name: "Deep Breathing",
      description:
        "A technique to increase oxygen flow and promote relaxation by focusing on deep, slow breaths.",
      instructions: [
        {
          name: "Find a Comfortable Position",
          description:
            "Sit or lie down in a comfortable position, with your spine straight and shoulders relaxed.",
        },
        {
          name: "Inhale",
          description:
            "Inhale deeply through your nose, allowing your abdomen to expand as you fill your lungs with air.",
        },
        {
          name: "Hold",
          description:
            "Hold your breath for a few seconds, feeling the oxygen circulate throughout your body.",
        },
        {
          name: "Exhale",
          description:
            "Exhale slowly and completely through your mouth, allowing your abdomen to contract as you release the air.",
        },
        {
          name: "Repeat",
          description:
            "Continue this deep breathing pattern for several minutes, focusing on the sensation of relaxation with each breath.",
        },
      ],
    },
    {
      name: "Alternate Nostril Breathing (Nadi Shodhana)",
      description:
        "A yogic breathing technique that aims to balance the flow of energy in the body by alternating nostrils.",
      instructions: [
        {
          name: "Find a Comfortable Position",
          description:
            "Sit in a comfortable position with your spine straight and shoulders relaxed.",
        },
        {
          name: "Prepare",
          description:
            "Place your left hand on your left knee with your palm facing upward, or adopt a mudra (hand gesture) if preferred. Bring your right hand up towards your face.",
        },
        {
          name: "Close the Right Nostril",
          description:
            "Use your right thumb to gently close your right nostril.",
        },
        {
          name: "Inhale through the Left Nostril",
          description:
            "Inhale deeply through your left nostril, filling your lungs with air.",
        },
        {
          name: "Switch Sides",
          description:
            "Release your right nostril and use your right ring finger or pinky to gently close your left nostril.",
        },
        {
          name: "Exhale through the Right Nostril",
          description:
            "Exhale completely through your right nostril, emptying your lungs of air.",
        },
        {
          name: "Repeat",
          description:
            "Continue alternating between inhaling through the left nostril and exhaling through the right nostril for several rounds, maintaining a smooth and steady breath.",
        },
      ],
    },
    {
      name: "4-7-8 Breathing",
      description:
        "A technique that involves inhaling for a count of 4, holding the breath for a count of 7, and exhaling for a count of 8, believed to promote relaxation.",
      instructions: [
        {
          name: "Find a Quiet Place",
          description:
            "Sit or lie down in a comfortable and quiet environment, with your spine straight and shoulders relaxed.",
        },
        {
          name: "Relax Your Body",
          description:
            "Close your eyes and take a few deep breaths to relax your body and mind.",
        },
        {
          name: "Inhale",
          description:
            "Inhale quietly and gently through your nose for a count of four seconds, allowing your abdomen to expand as you fill your lungs with air.",
        },
        {
          name: "Hold",
          description:
            "Hold your breath for a count of seven seconds, maintaining a sense of calm and relaxation.",
        },
        {
          name: "Exhale",
          description:
            "Exhale slowly and completely through your mouth for a count of eight seconds, releasing any tension or stress.",
        },
        {
          name: "Repeat",
          description:
            "Repeat this cycle of breathing for several rounds, allowing yourself to relax deeper with each breath.",
        },
      ],
    },
  ]);
  const [selectedTechnique, setSelectedTechnique] = useState<TechniqueType>(techniques[0]);

  const handleOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawerClass = classNames(
    "fixed right-0 top-0 translate-x-0 min-h-screen w-[90%] bg-background all-transition duration-200 p-6 flex flex-col",
    {
      "translate-x-full": !openDrawer,
    }
  );

  return (
    <div className=" bg-primary min-h-screen flex">
      <div className="basis-1/5 sticky h-screen top-0 bg-background p-12 hidden lg:flex flex-col">
        <img
          src={brandImage}
          alt=""
          className="h-44 w-44 relative top-4 self-center"
        />
        <div className="bg-primary rounded-md text-xs md:text-[16px] flex justify-between px-4 py-2 relative">
          <input
            type="text"
            placeholder="Search by name..."
            className="placeholder:font-kodchasan placeholder:text-background focus:placeholder:opacity-0 outline-none"
          />
          <HamburgerIcon onClick={handleOpen} />
          <div className="absolute bg-blue-200 right-0 top-11 rounded-md p-2">
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </div>
        </div>
        <div className="bg-primary rounded-md text-xs md:text-[16px] flex flex-col overflow-auto justify-between mt-2 flex-1">
          <div className="overflow-auto px-2 py-2 ">
            {techniques.map((technique) => {
              const techniqueClass = classNames("p-2 rounded-md cursor-pointer text-background", {
                "bg-secondary text-primary": selectedTechnique?.name === technique.name,

              });
              return (
                <div
                  key={technique.name}
                  className={techniqueClass}
                  onClick={() => setSelectedTechnique(technique)}
                >
                  <p className="font-kodchasan select-none">
                    {technique.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
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
        <img
          src={brandImage}
          alt=""
          className="h-32 w-32 relative top-4 self-center"
        />
        <div className="bg-primary rounded-md text-xs flex justify-between px-4 py-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="placeholder:font-kodchasan placeholder:text-background outline-none"
          />
          <HamburgerIcon onClick={handleOpen} />
        </div>
      </div>
    </div>
  );
}

export default Main;
