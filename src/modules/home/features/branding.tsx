import Marquee from "react-fast-marquee"
import Image from "next/image";
import { partners } from "@/app/configs/constants";


const Branding = () => {
    return (
        <div className="border-t border-b border-[#000] py-10">
            <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-[400] z-20 relative">
        CREATED BY THE EARLY MORNING BREW TEAM
      </h3>
      <div className="w-full text-center pt-1">
        <h3 className="uppercase bg-[#F091DD] rounded p-2 text-xl md:text-2xl text-center inline-block font-medium z-20 relative">
          NOW POWERING THE WORLD&apos;S TOP NEWSLETTERS
        </h3>
      </div>
      
        </div>
    )
}




export default Branding;