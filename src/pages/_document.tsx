import NavBar from "@/components/navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="container mx-auto">
          <NavBar />
          <div className="px-4 lg:px-12">
            <Main />
          </div>

        </div>
        <NextScript />
      </body>
    </Html>
  );
}
