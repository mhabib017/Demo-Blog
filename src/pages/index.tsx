import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
        <div>
        <h1 className="text-4xl font-bold text-center">Demo Blog</h1>
        <p className="mt-4 text-center">This is a simple blog built with Next.js and Firebase.</p>
        </div>
    </div>
  );
}
