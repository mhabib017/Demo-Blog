import NavBar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return <div className="container mx-auto">
    <NavBar />
    <div className="px-8 md:px-12 xl:px-16">
      <Component {...pageProps} />
    </div>
  </div>;
}
