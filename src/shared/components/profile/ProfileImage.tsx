import styled from 'styled-components';
import ProfileIcon from '../../../assets/profile.svg';

interface ProfileStyle {
  borderColor?: string;
}

interface ProfileProps {
  size: keyof typeof profileSizes;
  style?: keyof typeof profileStyles;
  imageUrl?: string;
  onClick?: () => void;
}

const profileSizes = {
  small: { width: 40, height: 40 },
  large: { width: 160, height: 160 },
};

const profileStyles: Record<string, ProfileStyle> = {
  main: {
    borderColor: '#5C9EFF',
  },
};

export const ProfileImage = ({
  size,
  style,
  imageUrl,
  onClick,
}: ProfileProps) => {
  const selectedSize = profileSizes[size];
  const selectedStyle = style ? profileStyles[style] : {};

  return (
    <ProfileContainer
      sizes={selectedSize}
      styles={selectedStyle}
      size={size}
      onClick={onClick}
    >
      <Image src={imageUrl || ProfileIcon} alt="프로필 이미지" />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div<{
  sizes: (typeof profileSizes)[keyof typeof profileSizes];
  styles: Partial<(typeof profileStyles)[keyof typeof profileStyles]>;
  size: keyof typeof profileSizes;
}>`
  width: ${({ sizes }) => sizes.width}px;
  height: ${({ sizes }) => sizes.height}px;
  border-radius: 50%;
  border: ${({ size, styles }) =>
    size === 'large' && styles.borderColor
      ? `1px solid ${styles.borderColor}`
      : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: ${({ size, onClick }) =>
    size === 'large' && onClick ? 'pointer' : 'default'};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
