'use client'
import React from 'react'
import { useConsole } from '@/context/ConsoleContext';
import { FaCircleInfo } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaCss3Alt } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSymbolVariable } from "react-icons/vsc";
import Link from 'next/link';
import { DiHtml5 } from "react-icons/di";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";

const page = () => {
    const {viewConsole} = useConsole()
    return (
        <main className="h-[100%] overflow-hidden selection:bg-violetborderinput/85">
            <section className="bg-bluedarkmain w-full">

                <article className="h-[37px] bg-[#1D1641] flex flex-row justify-center items-center w-[100%] max-w-[170px]  gap-x-1">
                    <IoLogoJavascript className="text-[#FFD400] text-base mr-1 " />
                    <p className="text-whitelettercode text-[11px]"> tecnologias.js </p>
                    <p className="font-semibold mx-1 text-whitelettercode text-[11px]"> M </p>
                    <Link href="/code">
                        <RxCross2 className="text-whitelettercode hover:bg-[#302C4A] p-1 text-sm box-content rounded-md" />
                    </Link>
                </article>
            </section>

            <section className={`${viewConsole ? "h-[60%]" : "h-[80%]"} bg-bluedarkmain flex flex-col gap-y-2 overflow-hidden overflow-y-scroll  pb-20 code`}>
            <article className="flex flex-row items-center mt-3">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 1 </p>
                    <div className="ml-2">
                        <p>
                            <span className="text-[#FF2CD0]"> {`const`} </span>
                            <span className="text-pinkactive"> {`technologies_list`} </span>
                            <span className="text-[#FF2CD0]"> {`=`} </span>
                            <span className="text-[#FFD41C]"> {`{`} </span>                        
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 2 </p>
                    <IoIosArrowForward className="text-graylettercode" />      
                    <div className="ml-2">
                        <p>
                            <span className="text-pinkactive ml-4"> {`frontend : `} </span>
                            <span className="text-[#DA70D6]"> {`{ `} </span>                                                 
                        </p>
                    </div>
                </article>

            </section>

        </main>
    )
}

export default page