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
    const { viewConsole } = useConsole()
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

            <section className={`${viewConsole ? "h-[60%]" : "h-[80%]"} bg-bluedarkmain flex flex-col gap-y-[1px] overflow-hidden overflow-y-scroll  pb-20 code`}>

                <article className="flex flex-row items-center mt-3">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 1 </p>
                    <IoIosArrowForward className="text-graylettercode" />
                    <div className="ml-2">
                        <p>
                            <span className="text-[#0098DF]"> {` // Puedes hacer un console.log en consola del script (node tecnologias.js)`} </span>
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center mt-3">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 1 </p>
                    <IoIosArrowForward className="text-graylettercode" />
                    <div className="ml-2">
                        <p>
                            <span className="text-[#0098DF] -mx-1"> {`console`} </span>
                            <span className="text-pinkactive -mx-1"> {`.`} </span>
                            <span className="text-[#FFD41C] -ml-1"> {`log(`} </span>                            
                            <span className="text-[#0EF3DB]"> {`"Hello word desde portfolio personal"`} </span>
                            <span className="text-[#FFD41C]"> {`)`} </span>
                            <span className="text-whitelettercode"> {`;`} </span>
                        </p>
                    </div>
                </article>
                
                <article className="flex flex-row items-center mt-3">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 1 </p>
                    <IoIosArrowForward className="text-graylettercode" />
                    <div className="ml-2">
                        <p>
                            <span className="text-[#FF2CD0]"> {`export const`} </span>
                            <span className="text-pinkactive"> {`technologies_list`} </span>
                            <span className="text-[#FF2CD0]"> {`=`} </span>
                            <span className="text-[#FFD41C]"> {`{`} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 2 </p>
                    <IoIosArrowForward className="text-graylettercode" />
                    <div className="ml-2">
                        <p>
                            <span className="text-pinkactive ml-4"> {`frontend : `} </span>
                            <span className="text-[#DA70D6]"> {`{ `} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 3 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-pinkactive ml-4"> {`react : `} </span>
                            <span className="text-[#0EF3DB]"> {`"React Js" `} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 4 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-pinkactive ml-4"> {`next : `} </span>
                            <span className="text-[#0EF3DB]"> {`"Next Js" `} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 5 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-pinkactive ml-4"> {`tailwind : `} </span>
                            <span className="text-[#0EF3DB]"> {`"Tailwind CSS" `} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 6 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-[#DA70D6]"> {`}`} </span>
                            <span className="text-pinkactive ml-4"> {`,`} </span>
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 7 </p>
                    <IoIosArrowForward className="text-graylettercode" />
                    <div className="ml-2">
                        <p>
                            <span className="text-pinkactive ml-4"> {`backend : `} </span>
                            <span className="text-[#DA70D6]"> {`{ `} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 8 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-pinkactive ml-4"> {`js : `} </span>
                            <span className="text-[#0EF3DB]"> {`"Javascript" `} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 9 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-[#0098DF] ml-4"> {`// ts : `} </span>
                            <span className="text-[#0098DF]"> {`"Typescript"    Tecnología que he comenzado a explorar recientemente`} </span>
                            <span className="text-[#0098DF] "> {`,`} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 10 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-pinkactive  ml-4"> {`node : `} </span>
                            <span className="text-[#0EF3DB]"> {`"Node Js" `} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 9 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-[#0098DF] ml-4"> {`// java : `} </span>
                            <span className="text-[#0098DF]"> {`"Java"    Tecnología que he comenzado a explorar recientemente`} </span>
                            <span className="text-[#0098DF] "> {`,`} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 12 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-[#DA70D6]"> {`}`} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 13 </p>
                    <IoIosArrowForward className="text-graylettercode" />
                    <div className="ml-2">
                        <p>
                            <span className="text-pinkactive ml-4"> {`database : `} </span>
                            <span className="text-[#DA70D6]"> {`{ `} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 14 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-pinkactive ml-4"> {`mongo: `} </span>
                            <span className="text-[#0EF3DB]"> {`"MongoDB" `} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 15 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-pinkactive ml-4"> {`postgresql : `} </span>
                            <span className="text-[#0EF3DB]"> {`"PostgreSQL" `} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 16 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-[#DA70D6]"> {`}`} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 17 </p>
                    <IoIosArrowForward className="text-graylettercode" />
                    <div className="ml-2">
                        <p>
                            <span className="text-pinkactive ml-4"> {`version_controller : `} </span>
                            <span className="text-[#DA70D6]"> {`{ `} </span>
                        </p>
                    </div>
                </article>
                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 18 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-pinkactive ml-4"> {`git: `} </span>
                            <span className="text-[#0EF3DB]"> {`"GitHub" `} </span>
                            <span className="text-pinkactive "> {`,`} </span>
                        </p>
                    </div>
                </article>


                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 19 </p>
                    <div className="ml-12">
                        <p>
                            <span className="text-[#DA70D6]"> {`}`} </span>

                        </p>
                    </div>
                </article>

                <article className="flex flex-row items-center -mt-1">
                    <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-selected"> 20 </p>
                    <div className="ml-4">
                        <p>
                            <span className="text-[#FFD41C]"> {`}`} </span>
                            <span className="text-whitelettercode"> {`;`} </span>
                        </p>
                    </div>
                </article>

            </section>

        </main>
    )
}

export default page