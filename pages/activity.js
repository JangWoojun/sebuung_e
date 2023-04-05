import Layout from "./components/layout";
import Head from "next/head";
import { useState } from 'react';
import ActivityItem from "./activitys/activity-item";
import { NOTION_TOKEN, NOTION_DATABASE_ACTIVITYS_ID } from "./config";
import Animation from "./components/home/animation";

export default function Activity({activity}) {

    const n = "\n"
    
    const [selectedActivity, setSelectedActivity] = useState(3);

    const filteredActivity = activity.filter(activity => {
      const type = activity.properties.타입.number;
      return selectedActivity === 3 || type === selectedActivity;
    });

    const count0 = filteredActivity.filter(activity => activity.properties.타입.number === 0).length;
    const count1 = filteredActivity.filter(activity => activity.properties.타입.number === 1).length;

    return (
        <Layout>
            <Head>
                <title>세붕이 활동내역</title>
                <meta name='description' content='세붕이를 소개합니다'/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section className="flex min-h-screen flex-col justify-center text-gray-600 body-font mb-0">
                <div className="container mx-auto px-5 py-24 md:flex-row flex-col items-start">
                <div className="flex items-center justify-between4">
                  <div className="ml-5 text-2xl whitespace-pre-line leading-snug font-medium break-keep"><span className="text-6xl font-black text-sky-500">세붕이 멤버활동{n}{n}</span>성장에 대한 열정을 가진 저희 <span className="text-blue-500 font-bold">세붕이 멤버들은</span> 지금까지 <span className="text-blue-500 font-bold">{count0}개의 외부 대회</span>에서 수상을 하였고 세붕이 자체적으로 세미나를 개최하여 <span className="text-blue-500 font-bold">총 {count1}개의 세미나를 성공적으로</span> 진행했습니다!</div>
                  <Animation />
                </div>
                <div className="flex justify-start w-full max-w-lg items-start">
            <button
              className={`ml-5 flex items-center justify-center w-1/4 h-12 rounded-full border ${
                selectedActivity === 3
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } mr-4 hover:bg-blue-500 hover:text-white transition-all duration-500 `}
              onClick={() => setSelectedActivity(3)}
            >
              <h2 className="text-lg font-medium">ALL</h2>
            </button>
            <button
              className={`flex items-center justify-center w-1/4 h-12 rounded-full border ${
                selectedActivity === 0
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } mr-4 hover:bg-blue-500 hover:text-white transition-all duration-500`}
              onClick={() => setSelectedActivity(0)}
            >
              <h2 className="text-lg font-medium">대회</h2>
            </button>
            <button
              className={`flex items-center justify-center w-1/4 h-12 rounded-full border ${
                selectedActivity === 1
                  ? 'bg-blue-500 text-white' 
                  : 'border-gray-300 text-gray-500'
              } mr-4 hover:bg-blue-500 hover:text-white transition-all duration-500`}
              onClick={() => setSelectedActivity(1)}
            >
              <h2 className="text-lg font-medium">세미나</h2>
            </button>
          </div>
                <div class="grid grid-cols-1 md:grid-cols-3">
                    {filteredActivity.map(activity => (
                    <ActivityItem key={activity.id} activity={activity} />
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
    const databaseId = NOTION_DATABASE_ACTIVITYS_ID;
    const { results } = await notion.databases.query({
      database_id: databaseId,
    });
    return {
      props: { activity: results },
    }
}
  