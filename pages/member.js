import Layout from "./components/layout";
import Head from "next/head";
import { useState } from 'react';
import MemberIntroduction from "./members/member-introduction";
import { NOTION_TOKEN, NOTION_DATABASE_MEMBERS_ID } from "./config";

export default function Member({members}) {
  const [selectedYear, setSelectedYear] = useState(0);

  const filteredMembers = members.filter(member => {
    const year = member.properties.타입.number;
    return year === selectedYear;
  });

  return (
    <Layout>
      <Head>
        <title>세붕이 멤버</title>
        <meta name='description' content='세붕이를 소개합니다'/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font mb-0">
        <div className="container mx-auto px-5 py-24 md:flex-row flex-col items-start">
        <h1 className="text-5xl md:text-5xl lg:text-5xl whitespace-pre-line leading-snug font-bold mb-4 text-center">
          <span className="text-sky-500">세붕이</span>를 통해 세상을 빛낸 멤버들입니다!
        </h1>
          <div className="flex justify-between w-full max-w-lg mx-auto items-start mt-32">
            <button
              className={`flex items-center justify-center w-1/2 h-12 rounded-full border ${
                selectedYear === 0
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } mr-4 hover:bg-blue-500 hover:text-white transition-all duration-500`}
              onClick={() => setSelectedYear(0)}
            >
              <h2 className="text-lg font-medium">재학</h2>
            </button>
            <button 
              className={`flex items-center justify-center w-1/2 h-12 rounded-full border ${
                selectedYear === 1
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } hover:bg-blue-500 hover:text-white transition-all duration-500`}
              onClick={() => setSelectedYear(1)}
            >
              <h2 className="text-lg font-medium">졸업</h2>
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4">
            {filteredMembers.map(member => (
              <MemberIntroduction key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { Client } = require('@notionhq/client');
  const notion = new Client({ auth: NOTION_TOKEN });
  const databaseId = NOTION_DATABASE_MEMBERS_ID;
  const { results } = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: { members: results },
  }
}
