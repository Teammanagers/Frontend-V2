import styled from 'styled-components';
import dropdownIcon from '@/shared/assets/icons/dropdown.svg';
import { Dropdown } from '@/shared/components/dropdown';

function ActionDropdown({
  isOpen,
  setIsOpen,
  toggle,
  editAction,
  deleteAction,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
  editAction: () => void;
  deleteAction: () => void;
}) {
  return (
    <Dropdown setIsOpen={setIsOpen}>
      <Dropdown.Trigger onClick={toggle}>
        <img src={dropdownIcon} />
      </Dropdown.Trigger>

      <Dropdown.Menu isOpen={isOpen} top="10px" left="-50%">
        <MenuWrapper>
          <ModifyButton onClick={editAction}>수정</ModifyButton>
          <DeleteButton onClick={deleteAction}>삭제</DeleteButton>
        </MenuWrapper>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { ActionDropdown };

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 50px;
  border-radius: 3px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.button`
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-weight: 400;
  font-size: 10px;
  font-weight: 400;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const ModifyButton = styled(MenuItem)`
  color: #1d1d1d;
`;

const DeleteButton = styled(MenuItem)`
  color: #ff0000;
`;
