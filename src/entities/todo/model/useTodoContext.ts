import { TodoContext } from '@/app/providers/TodoContext';
import { useContext } from 'react';

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
