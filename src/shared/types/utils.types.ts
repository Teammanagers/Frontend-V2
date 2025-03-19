interface IHandleInputChangeProps {
  e: React.ChangeEvent<HTMLTextAreaElement>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export type { IHandleInputChangeProps };
