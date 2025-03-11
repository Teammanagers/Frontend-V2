import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { getMemoById, updateMemo, deleteMemo } from '@/apis/memo';
import { MemoForm } from '@/entities/memo/ui/MemoForm.tsx';

export const EditMemo = () => {
  const { memoId } = useParams<{ memoId: string }>();
  const navigate = useNavigate();
  const [initialTitle, setInitialTitle] = useState('안녕');
  const [initialContent, setInitialContent] = useState('이건본문');
  const [initialTags, setInitialTags] = useState<{ name: string }[]>([
    { name: '기본태그' },
    { name: '안녕' },
  ]);

  useEffect(() => {
    const fetchMemo = async () => {
      if (memoId) {
        try {
          const response = await getMemoById(Number(memoId));
          const memo = response.result.memo;
          setInitialTitle(memo.title);
          setInitialContent(memo.content);
          // memo.tagList가 문자열 배열이 아니라 객체 배열이라면 아래처럼 변환
          setInitialTags(
            memo.tagList.map((tag: { name: string }) => ({ name: tag.name })),
          );
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchMemo();
  }, [memoId]);

  const onSubmit = async (
    title: string,
    content: string,
    tags: { name: string }[],
  ) => {
    if (memoId) {
      try {
        const tagNames = tags.map((tag) => tag.name);
        await updateMemo(Number(memoId), title, tagNames, content);
        navigate('/memo');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onDelete = async () => {
    if (memoId) {
      try {
        await deleteMemo(Number(memoId));
        navigate('/memo');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <MemoForm
      initialTitle={initialTitle}
      initialContent={initialContent}
      onSubmit={onSubmit}
      onBack={() => navigate(-1)}
      submitButtonText="메모 수정"
      onDelete={onDelete}
      showDeleteButton={true}
    />
  );
};
