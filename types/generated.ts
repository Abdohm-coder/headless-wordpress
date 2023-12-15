export interface INavLinks {
  label: string;
  childItems: {
    nodes: {
      label: string;
      description: string;
      url: string;
      target: "_blank" | null;
    }[];
  };
}
