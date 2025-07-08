// import { Jacques_Francois_Shadow } from "next/font/google";
// import { Itim } from "next/font/google";
// const jacquesFrancoisShadow = Jacques_Francois_Shadow({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-jacquesFrancoisShadow",
// });
// const itim = Itim({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-itim",
// });
// export default function Nav() {
//   return (
//     <>
//       <div
//         className="h-14 w-full items-center bg-[#1B1919] flex selection:bg-white selection:text-black"
//         draggable="false"
//       >
//         <p
//           className={`${jacquesFrancoisShadow.className} relative left-6 cursor-pointer`}
//         >
//           MV
//         </p>
//         <div className={`${itim.className} flex gap-7 relative left-250`}>
//           <p className="cursor-pointer">Work</p>
//           <p className="cursor-pointer">About</p>
//           <p className="cursor-pointer">Contact</p>
//         </div>
//       </div>
//     </>
//   );
// }
import { Jacques_Francois_Shadow } from "next/font/google";
import { Itim } from "next/font/google";

const jacquesFrancoisShadow = Jacques_Francois_Shadow({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jacquesFrancoisShadow",
});

const itim = Itim({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-itim",
});

export default function Nav() {
  return (
    <>
      <div
        className="h-14 w-full items-center bg-[#1B1919] flex justify-between px-4 sm:px-6 md:px-10 selection:bg-white selection:text-black"
        draggable="false"
      >
        <p
          className={`${jacquesFrancoisShadow.className} text-xl sm:text-2xl md:text-3xl cursor-pointer`}
        >
          MV
        </p>
        <div className={`${itim.className} flex gap-4 sm:gap-6 md:gap-8`}>
          <p className="cursor-pointer text-sm sm:text-base">Work</p>
          <p className="cursor-pointer text-sm sm:text-base">About</p>
          <p className="cursor-pointer text-sm sm:text-base">Contact</p>
        </div>
      </div>
    </>
  );
}
