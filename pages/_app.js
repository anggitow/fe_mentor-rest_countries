import "../styles/globals.css";
import Head from "@components/Head";
import Header from "@components/Header";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <div className="flex min-h-screen flex-col justify-start bg-primary">
        <Header />
        <main className="flex-auto">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
