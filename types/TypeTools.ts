type Tool = {
  name: string;
  icon: string;
};

type ToolCategory = {
  better: Tool[];
  less: Tool[];
};

export type TypeTools = {
  languages: ToolCategory;
  productivity: ToolCategory;
  frameworks: ToolCategory;
  databases: ToolCategory;
};
