import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileIcon from '../../../assets/profile.svg';

interface ProfileEditorProps {
  onImageChange?: (newImageUrl: string) => void;
}

export const ProfileEditor: React.FC<ProfileEditorProps> = ({
  onImageChange,
}) => {
  const [imageUrl, setImageUrl] = useState<string>(ProfileIcon);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const newImageUrl = URL.createObjectURL(file);
      setImageUrl(newImageUrl);

      if (onImageChange) {
        onImageChange(newImageUrl);
      }
    }
  };

  return (
    <ProfileEditorContainer>
      <StyledImageContainer htmlFor="image-upload">
        <StyledImage src={imageUrl} alt="프로필 이미지" />
      </StyledImageContainer>
      <FileInput
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </ProfileEditorContainer>
  );
};

const ProfileEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImageContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FileInput = styled.input`
  display: none;
`;
