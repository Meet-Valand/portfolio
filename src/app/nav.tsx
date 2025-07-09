import { Jacques_Francois_Shadow, Itim } from "next/font/google";

const jacquesFrancoisShadow = Jacques_Francois_Shadow({
  subsets: ["latin"],
  weight: "400",
});
const itim = Itim({ subsets: ["latin"], weight: "400" });

export default function Nav() {
  return (
    <div className="h-14 w-full bg-[#1B1919] flex items-center justify-between px-6 selection:bg-white selection:text-black">
      <p className={`${jacquesFrancoisShadow.className} text-lg sm:text-xl`}>
        MV
      </p>
      <div className={`${itim.className} hidden sm:flex gap-6`}>
        <p className="cursor-pointer">Work</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Contact</p>
      </div>
    </div>
  );
}
