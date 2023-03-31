import Image from "next/image"

export default function ProjectItem({data}) {
    
    const title = data.properties.이름.title[0].plain_text
    const github = data.properties.Github.url
    const content = data.properties.설명.rich_text[0].text.content
    const date = data.properties.기간.number
    const member = data.properties.팀원.multi_select
    const image = data.properties.이미지.url

    return (
        <div className="flex flex-col m-3 bg-slate-700 rounded-md rounded-xl w-full
        transition duration-300 transform border border-gray-300
        hover:scale-105 hover: shadow-lg">
            <a className="rounded-t-xl bg-black" href={github}>
            <Image alt="프로젝트 이미지" src={image} width={150} height={150} quality={100} layout="responsive" objectFit="cover"/>
            </a>
            <div className="p-4 flex flex-col">
                <h1>{title}</h1>
                <h3>{content}</h3>
                <h4>{date}</h4>
                <div className="flex items-start mt-2">
                    {member.map((aMember) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 w-30" key={aMember.id}>{aMember.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}