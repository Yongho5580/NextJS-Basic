import HeadTitle from "@/components/HeadTitle";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import "@/styles/globals.css";

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Layout>
      <HeadTitle title={pathname} />
      <Component {...pageProps} />
    </Layout>
  );
}
