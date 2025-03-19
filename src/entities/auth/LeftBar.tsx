import { useState } from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import firstImg from '@/shared/assets/common/login-first-slide.svg?url';
import secondImg from '@/shared/assets/common/login-second-slide.svg?url';
import thirdImg from '@/shared/assets/common/login-third-slide.svg?url';

export default function LeftBar() {
  const [swiperIdx, setSwiperIdx] = useState<number>(0);
  const IMAGE_ARRAY = [
    { id: 1, url: firstImg },
    { id: 2, url: secondImg },
    { id: 3, url: thirdImg },
  ];
  return (
    <LeftContainer>
      <SwiperWrapper>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          slidesPerView={1}
          navigation
          pagination
        >
          {IMAGE_ARRAY.map((img) => (
            <SwiperSlide key={img.id}>
              <SlideImg src={img.url} />
            </SwiperSlide>
          ))}
        </Swiper>
        <DotContainer>
          <Dot $isActive={true}></Dot>
        </DotContainer>
      </SwiperWrapper>
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  width: 547px;
`;

const SwiperWrapper = styled.div`
  position: relative;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 37px;
  z-index: 50;
  position: absolute;
  gap: 10px;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 19px 0 0 19px;
`;

const Dot = styled.button<{ $isActive: boolean }>`
  height: 9px;
  width: ${({ $isActive }) => ($isActive ? '18px' : '9px')};
  border-radius: ${({ $isActive }) => ($isActive ? '76px' : '50%')};
  background-color: ${({ $isActive }) =>
    $isActive ? 'white' : 'rgba(255, 255, 255, 0.3)'};
`;
