import styled from 'styled-components';
import logo from '@/shared/assets/common/logo.svg?url';

export default function LoginOptions() {
  return (
    <Container>
      <LogoContainer>
        <ImgContainer>
          <LogoImg src={logo} />
        </ImgContainer>
        <TextContainer>
          <TextSpanBold>팀매니저에 오신 것을 환영해요!</TextSpanBold>
          <TextSpan>누구나 손쉬운 팀 관리, 함께 해볼까요?</TextSpan>
        </TextContainer>
      </LogoContainer>
      <Options>
        <LoginBtn>
          <img />
          <LoginSpan>카카오로 1초만에 로그인하기</LoginSpan>
        </LoginBtn>
        <LoginBtn>
          <img />
          <LoginSpan>네이버로 1초만에 로그인하기</LoginSpan>
        </LoginBtn>
        <LoginBtn>
          <img />
          <LoginSpan>구글로 1초만에 로그인하기</LoginSpan>
        </LoginBtn>
      </Options>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 547px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

const LogoContainer = styled.div`
  height: 176px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
`;
const LogoImg = styled.img``;

const TextContainer = styled.div`
  display: flex;
  height: 66px;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const TextSpanBold = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
`;

const TextSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginBtn = styled.button`
  width: 365px;
  height: 52px;
  border-right: 8px;
`;

const LoginSpan = styled.span``;
