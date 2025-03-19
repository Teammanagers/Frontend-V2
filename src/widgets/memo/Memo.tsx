import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import DropDown from '@/entities/memo/assets/dropdown.svg';
import PinIcon from '@/entities/memo/assets/pin.svg';
import { memoSizes } from '@/widgets/memo/memo.constants.ts';

export const Memo = ({ size }: { size: keyof typeof memoSizes }) => {
  const [isPinned, setIsPinned] = useState<boolean>(false);

  const selectedSize = memoSizes[size];

  useEffect(() => {
    console.log(isPinned);
  }, [isPinned]);

  return (
    <MemoContainer $size={selectedSize} $pinned={isPinned}>
      <MemoTitleContainer>
        <MemoTitle>제목</MemoTitle>
        <MenuContainer>
          {size === 'large' && (
            <PinBtn
              onClick={() => setIsPinned((prev) => !prev)}
              $pinned={isPinned}
            />
          )}
          <MenuBtn />
        </MenuContainer>
      </MemoTitleContainer>
      <TagContainer>
        {/*{tagList.map((tag: TagProps) => (*/}
        <TagBox>태그</TagBox>
        <TagBox>하이루</TagBox>
        {/*))}*/}
      </TagContainer>
      <MemoContentContainer>
        <Content>내용</Content>
      </MemoContentContainer>
    </MemoContainer>
  );
};

const MemoContainer = styled.div<{
  $size: (typeof memoSizes)[keyof typeof memoSizes];
  $pinned: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => $size.width}px;
  height: ${({ $size }) => $size.height}px;
  border-radius: 6px;
  outline: ${({ theme, $pinned }) =>
    $pinned ? `2px solid ${theme.colors.subLightBlue}` : 'none'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  gap: 8px;
  background: white;
  padding: 16px 18px;
`;

const MemoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 21px;
`;

const PinBtn = styled(PinIcon)<
  ButtonHTMLAttributes<HTMLButtonElement> & { $pinned: boolean }
>`
  cursor: pointer;
  margin-right: 8px;
  /* 기본 색상은 흰색, 고정 상태면 theme.colors.mainBlue 적용 */
  fill: ${({ theme, $pinned }) => ($pinned ? theme.colors.mainBlue : 'white')};
`;
const MenuBtn = styled(DropDown)<ButtonHTMLAttributes<HTMLButtonElement>>`
  cursor: pointer;
`;

const MemoTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const TagContainer = styled.div`
  display: flex;
  width: 100%;
  height: 28px;
  gap: 6px;
`;

const TagBox = styled.div`
  width: auto;
  max-width: 50px;
  padding: 0 6px 0 6px;
  height: 28px;
  border: 3px;
  border-radius: 3px;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors.mainBlue};
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
`;

const MemoContentContainer = styled.div`
  width: 100%;
  height: 115px;
`;

const Content = styled.p`
  font-size: 10px;
  line-height: 150%;
  font-weight: 400;
  color: ${(props) => props.theme.colors.black};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
