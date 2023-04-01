import Image from "next/image"

export default function ProjectItem({ project }) {
  const title = project.properties.이름.title[0].plain_text
  const github = project.properties.Github.url
  const content = project.properties.설명.rich_text[0].text.content
  const member = project.properties.팀원.multi_select
  const image = project.properties.이미지.url
  const type = project.properties.분류.multi_select

  return (
    <a className="bg-white mx-5" href={github}>
      <div className="flex bg-white rounded-md rounded-xl w-full
        transition duration-300 transform border border-gray-300
        hover:scale-105 hover:shadow-lg my-5">

        <div className="flex-shrink-0 mr-4 flex justify-center items-center">
          <Image className="rounded-xl ml-4" alt="프로젝트 이미지" src={image} width={150} height={150} quality={100} />
        </div>

        <div className="w-full p-4 flex flex-col text-slate-700">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h3 className="h-20 text-sm md:text-base lg:text-base break-words mt-2">{content}</h3>
          <div className="flex items-start mt-2">
          {type.map((aType) => (
              <h1
                className="px-2 py-1 mr-2 rounded-md bg-sky-400 w-20rem font-bold text-white"
                key={aType.id}
              >
                {aType.name}
              </h1>
            ))}
            {member.map((aMember) => (
              <h1
                className="px-2 py-1 mr-2 rounded-md bg-sky-500 w-20rem font-bold text-white"
                key={aMember.id}
              >
                {aMember.name}
              </h1>
            ))}
          </div>
        </div>

      </div>
    </a>
  );
}
