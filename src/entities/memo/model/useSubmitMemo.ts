import { useCallback } from 'react';
import { createMemo } from '@/shared/api/memo';

export const useSubmitMemo = (teamId: number) => {
  const handleSubmit = useCallback(
    async (title: string, content: string, tags: { name: string }[]) => {
      const tagNames = tags.map((tag) => tag.name);
      return await createMemo(teamId, title, tagNames, content);
    },
    [teamId],
  );

  return { handleSubmit };
};
