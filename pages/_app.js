import "../styles/globals.css";
import Head from "@components/Head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useEffect } from "react";
import { useInitialDataStore } from "@store/storeInitialData";
import { useDataStore } from "@store/storeData";

MyApp.getInitialProps = async (ctx) => {
  const resDataCountries = await fetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
  );
  const dataCountries = await resDataCountries.json();
  return { data: dataCountries };
};

function MyApp({ Component, pageProps, data }) {
  const { setInitialData } = useInitialDataStore();
  const { setData } = useDataStore();
  useEffect(() => {
    setInitialData(data);
    setData(data);
  }, []);

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
