export type InstructionType = {
  name: string;
  description: string;
};

export type TechniqueType = {
  technique_name: string;
  technique_description: string;
  instructions: InstructionType[];
  purpose: string;
  difficulty: string;
  duration: string;
  culture: string;
};

export enum FilterEnum {
  purpose = "purpose",
  difficulty = "difficulty",
  duration = "duration",
  culture = "culture",
}

export type FilterType = {
  name: string;
  [FilterEnum.purpose]: string[];
  [FilterEnum.difficulty]: string[];
  [FilterEnum.duration]: string[];
  [FilterEnum.culture]: string[];
};
