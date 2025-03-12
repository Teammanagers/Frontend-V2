interface ITodoContextValue {
  //   todoId: number;
  //   setTodoId: React.Dispatch<React.SetStateAction<number>>;
  // imgUploadModalOpen: boolean;
  // setImgUploadModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  toggle: () => void;
}

interface ITodoContextProvider {
  children: React.ReactNode;
  value: ITodoContextValue;
}

export type { ITodoContextValue, ITodoContextProvider };
