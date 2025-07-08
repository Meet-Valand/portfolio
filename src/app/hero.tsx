import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import { Itim } from "next/font/google";
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrumentSerif",
});
const itim = Itim({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-itim",
});
export default function Hero() {
  return (
    <div draggable="false">
      <div
        className={`${instrumentSerif.className} flex text-8xl font-extrabold gap-6 mt-8 p-4 items-center justify-center  selection:bg-white selection:text-black `}
      >
        <p className=""> CREATIVE</p>
        <p className="">WEB</p>
        <p className="">ARCHITECT</p>
      </div>
      <div
        className={`${itim.className} flex justify-between items-center w-6xl mt-5 ml-10  selection:bg-white selection:text-black`}
      >
        <p className="bg-[#1F1A1A] p-4 rounded-3xl">
          I DESIGN and DEVELOP modern, interactive <br /> and visually stunning
          websites that help
          <br /> brands stand out.
        </p>
        <p className="bg-[#1F1A1A] p-4 rounded-3xl">
          I’m passionate DESIGNER & DEV, might <br /> not have much experience
          but much more <br />
          SKILLS and HUNGER.{" "}
        </p>
      </div>
      <div className={`${itim.className} `}>
        <Image
          src="/HeroBg.png"
          alt="hero"
          width={900}
          height={600}
          className=" ml-40 mt-20 pointer-events-none select-none"
          draggable="false"
        />

        <div className="group absolute top-90 left-50">
          <div
            className="bg-[#68EEC8] rounded-full h-[130px] w-[130px] 
            transform transition-transform duration-700 ease-out
            group-hover:scale-100 group-hover:rounded-xl group-hover:rotate-0 
            backdrop-blur-sm group-hover:backdrop-blur-lg
            cursor-pointer flex items-center justify-center relative text-black rotate-6  selection:bg-white selection:text-black"
          >
            DESIGNING
            <br />
            WEBSITES &
            <br /> BRANDS
          </div>
        </div>

        <div className="group absolute top-120 left-170">
          <div
            className="bg-[#FFA200] rounded-2xl w-[150px] h-[90px] 
            transform transition-transform duration-700 ease-out
            group-hover:scale-125 group-hover:rounded-full group-hover:h-[150px]
            backdrop-blur-sm group-hover:backdrop-blur-lg
            cursor-pointer flex items-center justify-center relative  selection:bg-white selection:text-black"
          >
            MOTION & <br />
            INTERACTIVE
            <br /> DESIGNING
            <p className="text-black text-center opacity-0 translate-y-2 transition-all duration-500 delay-200 ease-out group-hover:opacity-100 group-hover:translate-y-0">
              {/* Add your text here */}
            </p>
          </div>
        </div>
        <div className="absolute group top-160 left-195">
          <div className="bg-[#d0d620] h-[40px] ml-3 group-hover:w-[150px] rounded-xl w-[240px] transition-all duration-500  ease-out text-black  selection:bg-white selection:text-black">
            <p className="p-2 flex gap-1">
              <p className="group-hover:bottom-10 group-hover:absolute">
                ANIMATIONS{" "}
              </p>{" "}
              OUT OF THE BOX
            </p>
          </div>
        </div>

        <div className="absolute w-48 h-48 flex items-center justify-center top-160 left-60 selection:bg-white selection:text-black">
          {/* Circular Text Moving Around */}
          <svg viewBox="0 0 200 200" className="absolute w-full h-full z-10">
            <defs>
              <path
                id="circlePath"
                d="
          M 100, 100
          m -75, 0
          a 75,75 0 1,1 150,0
          a 75,75 0 1,1 -150,0
        "
              />
            </defs>
            <text
              fill="#EF4444"
              fontSize="14"
              fontWeight="600"
              letterSpacing="2"
            >
              <textPath href="#circlePath" startOffset="0%">
                <animate
                  attributeName="startOffset"
                  values="0%;-100%"
                  dur="20s"
                  repeatCount="indefinite"
                />
                • FRONTEND • BACKEND • DESIGNING • CREATIVITY • DEV
              </textPath>
            </text>
          </svg>

          {/* Center Circle */}
          <div className="bg-pink-300 rounded-full w-[130px] h-[130px] flex items-center justify-center text-center  selection:bg-white selection:text-black">
            <p className="text-black font-bold text-m">
              ALL IN
              <br />
              ONE
              <br />
              PLACE
            </p>
          </div>
        </div>

        <div className="bg-[#8FA2F3] rounded-lg absolute top-140 left-20 w-[200px] h-[60px]  selection:bg-white selection:text-black">
          <p className=" p-2">
            EXPERIENCE ?<br /> WILL GAIN TOGETHER
          </p>
        </div>
      </div>
    </div>
  );
}
