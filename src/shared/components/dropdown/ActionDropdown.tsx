import styled from 'styled-components';
import dropdownIcon from '@/shared/assets/icons/dropdown.svg';
import { Dropdown } from '@/shared/components/dropdown';
import { IActionDropdownProps } from '@/shared/types/components';

/**
 * ActionDropdown 컴포넌트는 수정 및 삭제 버튼을 포함한 드롭다운 메뉴를 렌더링합니다.
 * 투두, 메모 등의 항목에 사용됩니다.
 *
 * @param {boolean} isOpen - 드롭다운 메뉴의 열림 상태.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setIsOpen - 드롭다운 메뉴의 열림/닫힌 상태를 설정하는 함수.
 * @param {() => void} toggle - 드롭다운 메뉴의 열림/닫힘 상태를 토글하는 함수.
 * @param {() => void} editAction - 수정 버튼 클릭 시 실행되는 핸들러 함수.
 * @param {() => void} deleteAction - 삭제 버튼 클릭 시 실행되는 핸들러 함수.
 * @returns
 *
 * @example
 * ```tsx
 *
 *   const { isOpen, setIsOpen, toggle } = useToggle();
 *
 *  const handleEditAction = () => {
 *  // 수정 시 로직 추가
 *   toggle();
 *  }
 *  const handleDeleteAction = () => {
 * // 삭제 시 로직 추가
 *  toggle();
 * }
 *
 * <ActionDropdown
 *   isOpen={isOpen}
 *   setIsOpen={setIsOpen}
 *   toggle={toggle}
 *   editAction={editAction}
 *   deleteAction={deleteAction}
 * />
 * ```
 */

function ActionDropdown({
  isOpen,
  setIsOpen,
  toggle,
  editAction,
  deleteAction,
}: IActionDropdownProps) {
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
