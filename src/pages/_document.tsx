import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {" "}
            {initialProps.styles} {sheet.getStyleElement()}{" "}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>신동재 - 프론트엔드 개발자</title>
          <meta name="description" content="프론트엔드 개발자 신동재입니다." />
          <meta name="keyword" content="프론트엔드 개발자" />
          <meta property="og:title" content="신동재 | 프론트엔드 개발자" />
          <meta
            property="og:description"
            content="사용자 경험에 민감하고 소통을 중요하게 생각하는 개발자 신동재입니다. 새로운 기술과 트랜드를 익히고 도전하는 것을 좋아합니다. 어제보다 나은 사람이 되기 위해 계속해서 공부하고 있습니다."
          />
          <meta property="og:image" content="/Project/02.png" />
          <link rel="icon" href="/logo01.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
