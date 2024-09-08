import WP_STA from "../../assets/images/WP_STA.jpg";
import { IntroWrapper, Image, Title, SubTitleH6, UnderBar, TitleH6, ContentsP } from "../../styles/WizParkIntro";

interface SectionProps {
    title: string;
    content: string;
}

const Section = ({ title, content }: SectionProps) => (
    <div>
        <SubTitleH6>{title}</SubTitleH6>
        <ContentsP>{content}</ContentsP>
    </div>
);

const WizParkIntro = () => {
    return (
        <>
            <IntroWrapper>
                <Image src={WP_STA} />
                <Title>
                    <TitleH6>복합 문화공간의 첨단 야구장! 수원구장</TitleH6>
                    <UnderBar />
                </Title>
                <Section
                    title="최적의 경기 환경 조성"
                    content="야구장의 온도와 습도, 조명을 자동 조절할 수 있는 유비쿼터스 센서 네트워크 시스템(USN)을 도입하여 선수단과 팬들에게 경기에 더욱 집중할 수 있는 최적의 경기 환경을 제공합니다."
                />
                <Section
                    title="스마트한 구장 시설"
                    content="구장 내 무선 인터넷(WIFI) 설치 등 ICT 인프라 확충을 통해 다양한 모바일 기기를 활용하여 입장 등록, 실시간 주차 정보, 지정석 찾기, 음식 주문 등 다른 경기장에서 경험하지 못했던 스마트한 콘텐츠를 이용하실 수 있습니다."
                />
                <Section
                    title="다양한 관람층을 위한 복합 문화공간"
                    content="익사이팅석, 프렌들리석, 커플석, 패밀리석, 장애인석 등 다양한 관람층을 고려하여 완벽한 관람시설을 제공하고, 각종 센서와 모바일 기기가 설치된 체험존 등을 제공하여 경기 관람 뿐 아니라 오락, 레저, 교육의 복합 문화공간을 선보입니다."
                />
            </IntroWrapper>
        </>
    );
};
export default WizParkIntro