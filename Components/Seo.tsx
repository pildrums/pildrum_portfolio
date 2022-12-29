import Head from "next/head";

interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  return (
    <Head>
      <title>{title} | 김필진 포트폴리오</title>
    </Head>
  );
}
