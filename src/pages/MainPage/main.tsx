import { NoticeBanner } from '@/entities/notice/ui';
import TeamCodeCopy from '@/entities/notice/ui/TeamCodeCopy';
import styled from 'styled-components';

export function MainPage() {
  return (
    <Container>
      <MainHeader>
        {/* 공지 사항 배너 */}
        <NoticeBanner />
        {/* 팀 코드 복사 */}
        <TeamCodeCopy />
      </MainHeader>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 74px;
`;

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
`;
