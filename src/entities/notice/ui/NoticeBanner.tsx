import styled from 'styled-components';
import NoticeLoudSpeaker from '@/shared/assets/icons/main/loud-speaker.svg';
import { Button } from '@/shared/components/button/Button';
import { useToggle } from '@/shared/hooks';
import NoticeModal from '@/widgets/notice/NoticeModal';

function NoticeBanner() {
  const { isOpen, toggle } = useToggle();

  return (
    <>
      <Container onClick={toggle}>
        <NoticeContent>
          <IconWrapper>
            <img src={NoticeLoudSpeaker} alt="notice-loud-speaker" />
          </IconWrapper>

          <LatestNotice>UMC 6th 팀 매니저 공지입니다.</LatestNotice>
        </NoticeContent>
        <Button size="mini" style="sub">
          공지 수정
        </Button>
      </Container>

      <NoticeModal isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export { NoticeBanner };

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 876px;
  height: 76px;
  border: 1px solid ${({ theme }) => theme.colors.subLightBlue};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const NoticeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 738px;
  height: 36px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LatestNotice = styled.p`
  width: 678px;
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;
