import { IStatusBadge } from '@/widgets/todo/status.type';
import styled from 'styled-components';

function ProgressBar({ status }: { status: IStatusBadge[] }) {
  console.log(status);

  return (
    <Container>
      <TODO />
      <PROCEEDING />
      <COMPLETED />
    </Container>
  );
}

export { ProgressBar };

const Container = styled.section`
  display: flex;
  width: 900px;
  height: 12px;
  border-radius: 76px;
`;

const TODO = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 76px 0 0 76px;
`;

const PROCEEDING = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.subLightBlue};
`;

const COMPLETED = styled.div`
  width: 10%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  border-radius: 0 76px 76px 0;
`;
