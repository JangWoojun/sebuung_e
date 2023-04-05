import Image from "next/image"

export default function ActivityItem({activity}) {
    const name = activity.properties.이름.title[0].text.content
    const image = activity.properties.이미지.url
    const member = activity.properties.팀원.multi_select
    const sub = activity.properties.상세.rich_text[0].text.content
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap border-gray-300 border rounded-lg border-5">
                <div className="flex-shrink-0 w-full h-56 overflow-hidden">
                    <Image width={500} height={500} alt="team" className="rounded-lg object-cover object-center" src={image}/>
                </div>
                <div className="w-full bg-sky-100">
                    <h2 className="title-font font-bold text-lg text-gray-500 h-20 ml-5 mt-5">{name}</h2>
                    <div className="flex flex-row flex-wrap ml-5 -mt-10 mb-5">
                        {member.map((aMember) => (
                            <h1
                                className="px-2 py-1 mr-2 rounded-md bg-sky-500 w-20rem font-bold text-white"
                                key={aMember.id}
                            >
                                {aMember.name}
                            </h1>
                        ))}
                    </div>
                    <p className="mb-4 text-sky-500 ml-5 font-black text-3xl">{sub}</p>
                </div>
            </div>
        </div>
    );
}
