import Animation from "./animation";

export default function Hero() {
    return (
      <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">IT 지식 공유 커뮤니티</h2>
            <h1 className='title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900 mb-12'>SEBUUNG_E</h1>
            <p className="mb-8 leading-relaxed">세붕이는 세명컴퓨터고등학교 인공과 소속 학생들이 활동하는 IT 지식 정보 공유를 위해 모인 커뮤니티로써 저희의 목표는 모든 세붕이 구성원과 세명컴퓨터 학생들 모두 지식을 나누며 함께 성장해 나가는 것입니다.</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">세붕이 멤버 활동 확인하기</button>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation/>
        </div>
      </>
    );
}