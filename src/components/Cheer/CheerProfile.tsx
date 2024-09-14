import React from "react";
import styled from "styled-components";
import CheerInfo from "./CheerInfo";

type CheerProps = {
  position: string;
  kName: string;
  eName: string;
  profile: {
    nickname: string;
    heightBlood: string;
    hobby: string;
    favoritePlayer: string;
    motto: string;
  };
  imageUrl: string;
};

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 620px;
  margin: 0 auto;
`;

const ProfileContainer = styled.div`
  height: 74.2%;
  border: 1px solid #bbb;
  max-width: 990px;
  margin-left: auto;
  margin-right: auto;
`;

const CheerProfile: React.FC<CheerProps> = ({ position, kName, eName, profile, imageUrl }) => {
  return (
    <SlideWrapper>
      <ProfileContainer>
        <CheerInfo position={position} kName={kName} eName={eName} profile={profile} imageUrl={imageUrl} />
      </ProfileContainer>
    </SlideWrapper>
  );
};

export default CheerProfile;
