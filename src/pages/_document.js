/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import createEmotionCache from "@/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import Document, { Head, Html, Main, NextScript } from "next/document";
import PropTypes from "prop-types";

export default function MyDocument(props) {
  const { emotionStyleTags } = props;

  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins"
        ></link>
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body
        style={{
          overflow: "hidden",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

MyDocument.propTypes = {
  emotionStyleTags: PropTypes.array.isRequired,
};
