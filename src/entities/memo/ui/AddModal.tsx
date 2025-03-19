import styled from 'styled-components';
import AddFolderIcon from '@/entities/memo/assets/add-folder.svg';
import AddMemoIcon from '@/entities/memo/assets/add-memo.svg';

export const AddModal = () => {
  return (
    <ModalContainer>
      <MenuContainer>
        메모 추가하기
        <AddMemo />
      </MenuContainer>
      <MenuContainer>
        폴더 추가하기
        <AddFolder />
      </MenuContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 552px;
  height: 140px;
  gap: 12px;
  padding: 24px 40px;
  background: white;
`;

const MenuContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  background: white;
  transition: background 0.2s;
  color: ${({ theme }) => theme.colors.darkGray};

  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.black};
  }
  &:active {
    background: ${({ theme }) => theme.colors.silver};
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover svg,
  &:active svg {
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

const AddMemo = styled(AddMemoIcon)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.darkGray};
  transition: stroke 0.2s;
`;

const AddFolder = styled(AddFolderIcon)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.darkGray};
  transition: stroke 0.2s;
`;
