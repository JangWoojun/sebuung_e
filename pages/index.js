import Layout from './components/layout'
import Hero from './components/home/hero'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
          <title>세붕이 홈페이지</title>
          <meta name='description' content='세붕이를 소개합니다'/>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <Hero/>
            </div>
      </section>
    </Layout>
  )
}
