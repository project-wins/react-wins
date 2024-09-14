import CheerProfile from "@components/Cheer/CheerProfile.tsx";
import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperContainer = styled.div`
  width: 100%;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
  }
`;

const SlideContent = styled.div`
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const cheerData = [
  {
    position: "응원단장",
    kName: "김주일",
    eName: "KIM JOO IL",
    profile: {
      nickname: "쭈발이",
      heightBlood: "183cm/A형",
      hobby: "마트 시식코너 돌기",
      favoritePlayer: "박경수",
      motto: "안된다 못한다 하지말고 긍정적으로 !!",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/18deb47db55e42529e1464896e6faf1a.png",
    linkUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/b2919bdaf81c429f8d11c46c266e9612.png",
  },
  {
    position: "아나운서",
    kName: "박수미",
    eName: "PARK SOO MI",
    profile: {
      nickname: "목소리 미녀",
      heightBlood: "168cm/A형",
      hobby: "드라이브",
      favoritePlayer: "배정대",
      motto: "겸손한 자신감",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/ab31d2493f6b4f7fbd44e0468b192563.png",
    linkUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/b2919bdaf81c429f8d11c46c266e9612.png",
  },
  {
    position: "치어리어",
    kName: "김진아",
    eName: "KIM JIN A",
    profile: {
      nickname: "찌나뇽",
      heightBlood: "170cm/A형",
      hobby: "영화보기",
      favoritePlayer: "강백호",
      motto: "해처럼 밝고 꽃처럼 아름답게",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/8c44a97eeac6408693402633b2bb3c50.png",
    linkUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/b2919bdaf81c429f8d11c46c266e9612.png",
  },
];

const Cheer: React.FC = () => {
  return (
    <SwiperContainer>
      <SwiperContainer>
        <StyledSwiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}>
          {cheerData.map((cheer, index) => (
            <SwiperSlide key={index}>
              <SlideContent>
                <CheerProfile
                  position={cheer.position}
                  kName={cheer.kName}
                  eName={cheer.eName}
                  profile={cheer.profile}
                  imageUrl={cheer.imageUrl}
                />
              </SlideContent>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </SwiperContainer>
    </SwiperContainer>
  );
};

export default Cheer;
