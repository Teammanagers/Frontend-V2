import styled from 'styled-components';
import noticeSubmitBtn from '@/shared/assets/icons/main/notice-submit-btn.svg';
import { useState } from 'react';
import { handleInputChange } from '@/shared/lib/utils/handleNoticeInputChange';
import useBulletPointConverter from '@/shared/hooks/action/useBulletPointConverter';

function NoticeInput({ toggle }: { toggle: () => void }) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = () => {
    toggle();
  };

  return (
    <Container>
      <Textarea
        value={inputValue}
        placeholder="공지 내용을 입력해주세요"
        name="notice"
        onChange={(e) => handleInputChange({ e, setInputValue })}
        onKeyDown={(e) => useBulletPointConverter({ e, setInputValue })}
      />
      <Button onClick={handleSubmit}>
        <img src={noticeSubmitBtn} alt="submit-button" />
      </Button>
    </Container>
  );
}

export { NoticeInput };

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 498px;
  height: 54px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 420px;
  height: 36px;
  resize: none;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 36px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
