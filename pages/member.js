import Layout from "./components/layout";
import Head from "next/head";

export default function Member() {
    return (
        <Layout>
            <Head>
                <title>세붕이 멤버</title>
                <meta name='description' content='세붕이를 소개합니다'/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
        </Layout>
      );
}
  