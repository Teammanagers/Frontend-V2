import styled from 'styled-components';

interface VerticalButtonProps {
  size: keyof typeof buttonSizes;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 사이즈
const buttonSizes = {
  small: { width: 78, height: 66, gap: 6 },
  large: { width: 80, height: 68, gap: 7 },
};

export const VerticalButton = ({
  size,
  icon,
  children,
  onClick,
  disabled = false,
}: VerticalButtonProps) => {
  const selectedSize = buttonSizes[size];

  return (
    <ButtonContainer sizes={selectedSize} onClick={onClick} disabled={disabled}>
      <IconWrapper>{icon}</IconWrapper>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{
  sizes: { width: number; height: number; gap: number };
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  background: #ffffff;
  border: 1px solid ${({ disabled }) => (disabled ? '#F0F0F0' : '#F0F0F0')};
  border-radius: 6px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  width: ${({ sizes }) => sizes.width}px;
  height: ${({ sizes }) => sizes.height}px;
  gap: ${({ sizes }) => sizes.gap}px;
  padding: 0;

  &:hover {
    background: ${({ disabled }) => (disabled ? '#FFFFFF' : '#f9fbff')};
    border: ${({ disabled }) =>
      disabled ? '1px solid #F0F0F0' : '1px solid #5C9EFF'};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
