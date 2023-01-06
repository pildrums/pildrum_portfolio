import Layout from "Components/Layout";
import Seo from "Components/Seo";
import styled from "styled-components";

interface ICareerProps {}

const Info = [
  {
    id: 1,
    title: "(주)그리너스 친환경 시멘트 관련 업무 솔루션 개발",
    period: "2021.07 ~ 2021.09",
    description:
      "UI/UX 퍼블리싱 및 클라이언트 개발(React.js) / DRF 연동 - 기여도 40%",
  },
  {
    id: 2,
    title: "창업 정보제공 플랫폼 Project-B(가칭)",
    period: "2021.03 ~ 2021.07",
    description: `
    IT창업자들을 위한 정보제공 플랫폼 Project-B 서비스 개발
    Web: React(JavaScript) - 기여도 80%
    App: React-Native(JavaScript / Expo) - 기여도 60%
    `,
  },
  {
    id: 3,
    title: "웹툰 / 웹소설 플랫폼 Alock",
    period: "2021.01 ~ 2021.03",
    description: "플랫폼 전체 UI/UX 퍼블리싱 (HTML/CSS/JS) - 기여도 100%",
  },
];

export default function Career() {
  return (
    <Layout>
      <Seo title="커리어" />
      <Space />
      <Wrapper>
        <Title>Career</Title>
        <List>
          {Info.map((item) => (
            <Item key={item.id}>
              <h1>{item.title}</h1>
              <span>{item.period}</span>
              <span>{item.description}</span>
            </Item>
          ))}
        </List>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.black.lighter};
  padding-bottom: 120px;
  overflow-y: hidden;
`;

const Space = styled.div`
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 40px;
  border-bottom: 4px solid ${(props) => props.theme.white.lighter};
  color: ${(props) => props.theme.white.lighter};
  font-weight: 600;
  height: 56px;
  margin-top: 40px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  padding: 0 30px;
`;

const Item = styled.div`
  background: #fff;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;
