interface IActionDropdownProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
  action: (menu: string) => void;
  menus: string[];
}

export type { IActionDropdownProps };
