import Head from "@components/Head";
import Header from "@components/Header";

export default function Home() {
  return (
    <>
      <Head />
      <div className="flex min-h-screen flex-col justify-start bg-primary">
        <Header />
      </div>
    </>
  );
}
