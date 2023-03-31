import Head from "next/head";
import Layout from "./components/layout";
import ProjectItem from "./projects/project-item";
import { NOTION_DATABASE_PROJECTS_ID, NOTION_TOKEN } from "./config";

export default function Project({projects}) {
    return (
        <Layout>
            <Head>
                <title>세붕이 프로젝트</title>
                <meta name='description' content='세붕이를 소개합니다'/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen mx-20 px-5 mb-10 mt-40">
              <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : <span className="pl-4 text-blue-500">{projects.results.length}</span></h1>
              <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
                {projects.results.map((aProject) => (
                    <ProjectItem key={aProject.id} data={aProject}/>
                ))}  
              </div>
            </div>
        </Layout>
    );
}



export async function getServerSideProps(context) {

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: NOTION_TOKEN });

  const databaseId = NOTION_DATABASE_PROJECTS_ID;
  const projects = await notion.databases.query({
    database_id: databaseId,
  });
  
  const projectsTitles = projects.results.map((aProject) =>
      aProject.properties.이름.title[0].plain_text
  )

  return {
    props: {projects},
  }
}