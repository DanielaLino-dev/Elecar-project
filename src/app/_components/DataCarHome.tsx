'use client';

import Image from "next/image";
import React from "react";

interface DataCarProps{
    icon:  string;
    title: string;
    subTitle: string;
    altImage: string;
}

const DataCarHome = ({icon, title, subTitle, altImage}: DataCarProps) => {

    return (
        <div className=" flex flex-col items-center gap-4">
            <Image
                alt={altImage}
                src={icon}
            />
            <div className="flex flex-col gap-1">
                <p className="font-bold">{title}</p>
                <p className="font-extralight text-gray-500">{subTitle}</p>
            </div>
        </div>
    )

}

export default DataCarHome;