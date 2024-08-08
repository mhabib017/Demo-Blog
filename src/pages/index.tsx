import Link from "next/link";



interface HomeProps {
  title: string,
  content: string,
  linkLabel: string,
  link: string,

}
export default function Home({ title, content, linkLabel, link }: HomeProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        <div className="space-y-8">
          <p className="mt-4 text-center">{content}</p>
          <div>
            <Link className="p-4 bg-slate-900 hover:bg-slate-600 rounded" href={link}>{linkLabel}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {

  return {
    props: {
      title: "Demo Blog Project",
      content: "This is a simple blog built with Next.js and Firebase.",
      linkLabel: "View All Blogs",
      link: "/blogs",
    }
  }
}