import Image from "next/image";
import styled from "styled-components";

const imgtList = [
  {
    src: "/Logo/html.png",
    alt: "HTML",
    category: "Frontend",
    etc: "태그를 활용한 마크업",
  },
  {
    src: "/Logo/css.png",
    alt: "CSS",
    category: "Frontend",
    etc: "Grid, Flex 레이아웃 활용",
  },
  {
    src: "/Logo/styledcomponents.png",
    alt: "Styled-Components",
    category: "Frontend",
    etc: "컴포넌트 단위, props 활용",
  },
  {
    src: "/Logo/javascript.png",
    alt: "JavaScript",
    category: "Frontend",
    etc: "모던 자바스크립트 문법",
  },
  {
    src: "/Logo/typescript.png",
    alt: "TypeScript",
    category: "Frontend",
    etc: "타입 선언, 문법 지향",
  },
  {
    src: "/Logo/reactjs.png",
    alt: "React",
    category: "Frontend",
    etc: "Hook•Redux•CSS-in-JS 활용",
  },
  {
    src: "/Logo/nextjs.png",
    alt: "Nextjs",
    category: "Frontend",
    etc: "SSR·SEO 최적화 개발",
  },
  {
    src: "/Logo/redux.png",
    alt: "Redux",
    category: "Frontend",
    etc: "Redux-toolkit ",
  },
  {
    src: "/Logo/reactquery.png",
    alt: "React-Query",
    category: "Frontend",
    etc: "서버 API 통신, 데이터 관리",
  },
  {
    src: "/Logo/github.png",
    alt: "GitHub",
    category: "Devops",
    etc: "기본적인 사용법 숙지, 브랜치 활용",
  },
  {
    src: "/Logo/notion.png",
    alt: "Notion",
    category: "Devops",
    etc: "협업을 위한 다양한 문서 활용",
  },
];
const StackCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

const StackBox = styled.li`
  display: flex;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5px;

  > h6 {
    margin: 0;
    font-size: 14px;

    > span {
      margin-left: 8px;
      font-size: 12px;
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  > p {
    font-size: 12px;
  }
`;

const Stack = () => {
  return (
    <StackCard>
      {imgtList.map((img, index) => (
        <StackBox key={index}>
          <ImgBox>
            <Image src={img.src} alt={img.alt} width={36} height={36} />
          </ImgBox>
          <TextBox>
            <h6>
              {img.alt}
              <span>{img.category}</span>
            </h6>
            <p>{img.etc}</p>
          </TextBox>
        </StackBox>
      ))}
    </StackCard>
  );
};

export default Stack;
