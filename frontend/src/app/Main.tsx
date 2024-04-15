import React, { useState } from "react";
import classNames from "classnames";
import { TechniqueType } from "../types";
import TechniqueInfo from "./TechniqueInfo";
import Sidebar from "./Sidebar";

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
    {
      name: "Equal Breathing",
      description:
        "A technique that involves equalizing the duration of inhalation and exhalation for balance and relaxation.",
      instructions: [
        {
          name: "Posture",
          description:
            "Sit comfortably with a straight spine and relaxed shoulders.",
        },
        {
          name: "Begin Breathing",
          description:
            "Inhale slowly and steadily through your nose for a count of four seconds.",
        },
        {
          name: "Exhale",
          description:
            "Exhale slowly and evenly through your nose for another count of four seconds.",
        },
        {
          name: "Maintain Rhythm",
          description:
            "Keep this equal duration for inhalation and exhalation, focusing on the rhythm of your breath.",
        },
        {
          name: "Repeat",
          description:
            "Continue for several minutes, allowing yourself to relax deeper with each breath.",
        },
      ],
    },
    {
      name: "Sama Vritti (Equal Breathing)",
      description:
        "Similar to Equal Breathing, Sama Vritti involves inhaling and exhaling for an equal duration.",
      instructions: [
        {
          name: "Comfortable Seating",
          description:
            "Sit comfortably with a straight spine and relaxed shoulders.",
        },
        {
          name: "Inhalation",
          description: "Inhale through your nose for a count of four seconds.",
        },
        {
          name: "Exhalation",
          description:
            "Exhale through your nose for the same count of four seconds.",
        },
        {
          name: "Steady Breathing",
          description:
            "Maintain this equal rhythm of breathing, focusing on the smoothness and steadiness of each breath.",
        },
        {
          name: "Repetition",
          description:
            "Repeat for several minutes, allowing your body and mind to relax with each cycle.",
        },
      ],
    },
    {
      name: "Three-Part Breath (Dirga Pranayama)",
      description:
        "A yogic breathing technique that focuses on breathing deeply into three parts of the lungs: abdomen, ribcage, and upper chest.",
      instructions: [
        {
          name: "Seating",
          description:
            "Find a comfortable seated position with a straight spine.",
        },
        {
          name: "Hand Placement",
          description:
            "Place one hand on your abdomen and the other on your chest.",
        },
        {
          name: "Inhalation",
          description:
            "Inhale deeply through your nose, first filling your abdomen, then expanding your ribcage, and finally lifting your chest.",
        },
        {
          name: "Exhalation",
          description:
            "Exhale slowly and completely, reversing the process by emptying your chest, then your ribcage, and finally your abdomen.",
        },
        {
          name: "Repetition",
          description:
            "Repeat this three-part breath for several rounds, focusing on the expansion and contraction of each area of the lungs.",
        },
      ],
    },
    {
      name: "Breath Awareness Meditation",
      description:
        "A practice focusing on observing the breath without manipulation, promoting mindfulness and inner calm.",
      instructions: [
        {
          name: "Comfortable Seating",
          description:
            "Sit comfortably with a straight spine and relaxed shoulders.",
        },
        {
          name: "Focus",
          description:
            "Bring your attention to the sensation of breathing, without trying to change or control it.",
        },
        {
          name: "Observation",
          description:
            "Notice the rise and fall of your chest or the sensation of air passing through your nostrils.",
        },
        {
          name: "Mindfulness",
          description:
            "Observe any thoughts, emotions, or sensations that arise, and gently return your focus to the breath.",
        },
        {
          name: "Practice",
          description:
            "Continue for several minutes, cultivating awareness and presence with each breath.",
        },
      ],
    },
    {
      name: "Square Breathing",
      description:
        "A technique involving breathing in a square pattern to promote relaxation and stress reduction.",
      instructions: [
        {
          name: "Comfortable Position",
          description:
            "Sit or lie down comfortably with a straight spine and relaxed shoulders.",
        },
        {
          name: "Inhale",
          description:
            "Inhale deeply through your nose for a count of four seconds.",
        },
        {
          name: "Hold",
          description: "Hold your breath for a count of four seconds.",
        },
        {
          name: "Exhale",
          description:
            "Exhale slowly and completely through your mouth for a count of four seconds.",
        },
        {
          name: "Hold Again",
          description:
            "Hold your breath for another count of four seconds before beginning the next cycle of inhalation.",
        },
        {
          name: "Repetition",
          description:
            "Continue this pattern of breathing for several minutes, allowing yourself to relax deeply with each breath.",
        },
      ],
    },
    {
      name: "Progressive Muscle Relaxation",
      description:
        "A technique involving tensing and relaxing muscle groups sequentially to promote physical and mental relaxation.",
      instructions: [
        {
          name: "Comfortable Seating",
          description:
            "Sit in a comfortable chair with your feet flat on the floor and your hands resting on your thighs.",
        },
        {
          name: "Focus",
          description: "Close your eyes and take a few deep breaths to relax.",
        },
        {
          name: "Muscle Tensing",
          description:
            "Begin by tensing the muscles in your toes and feet, holding the tension for a few seconds.",
        },
        {
          name: "Relaxation",
          description:
            "Release the tension and allow the muscles to relax completely.",
        },
        {
          name: "Progression",
          description:
            "Continue this process, gradually moving up through the body, tensing and relaxing each muscle group.",
        },
        {
          name: "Completion",
          description:
            "Finish by taking a few deep breaths and enjoying the overall sense of relaxation in your body.",
        },
      ],
    },
    {
      name: "Diaphragmatic Breathing",
      description:
        "A technique that focuses on deep breathing from the diaphragm to promote relaxation and reduce stress.",
      instructions: [
        {
          name: "Posture",
          description:
            "Sit or lie down comfortably with your spine straight and shoulders relaxed.",
        },
        {
          name: "Hand Placement",
          description:
            "Place one hand on your chest and the other on your abdomen, just below your ribcage.",
        },
        {
          name: "Inhale",
          description:
            "Inhale deeply through your nose, allowing your abdomen to rise and expand.",
        },
        {
          name: "Exhale",
          description:
            "Exhale slowly through your mouth, allowing your abdomen to fall and contract.",
        },
        {
          name: "Practice",
          description:
            "Continue this deep breathing pattern for several minutes, focusing on the sensation of relaxation with each breath.",
        },
      ],
    },
    {
      name: "Resonant Breathing",
      description:
        "A technique that involves breathing at a specific rate to stimulate the body's natural relaxation response.",
      instructions: [
        {
          name: "Position",
          description:
            "Sit or lie down comfortably with a straight spine and relaxed shoulders.",
        },
        {
          name: "Find Your Rhythm",
          description:
            "Inhale and exhale naturally, paying attention to the length of each breath.",
        },
        {
          name: "Determine Ratio",
          description:
            "Gradually adjust your breathing to find a comfortable ratio, such as inhaling for four counts and exhaling for six counts.",
        },
        {
          name: "Maintain Consistency",
          description:
            "Continue breathing at this ratio for several minutes, allowing your body to synchronize with the rhythm.",
        },
        {
          name: "Awareness",
          description:
            "Notice any changes in your state of relaxation and well-being as you practice resonant breathing.",
        },
      ],
    },
    {
      name: "Buteyko Breathing Technique",
      description:
        "A method that emphasizes nasal breathing and reduced breathing volume to improve oxygenation and reduce stress.",
      instructions: [
        {
          name: "Nasal Breathing",
          description:
            "Sit comfortably with a straight spine and close your mouth, breathing exclusively through your nose.",
        },
        {
          name: "Shallow Breathing",
          description:
            "Focus on breathing lightly and shallowly, using the minimum amount of air necessary.",
        },
        {
          name: "Relaxation",
          description:
            "Allow your breathing to become calm and gentle, maintaining a relaxed state.",
        },
        {
          name: "Consistency",
          description:
            "Practice nasal breathing and reduced breathing volume throughout the day to improve respiratory efficiency and reduce stress.",
        },
      ],
    },
    {
      name: "Coherent Breathing",
      description:
        "A technique that involves breathing at a specific rate to achieve a harmonious balance between the sympathetic and parasympathetic nervous systems.",
      instructions: [
        {
          name: "Position",
          description:
            "Sit comfortably with a straight spine and relaxed shoulders.",
        },
        {
          name: "Inhalation",
          description:
            "Inhale slowly and deeply through your nose for a count of six seconds.",
        },
        {
          name: "Exhalation",
          description:
            "Exhale slowly and completely through your nose for the same count of six seconds.",
        },
        {
          name: "Rhythm",
          description:
            "Continue breathing at this steady rate, maintaining a smooth and even flow of breath.",
        },
        {
          name: "Relaxation",
          description:
            "Allow your body and mind to relax deeply as you synchronize your breathing with the coherent rhythm.",
        },
      ],
    },
  ]);
  const [selectedTechnique, setSelectedTechnique] = useState<TechniqueType>(
    techniques[0]
  );

  const handleOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawerClass = classNames(
    "fixed right-0 top-0 translate-x-0 h-screen w-[90%] bg-background all-transition duration-200 p-6 flex flex-col",
    {
      "translate-x-full": !openDrawer,
    }
  );

  const purposeValues = [
    "Relaxation",
    "Stress Relief",
    "Focus",
    "Energy",
    "Sleep",
  ];

  return (
    <div className=" bg-primary min-h-screen flex">
      <div className="basis-1/5 sticky h-screen top-0 bg-background p-12 hidden lg:flex flex-col">
        <Sidebar
          techniques={techniques}
          purposeValues={purposeValues}
          selectedTechnique={selectedTechnique}
          setSelectedTechnique={setSelectedTechnique}
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
          techniques={techniques}
          purposeValues={purposeValues}
          selectedTechnique={selectedTechnique}
          setSelectedTechnique={setSelectedTechnique}
          onSubmit={() => {
            setOpenDrawer(false);
          }}
        />
      </div>
    </div>
  );
}

export default Main;
