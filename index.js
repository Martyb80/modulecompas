
import Head from "next/head";
import dynamic from "next/dynamic";

const ModulekompasApp = dynamic(() => import("../components/ModulekompasApp"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Modulekompas - Leeruitkomsten</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-4">
        <ModulekompasApp />
      </main>
    </>
  );
}
