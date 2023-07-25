**프론트엔드 개발자 신동재를 소개하는 포트폴리오입니다.**

<br/>

## 배포

[포트폴리오](https://dongjae-protfolio.vercel.app/)

<br/>

## 기술 스택

- Next.js
- TypeScript
- Styled-Components
- ESLint

## 구현기능

### [Styled-Components] ThemeProvider로 공통 스타일 속성 관리

프로젝트를 진행하면서 자주 사용되는 공통 스타일 속성이 있습니다. 스타일을 컴포넌트마다 적용하면 컴포넌트의 수가 증가함에 따라 스타일 코드의 일관성이 떨어지고 재사용하기 어려워지는 것을 볼 수 있었습니다.

<br/>

이런 문제점을 Styled-Components의 ThemeProvider를 사용하여 해결하였습니다. Styled-Components의 ThemeProvider는 React의 Context API와 비슷하게 모든 리액트 컴포넌트에게 Theme 속성을 전달하는 역할을 합니다.

theme.ts 파일을 생성하여 자주 사용되는 스타일 속성을 작성하였습니다.

```ts
export const theme: DefaultTheme = {
  colors: {
    Light_Blue50: "#E1F5FE",
    Light_Blue100: "#80D8FF",
    Light_Blue200: "#00B0FF",
    Light_Blue400: "#2E8EFF",
    Light_Blue500: "#03A9F4",
    Light_Blue600: "#039BE5",
    Light_Blue700: "#0091EA",

    red500: "#F44336",
    red600: "#E53935",
    red700: "#D50000",

    white000: "#ffffff",

    blue: "#1890ff",
  },
  fontSize: {
    size08: "8px",
    size12: "12px",
    size15: "15px",
    size18: "18px",
    size20: "20px",
    size22: "22px",
    size24: "24px",
    size32: "32px",
  },
};
```

<br/>

그 후에 ThemeProvider를 Theme 스타일을 적용하려는 컴포넌트의 렌더트리 최상단에 배치하여 각 컴포넌트에서 원하는 스타일을 적용하였습니다.

```tsx
<ThemeProvider theme={theme}>
  <Header />
  <Component {...pageProps} />
  <Footer />
</ThemeProvider>
```

<br/>
<br/>

### 반응형 스타일을 적용하여 사용자의 접근성 향상

반응형 스타일은 애플리케이션이 다양한 화면 크기와 디바이스에 대해 적절하게 조정되도록 스타일을 적용하는 것을 말합니다.CSS의 미디어 쿼리(Media Query)를 사용하여 디바이스의 크기를 감지하고 이에 맞는 스타일을 적용하였습니다.

<br/>

**모바일**
![모바일](https://j.gifs.com/K8o3zl.gif)
<br/>

**태블릿**
![태플릿](https://j.gifs.com/lRyrE7.gif)
<br/>

**데스크탑**
![데스크탑](https://github.com/lIIIlIIIlIIIl/Portfolio/assets/101863629/6e737f32-1f69-4fa3-a822-87537e21ed53)
