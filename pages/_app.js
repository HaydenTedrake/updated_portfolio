import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>hayden</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
