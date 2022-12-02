import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Countries</title>
        <meta
          name="description"
          content="REST Countries API with color theme switcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-start">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="container mx-auto flex justify-between">
            <div className="text-xl">Where in the world?</div>
            <a className="text-xl">Where in the world?</a>
          </div>
        </div>
      </div>
    </>
  );
}
