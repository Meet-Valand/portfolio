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
    <div draggable="false" className="relative overflow-hidden px-4 pb-32">
      {/* Heading */}
      <div
        className={`${instrumentSerif.className} flex flex-wrap text-4xl md:text-6xl lg:text-8xl font-extrabold gap-4 mt-8 items-center justify-center selection:bg-white selection:text-black`}
      >
        <p>CREATIVE</p>
        <p>WEB</p>
        <p>ARCHITECT</p>
      </div>

      {/* Intro Text Blocks */}
      <div
        className={`${itim.className} flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto mt-5 gap-4 selection:bg-white selection:text-black`}
      >
        <p className="bg-[#1F1A1A] p-4 rounded-3xl text-center md:text-left text-sm sm:text-base">
          I DESIGN and DEVELOP modern, interactive <br />
          and visually stunning websites that help
          <br /> brands stand out.
        </p>
        <p className="bg-[#1F1A1A] p-4 rounded-3xl text-center md:text-left text-sm sm:text-base">
          I’m passionate DESIGNER & DEV, might <br />
          not have much experience but much more <br />
          SKILLS and HUNGER.
        </p>
      </div>

      {/* Image + Positioned Elements */}
      <div className={`${itim.className} relative w-full`}>
        <Image
          src="/HeroBg.png"
          alt="hero"
          width={1200}
          height={800}
          className="mx-auto mt-20 pointer-events-none select-none max-w-full h-auto"
          draggable="false"
        />

        {/* Green Bubble */}
        <div className="absolute top-[5%] left-[5%] sm:top-[5%] sm:left-[5%] xs:top-[12%] xs:left-1/2 xs:-translate-x-1/2">
          <div className="group bg-[#68EEC8] rounded-full h-[100px] w-[100px] sm:h-[70px] sm:w-[140px]  transform transition-transform duration-700 ease-out group-hover:scale-100 group-hover:rounded-xl group-hover:rotate-0 backdrop-blur-sm group-hover:backdrop-blur-lg cursor-pointer flex items-center justify-center text-xs sm:text-sm md:text-base text-black rotate-6 text-center selection:bg-white selection:text-black">
            DESIGNING <br /> WEBSITES & <br /> BRANDS
          </div>
        </div>

        {/* Orange Box */}
        <div className="absolute top-[10%] right-[10%] sm:top-[10%] sm:right-[10%] xs:top-[45%] xs:left-1/2 xs:-translate-x-1/2">
          <div className="group bg-[#FFA200] rounded-2xl w-[130px] sm:w-[150px] h-[80px] sm:h-[90px] transform transition-transform duration-700 ease-out group-hover:scale-125 group-hover:rounded-full group-hover:h-[150px] backdrop-blur-sm group-hover:backdrop-blur-lg cursor-pointer flex items-center justify-center text-xs sm:text-sm md:text-base text-center selection:bg-white selection:text-black">
            MOTION & <br />
            INTERACTIVE <br /> DESIGNING
          </div>
        </div>

        {/* Yellow Box */}
        <div className=" cursor-pointer absolute bottom-[15%] right-[10%] sm:bottom-[10%] sm:right-[10%] xs:bottom-[25%] xs:left-1/2 xs:-translate-x-1/2">
          <div className="group bg-[#d0d620] w-[200px] sm:w-[240px] h-[40px] rounded-xl text-black transition-all duration-500 ease-out selection:bg-white selection:text-black flex items-center justify-center text-xs sm:text-sm">
            <span className="relative group-hover:bottom-10 group-hover:absolute">
              ANIMATIONS
            </span>
            &nbsp;OUT OF THE BOX
          </div>
        </div>

        {/* Experience Box (Blue) */}
        <div className="absolute bottom-[10%] left-[5%] sm:bottom-[10%] sm:left-[5%] xs:bottom-[12%] xs:left-1/2 xs:-translate-x-1/2">
          <div className="bg-[#8FA2F3] rounded-lg w-[180px] sm:w-[200px] h-[60px] flex items-center justify-center text-xs sm:text-sm selection:bg-white selection:text-black text-center p-2">
            EXPERIENCE ? <br /> WILL GAIN TOGETHER
          </div>
        </div>

        {/* Rotating Circular Text + Pink Center Circle */}
        <div className="absolute top-[50%] left-[15%] sm:left-[25%] xs:left-1/2 xs:-translate-x-1/2 xs:top-[80%] sm:top-[50%] transform -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center selection:bg-white selection:text-black">
          <svg viewBox="0 0 200 200" className="absolute w-full h-full z-10">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
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
          <div className="bg-pink-300 rounded-full w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] flex items-center justify-center text-center text-black font-bold text-xs sm:text-sm">
            ALL IN <br />
            ONE <br />
            PLACE
          </div>
        </div>
      </div>
    </div>
  );
}
