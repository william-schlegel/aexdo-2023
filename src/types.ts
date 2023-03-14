export type TMenu = {
  label: string;
  link?: string;
  options?: {
    label: string;
    link: string;
  }[];
};

export type TActor = {
  name: string;
  description: string;
};
