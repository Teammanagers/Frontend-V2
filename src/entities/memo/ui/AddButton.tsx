import styled from 'styled-components';
import AddMemoIcon from '@/entities/memo/assets/plus.svg?react';

export const AddButton = () => {
  return (
    <MemoContainer>
      <AddMemo />
      <MemoText>추가하기</MemoText>
    </MemoContainer>
  );
};

const MemoContainer = styled.button`
  width: 352px;
  height: 200px;
  border: none;
  background: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
`;

const AddMemo = styled(AddMemoIcon)`
  width: 40px;
  height: 40px;
`;

const MemoText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
`;
