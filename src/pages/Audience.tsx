import styled from "styled-components";
import accrueImg from "../assets/images/AudienceImg/accrue.png"; // 이미지 import
import recordImg from "../assets/images/AudienceImg/record.png"; // 이미지 import

const AudienceWrapper = styled.div`
  width: 100%;
`;

const SeasonAudience = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const Img = styled.img`
  width: 100%; // 이미지의 너비를 50px로 설정
  height: auto; // 비율을 유지하면서 높이를 자동으로 조절
`;

const Audience = () => {
  return (
    <AudienceWrapper>
      <SeasonAudience>
        <Img src={accrueImg} alt="2021 시즌 관중 현황" />
      </SeasonAudience>
      <SeasonAudience>
        <Img src={recordImg} alt="2021 시즌 관중 기록" />
      </SeasonAudience>
    </AudienceWrapper>
  );
};

export default Audience;
