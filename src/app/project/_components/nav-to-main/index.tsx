"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import "./index.scss";

type Props = {};

function NavToMain({}: Props) {
    const router = useRouter();
    return (
        <div className="nav-back" onClick={() => router.back()}>
            <Image width={16} height={16} src={"/images/arrow.svg"} alt="arrow" />
            <p> Back to List</p>
        </div>
    );
}

export default NavToMain;
