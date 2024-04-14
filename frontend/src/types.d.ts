export type InstructionType = {
  name: string;
  description: string;
};

export type TechniqueType = {
  name: string;
  description: string;
  instructions: InstructionType[];
};

