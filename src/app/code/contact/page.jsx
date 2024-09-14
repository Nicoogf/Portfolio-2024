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



const page = () => {

    const { toggleConsole, viewConsole } = useConsole();
    return (
        <main className="h-[100%] overflow-hidden selection:bg-violetborderinput/85">
            <section className="bg-bluedarkmain w-full">

                <article className="h-[37px] bg-[#1D1641] flex flex-row justify-center items-center w-[100%] max-w-[170px]  gap-x-1">
                    <FaCss3Alt className="text-[#42A5F5] text-base mr-1 " />
                    <p className="text-whitelettercode text-[11px]"> contacto.ccs </p>
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
                            <span className="text-[#FF2CD0]"> {`@tailwind`} </span>
                            <span className="text-pinkactive  mr-6"> {`base;`} </span>
                            <span className="text-[#FA9730]"> {`Unknown at rule @tailwind`} </span>                        
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 2 </p>
                    <div className="ml-2">
                        <p>
                            <span className="text-[#FF2CD0]"> {`@tailwind`} </span>
                            <span className="text-pinkactive mr-6"> {`components;`} </span>
                            <span className="text-[#FA9730]"> {`Unknown at rule @tailwind`} </span>                        
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 3 </p>
                    <div className="ml-2">
                        <p>
                            <span className="text-[#FF2CD0]"> {`@tailwind`} </span>
                            <span className="text-pinkactive  mr-6"> {`utilities;`} </span>
                            <span className="text-[#FA9730]"> {`Unknown at rule @tailwind`} </span>                        
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 4 </p>
                    <div className="ml-2">
                       
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 5 </p>
                    <div className="ml-2">
                        <p>
                            <span className="text-[#FF2CD0]"> {`@import`} </span>
                            <span className="text-[#FFD400]"> {` url(`} </span>
                            <span className="text-[#0EF3FF]"> {`'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap'`} </span>                        
                            <span className="text-[#FFD400] "> {`)`} </span>
                            <span className="text-pinkactive"> {`;`} </span>
                        </p>
                    </div>
                </article>

               
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 6 </p>
                    <div className="ml-2">
                       
                    </div>
                </article>
                

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 7 </p>
                    <div className="ml-2">
                       
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 8 </p>
                    <div className="ml-2">
                        <p>
                            <span className="text-[#FFD700]"> {`.redes{`} </span>                          
                        </p>
                    </div>
                </article>

            

                  
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 9 </p>
                    <div className="ml-8">
                        <p>
                            <span className="text-[#0EF3FF]"> {`instagram`} </span> 
                            <span className="text-[#FF2CD0]"> {`:`} </span>  
                            <span className="text-[#FFD700]"> {`url`} </span>
                            <span className="text-[#DA60A2]"> {`(`} </span> 
                            <span className="text-[#0EF3FF]"> {`"https://www.instagram.com"`} </span>
                            <span className="text-[#DA60A2]"> {`)`} </span>   
                            <span className="text-pinkactive"> {`;`} </span>                               
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 10 </p>
                    <div className="ml-8">
                        <p>
                            <span className="text-[#0EF3FF]"> {`git-hub`} </span> 
                            <span className="text-[#FF2CD0]"> {`:`} </span>  
                            <span className="text-[#FFD700]"> {`url`} </span>
                            <span className="text-[#DA60A2]"> {`(`} </span> 
                            <span className="text-[#0EF3FF]"> {`"https://github.com/Nicoogf"`} </span>
                            <span className="text-[#DA60A2]"> {`)`} </span>   
                            <span className="text-pinkactive"> {`;`} </span>                               
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 11 </p>
                    <div className="ml-8">
                        <p>
                            <span className="text-[#0EF3FF]"> {`linkedin`} </span> 
                            <span className="text-[#FF2CD0]"> {`:`} </span>  
                            <span className="text-[#FFD700]"> {`url`} </span>
                            <span className="text-[#DA60A2]"> {`(`} </span> 
                            <span className="text-[#0EF3FF]"> {`"https://www.linkedin.com/in/nicolas-falabella-02ab47251/"`} </span>
                            <span className="text-[#DA60A2]"> {`)`} </span>   
                            <span className="text-pinkactive"> {`;`} </span>                               
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 12 </p>
                    <div className="ml-8">
                        <p>
                            <span className="text-[#0EF3FF]"> {`email`} </span> 
                            <span className="text-[#FF2CD0]"> {`:`} </span>                      
                            <span className="text-[#ED21CE] no-selected"> {`nicolasgfalabella@gmail.com`} </span>                    
                            <span className="text-pinkactive "> {`;`} </span>                               
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 13 </p>
                    <div className="ml-2">
                        <p>
                            <span className="text-[#FFD700]"> {`}`} </span>                          
                        </p>
                    </div>
                </article>

            </section>


        </main>
    )
}

export default page