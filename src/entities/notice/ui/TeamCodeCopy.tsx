import styled from 'styled-components';

export default function TeamCodeCopy() {
  const handleCopyClipBoard = () => {
    alert('팀 코드가 클립보드에 복사되었습니다.');
    navigator.clipboard.writeText('X65VRG34');
  };

  return (
    <Container>
      <TeamCode>X65VRG34</TeamCode>
      <Button onClick={handleCopyClipBoard}>팀 코드복사</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  width: 163px;
  height: 76px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.subLightBlue};
`;

const TeamCode = styled.p`
  width: 89px;
  height: 27px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainBlue};
`;

const Button = styled.button`
  width: 83px;
  height: 32px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainBlue};
  border-radius: 4px;
  cursor: pointer;
`;
