"use client";

import {NextUIProvider} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";


interface ProviderProps {
    children: React.ReactNode;
}

export default function Providers({children} : ProviderProps){
    const pathname = usePathname();

    const {isLoaded} = useUser();

    if(!isLoaded){
      return null;
    }

    return (
        <NextUIProvider>
            {pathname !== "/dashboard/neew-email" && pathname !== "/" &&
      pathname !== "/sign-up" &&
      pathname !== "/subscribe" &&
      pathname !== "/success" &&
      pathname !== "/sign-in" ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll">
            
          </div>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
      
        </NextUIProvider>
    )
}