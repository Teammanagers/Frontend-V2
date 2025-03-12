interface IActionDropdownProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
  editAction: () => void;
  deleteAction: () => void;
}

export type { IActionDropdownProps };
