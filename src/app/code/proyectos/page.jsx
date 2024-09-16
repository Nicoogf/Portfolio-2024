'use client'
import React from 'react'
import { useConsole } from '@/context/ConsoleContext';
import { FaCircleInfo } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaCss3Alt } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSymbolVariable } from "react-icons/vsc";
import Link from 'next/link';
import { SiTypescript } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";

const page = () => {
    const {viewConsole} = useConsole()
    return (
        <main className="h-[100%] overflow-hidden selection:bg-violetborderinput/85">
            <section className="bg-bluedarkmain w-full">

                <article className="h-[37px] bg-[#1D1641] flex flex-row justify-center items-center w-[100%] max-w-[170px]  gap-x-1">
                    <SiTypescript className="text-[#2F74C0] text-base mr-1 " />
                    <p className="text-whitelettercode text-[11px]"> Proyectos.ts </p>
                    <p className="font-semibold mx-1 text-whitelettercode text-[11px]"> M </p>
                    <Link href="/code">
                        <RxCross2 className="text-whitelettercode hover:bg-[#302C4A] p-1 text-sm box-content rounded-md" />
                    </Link>
                </article>

            </section>

            <section className={`${viewConsole ? "h-[60%]" : "h-[80%]"} bg-bluedarkmain flex flex-col gap-y-[1px] overflow-hidden overflow-y-scroll  pb-20 code`}>
            <article className="flex flex-row items-center mt-3">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 1 </p>
                    <IoIosArrowForward className="text-graylettercode" />
                   <div className="ml-2">
                        <p>
                            <span className="text-[#FF2CD0]"> {`interface`} </span>
                            <span className="text-[#FFD41C]"> {`Project {`} </span>                                     
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 2 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`name`} </span>
                            <span className="text-[#FF2CD0]"> {`:`} </span>
                            <span className="text-[#FF2CD0]"> {`string `} </span>
                            <span className="text-pinkactive"> {`;`} </span>                                       
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 3 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`type`} </span>
                            <span className="text-[#FF2CD0]"> {`:`} </span>
                            <span className="text-[#08F3F1]"> {`"backend" `} </span>
                            <span className="text-[#FF2CD0]"> {`|`} </span>
                            <span className="text-[#08F3F1]"> {`"frontend" `} </span>
                            <span className="text-pinkactive"> {`;`} </span>                                       
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 4 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`technologies`} </span>
                            <span className="text-[#FF2CD0]"> {`:`} </span>
                            <span className="text-[#FF2CD0]"> {`string `} </span>
                            <span className="text-pinkactive"> {`;`} </span>                                       
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 5 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`link`} </span>
                            <span className="text-[#FF2CD0]"> {`:`} </span>
                            <span className="text-[#FF2CD0]"> {`string `} </span>
                            <span className="text-pinkactive"> {`;`} </span>                                       
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 6 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`repository`} </span>
                            <span className="text-[#FF2CD0]"> {`:`} </span>
                            <span className="text-[#FF2CD0]"> {`string `} </span>
                            <span className="text-pinkactive"> {`;`} </span>                                       
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 7 </p>                   
                   <div className="ml-2">
                        <p>                           
                            <span className="text-[#FFD41C]"> {`}`} </span>                                     
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 8 </p>                   
                   <div className="ml-2">
                       
                    </div>
                </article>



                <article className="flex flex-row items-center mt-3">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 9 </p>
                    <IoIosArrowForward className="text-graylettercode" />
                   <div className="ml-2">
                        <p>
                            <span className="text-[#FF2CD0]"> {`const`} </span>
                            <span className="text-pinkactive"> {`Proyecto_Uno `} </span>
                            <span className="text-[#FF2CD0]"> {`:`} </span>
                            <span className="text-[#FFD41C]"> {`Project `} </span>   
                            <span className="text-[#FF2CD0]"> {`=`} </span> 
                            <span className="text-[#FFD41C]"> {`{`} </span>                                   
                        </p>
                    </div>
                </article>

                
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 10 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`name :`} </span>      
                            <span className="text-[#08F3F1]"> {`"Sistema de gestion" `} </span>
                            <span className="text-pinkactive"> {`,`} </span>                                       
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 11 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`type :`} </span>                  
                            <span className="text-[#08F3F1]"> {`"backend`} </span>
                            <span className="text-pinkactive"> {`,`} </span>                                       
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 12 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`technologies`} </span>
                            <span className="text-pinkactive"> {`:`} </span>
                            <span className="text-[#08F3F1]"> {`"nodejs" `} </span>                          
                            <span className="text-pinkactive"> {`,`} </span>                                       
                        </p>
                    </div>
                </article>
              
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 13 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`link`} </span>
                            <span className="text-pinkactive"> {`:`} </span>
                            <span className="text-[#08F3F1]"> {`"https://open.spotify.com/collection/tracks"`} </span>
                            <span className="text-pinkactive"> {`,`} </span>                                       
                        </p>
                    </div>
                </article>
                
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 14 </p>                 
                   <div className="ml-16">
                        <p>
                            <span className="text-pinkactive"> {`repository`} </span>
                            <span className="text-pinkactive"> {`:`} </span>
                            <span className="text-[#08F3F1]"> {`"https://github.com/Nicoogf"`} </span>                                                                   
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 15 </p>                   
                   <div className="ml-2">
                        <p>                           
                            <span className="text-[#FFD41C]"> {`}`} </span>                                     
                        </p>
                    </div>
                </article>

                

            </section>

        </main>
    )
}

export default page