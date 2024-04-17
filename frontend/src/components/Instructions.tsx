import React from "react";

type InstructionType = {
  name: string;
  description: string;
};

type Props = {
  instructions: InstructionType[];
};

function Instructions({ instructions }: Props) {
  return (
    <div data-testid="instruction-list" className="flex flex-col px-4">
      <ol className="list-decimal bold-marker font-kodchasan text-xs md:text-lg space-y-2">
        {instructions.map((instruction, index) => (
          <li key={index}>
            <span className="font-bold text-background">
              {instruction.name}
            </span>
            <p className="text-background">{instruction.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Instructions;
