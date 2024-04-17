'use client'

import { useState } from "react";

const Pricing = () => {
    const [active, setActive] = useState("Monthly");
    return(
        <div className="w-full bg-[#fec8eb]">
            <div className="w-[95%] m-auto py-5">
                <div className="w-full md:flex justify-between">
                    <div>
                        <h3 className=""></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing