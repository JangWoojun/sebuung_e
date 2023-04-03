import Head from "next/head";
import Layout from "./components/layout";
import ProjectItem from "./projects/project-item";
import { useState } from 'react';
import { NOTION_DATABASE_PROJECTS_ID, NOTION_TOKEN } from "./config";

const title = "세붕이 멤버들이 진행한\n"
const tagArr = ["iOS", "Android", "WEB", "모든"]

export default function Project({projects}) {
  console.log(projects)

  const [selectedType, setSelectedType] = useState(3);
  
  const filteredProjects = projects.filter(project => {
    const type = project.properties.태그.number;
    return selectedType === 3 || type === selectedType;
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
          <h1 className="text-3xl md:text-3xl lg:text-4xl whitespace-pre-line leading-snug font-bold mb-4 text-left ml-4  ">
              {title}<span className="text-sky-500">{tagArr[selectedType]}</span> 프로젝트들을 확인해보세요!
          </h1> 
          <div className="flex justify-start w-full max-w-lg items-start mt-10">
            <button
              className={`flex items-center justify-center w-1/4 h-12 rounded-full border ${
                selectedType === 3
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } mr-4 hover:bg-blue-500 hover:text-white transition-all duration-500 ml-4`}
              onClick={() => setSelectedType(3)}
            >
              <h2 className="text-lg font-medium">ALL</h2>
            </button>
            <button
              className={`flex items-center justify-center w-1/4 h-12 rounded-full border ${
                selectedType === 0
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } mr-4 hover:bg-blue-500 hover:text-white transition-all duration-500`}
              onClick={() => setSelectedType(0)}
            >
              <h2 className="text-lg font-medium">iOS</h2>
            </button>
            <button
              className={`flex items-center justify-center w-1/4 h-12 rounded-full border ${
                selectedType === 1
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } mr-4 hover:bg-blue-500 hover:text-white transition-all duration-500`}
              onClick={() => setSelectedType(1)}
            >
              <h2 className="text-lg font-medium">Android</h2>
            </button>
            <button
              className={`flex items-center justify-center w-1/4 h-12 rounded-full border ${
                selectedType === 2
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } mr-4 hover:bg-blue-500 hover:text-white transition-all duration-500`}
              onClick={() => setSelectedType(2)}
            >
              <h2 className="text-lg font-medium">WEB</h2>
            </button>
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
  }
}