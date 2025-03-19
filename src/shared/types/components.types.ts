import { ReactNode } from 'react';

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

interface IAccordion {
  title: string;
  tagList?: string[];
}

interface IAccordionProps extends IAccordion {
  children: React.ReactNode;
}
interface IAccordionHeaderProps extends IAccordion {
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type { IModal, IAccordionProps, IAccordionHeaderProps };
