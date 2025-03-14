import { IHandleInputChangeProps } from '@/shared/types';

const handleInputChange = ({ e, setInputValue }: IHandleInputChangeProps) => {
  const { value } = e.target;
  setInputValue(value);
};

export { handleInputChange };
