'use client';

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const Toolbar = () => {
const {user} = useUser();

    return (
        <>
        <Button color="primary" className="text-lg">
            Start Trial
        </Button>
        {
            user ? (
                <>
                <Link href={"/dashboard"}>
                    <Image src = {user?.imageUrl} alt="" width={40} height={40} className="rounded-full"/>
                </Link>
                </>
            ) : (
                <Link href={"/sign-in"}>Login</Link>
            )
        }
        
        </>
    )
};


export default Toolbar