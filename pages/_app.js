import "../styles/globals.css";
import Head from "@components/Head";
import Header from "@components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <div className="flex min-h-screen flex-col justify-start bg-primary">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
