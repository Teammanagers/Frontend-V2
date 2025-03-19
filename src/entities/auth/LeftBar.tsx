import styled from 'styled-components';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import firstImg from '@/shared/assets/common/login-first-slide.svg?url';
import secondImg from '@/shared/assets/common/login-second-slide.svg?url';
import thirdImg from '@/shared/assets/common/login-third-slide.svg?url';

export default function LeftBar() {
  const IMAGE_ARRAY = [
    { id: 1, url: firstImg },
    { id: 2, url: secondImg },
    { id: 3, url: thirdImg },
  ];
  return (
    <LeftContainer>
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
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  width: 547px;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 19px 0 0 19px;
`;
