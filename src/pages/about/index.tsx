interface AboutProps {
  title: string;
  content: string;
}

export default function About({ title, content }: AboutProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        <p className="mt-4 text-center">
          {content}
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps() {

  return {
    props: {
      title: "About Us",
      content: "This is an about page.",
    }
  }
}
