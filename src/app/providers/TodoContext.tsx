import { ITodoContextProvider, ITodoContextValue } from '@/shared/types';
import { createContext } from 'react';

export const TodoContext = createContext<ITodoContextValue | null>(null);

export default function TodoProvider({
  children,
  value,
}: ITodoContextProvider) {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
