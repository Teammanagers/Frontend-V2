import Modal from '@/shared/components/modal/Modal';
import styled from 'styled-components';
import { INoticeModalProps } from './notice-modal.types';

export default function NoticeModal({ isOpen, toggle }: INoticeModalProps) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalWrapper></ModalWrapper>
    </Modal>
  );
}

const ModalWrapper = styled.div`
  width: 534px;
  height: 558px;
  border: 1px solid ${({ theme }) => theme.colors.subLightBlue};
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.white};
`;
