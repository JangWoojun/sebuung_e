import Head from "next/head";
import Layout from "./components/layout";
import ProjectItem from "./projects/project-item";
import { useState } from 'react';
import { NOTION_DATABASE_PROJECTS_ID, NOTION_TOKEN } from "./config";

const title = "년도에 세붕이 멤버들이\n 진행한 프로젝트들을 확인해보세요!"

export default function Project({projects}) {
  console.log(projects)

  const [selectedYear, setSelectedYear] = useState(2023);

  const filteredProjects = projects.filter(project => {
    const year = project.properties.기간.number;
    return year === selectedYear;
  });

  return (
    <Layout>
      <Head>
        <title>세붕이 프로젝트</title>
        <meta name='description' content='세붕이를 소개합니다'/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font mb-0">
        <div className="container mx-auto px-5 py-24 md:flex-row flex-col items-start">
          <h1 className="text-3xl md:text-3xl lg:text-4xl whitespace-pre-line leading-snug font-bold mb-4 text-left ml-5">
            {selectedYear}{title}
          </h1> 
          <div className="flex justify-between w-full max-w-lg mx-auto items-start mt-32">
            <div
              className={`flex items-center justify-center w-1/2 h-12 rounded-full border ${
                selectedYear === 2023 
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } mr-4 hover:bg-blue-500 hover:text-white transition-all duration-500`}
              onClick={() => setSelectedYear(2023)}
            >
              <h2 className="text-lg font-medium">2023년</h2>
            </div>
            <div
              className={`flex items-center justify-center w-1/2 h-12 rounded-full border ${
                selectedYear === 2022 
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } hover:bg-blue-500 hover:text-white transition-all duration-500`}
              onClick={() => setSelectedYear(2022)}
            >
              <h2 className="text-lg font-medium">2022년</h2>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
            {filteredProjects.map(project => (
              <ProjectItem key={project.id} project={project} />
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
  const databaseId = NOTION_DATABASE_PROJECTS_ID;
  const { results } = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: { projects: results },
  };
}