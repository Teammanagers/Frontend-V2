import styled from 'styled-components';

function NoticeItem({ outDated }: { outDated: boolean }) {
  return (
    <Container $outDated={outDated}>
      <Content>7월 23일 19시 회의입니다!</Content>
      <Date>2024.07.10 14:24</Date>
    </Container>
  );
}

export { NoticeItem };

const Content = styled.p``;

const Date = styled.span``;

const Container = styled.div<{ $outDated: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 58px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.subLightBlue};
  border-radius: 6px;
  background-color: ${({ $outDated, theme }) =>
    $outDated ? theme.colors.lightGray : theme.colors.white};

  ${Content} {
    height: 21px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ $outDated, theme }) =>
      $outDated ? theme.colors.gray : theme.colors.black};
    margin-bottom: 6px;
  }

  ${Date} {
    height: 15px;
    font-size: 10px;
    font-weight: 400;
    text-align: right;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
