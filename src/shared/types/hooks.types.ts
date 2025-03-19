interface IBulleetPointConverter {
  e: React.KeyboardEvent<HTMLTextAreaElement>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export type { IBulleetPointConverter };
