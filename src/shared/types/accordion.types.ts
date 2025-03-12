interface Props {
  title: string;
  tagList?: string[];
}

interface IAccordionProps extends Props {
  children: React.ReactNode;
}
interface IAccordionHeaderProps extends Props {
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type { IAccordionProps, IAccordionHeaderProps };
