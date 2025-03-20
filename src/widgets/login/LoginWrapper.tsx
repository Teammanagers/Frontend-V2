import styled from 'styled-components';
import LeftBar from '@/entities/auth/LeftBar';
import LoginOptions from '@/entities/auth/login/ui/LoginOptions';

export default function LoginWrapper() {
  return (
    <LoginWrapperContainer>
      <LeftBar />
      <LoginOptions />
    </LoginWrapperContainer>
  );
}

const LoginWrapperContainer = styled.div`
  display: flex;
`;
