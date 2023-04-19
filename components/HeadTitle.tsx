import Head from "next/head";

interface HeadTitleProps {
  title: string;
}

export default function HeadTitle({ title }: HeadTitleProps) {
  return (
    <Head>
      <title>{`여기는 ${title}`}</title>
    </Head>
  );
}
