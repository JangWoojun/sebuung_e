import logo from '/public/logo1.png'
import Image from 'next/image'


export default function Hero() {
    return (
      <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center -mt-30">
            <h2 className="title-font sm:text-3xl text-3xl mb-4 font-bold text-sky-500 ml-2">IT 지식 공유 커뮤니티</h2>
            <h1 className='title-font sm:text-6xl text-3xl mb-4 font-bold text-blue-400 mb-12'>SEBUUNG E</h1>
            <p className="mb-8 leading-relaxed text-xl break-keep font-semibold mt-5">
              <span className="font-extrabold text-sky-500">세붕이</span>
              는 <span className="font-extrabold">세명컴퓨터고등학교의 IT 기술 커뮤니티</span>로써 학년, 성별, 학과의 상관없이 열정을 가진 학생들이 모여 서로를 이끌어 <span className="font-extrabold">세상에 기여할 수 있는 사람</span>이 되도록 노력하고 있습니다.
            </p>
            {/* <div className="flex justify-center">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">세붕이에 대해 알아보기</button>
            </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-30">
          <Image src={logo} alt="SB logo"/>
        </div>
      </>
    );
}