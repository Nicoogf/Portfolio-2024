'use client'
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { HiMiniMinus } from "react-icons/hi2";
import { IoSquareOutline } from "react-icons/io5";
import Image from 'next/image';
import LogoVSC from "../../public/icon.svg"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useMenu } from '@/context/MenusContext';
import { useConsole } from '@/context/ConsoleContext';



const HeaderComponent = () => {
    const { closeMenus, toggleViewFile, viewFile, toggleEditFile, viewEdit, viewSelection, toggleView, toggleSelection, viewView, toggleGo, viewGo, toggleRun, viewRun } = useMenu()
    const { toggleConsole , viewConsole ,setViewConsole } = useConsole()

    return (
        <header className="w-full h-[35px] bg-blueheader text-whitelettercode flex flex-row justify-between items-center z-50" >

            <section className="flex items-center gap-x-[2px]">
                <Image src={LogoVSC} className="w-4 h-4 ml-3 mr-2 cursor-pointer" alt="Logo Visual Studio Code" onClick={closeMenus} />

                <article className="relative z-50" onClick={toggleViewFile}>
                    <h6 className={`${viewFile ? "bg-violetborderinput text-whitelettercode" : ""} text-sm px-2 py-[2px] hover:bg-violetborderinput hover:text-whitelettercode rounded-md cursor-pointer text-graylettercode transition-all duration-75 `}> File </h6>
                    <div className={`${viewFile ? "flex translate-y-0 opacity-100 z-50" : "hidden"} transition-all duration-75 delay-75 shadow-lg bg-graymenu text-white absolute w-[195px] rounded-md flex flex-col p-2 mt-1 -ml-1 z-[-50]`}>
                        <Link className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover" href="/"> Go Home </Link>
                        <Link className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover" href="/portfolio"> Go portfolio personal stantadar </Link>                       
                        <div className="border-b block border-gray-500 my-1" />
                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Exit </p>
                            <p className="text-[14px] pr-5 "> Alt+F4</p>
                        </div>
                    </div>
                </article>

                <article className="relative z-50" onClick={toggleEditFile}>
                    <h6 className={`${viewEdit ? "bg-violetborderinput text-whitelettercode" : " "} text-[13px] px-2 py-[2px] hover:bg-violetborderinput hover:text-whitelettercode rounded-md cursor-pointer text-graylettercode transition-all duration-75`} > Edit </h6>
                    <div className={`${viewEdit ? "flex translate-y-0 opacity-100" : "hidden"} transition-all duration-75 delay-75 shadow-lg bg-graymenu text-white absolute w-[195px] rounded-md flex flex-col p-2 mt-1 -ml-1 z-[-50]`}>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Theme </p>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Languaje </p>
                       
                        
                    </div>
                </article>

                <article className="relative z-50 hidden xl:block" onClick={toggleRun}>
                    <h6 className={`${viewRun ? "bg-violetborderinput text-whitelettercode" : " "} text-[13px] px-2 py-[2px] hover:bg-violetborderinput rounded-md cursor-pointer text-graylettercode hover:text-whitelettercode transition-all duration-75`} > Terminal </h6>
                    <div className={`${viewRun ? "flex translate-y-0 opacity-100" : "hidden"} transition-all duration-75 delay-75 shadow-lg bg-graymenu text-white absolute w-[195px] rounded-md flex flex-col p-2 mt-1 -ml-1 z-[-50]`}>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover" onClick={() => setViewConsole(true)}>  New Terminal </p>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover" onClick={() => setViewConsole(false)}>  Close Terminal </p>
                      
                    </div>
                </article>

            </section>

            <section className="flex flew-row items-center justify-end  w-full h-[100%]" onClick={closeMenus}>

                <section className="bg-violetinput border border-violetborderinput rounded-md w-[30%] hidden md:flex md:justify-center py-[2px] mr-auto ml-48 xl:ml-64">
                    <p className="text-[12px] text-center text-graylettercode"> portfolio-frontend</p>
                </section>

                <section className="text-whitelettercode flex flex-row items-center h-[100%]">
                    <Link className="h-[100%]" href="/">
                        <HiMiniMinus className="text-lg px-3 h-[100%]  box-content hover:bg-violetborderinput transition-colors duration-150" />
                    </Link>
                    <button className="h-[100%]">
                        <IoSquareOutline className="text-sm px-3 h-[100%]  box-content hover:bg-violetborderinput transition-colors duration-150" />
                    </button>
                    <Link className="h-[100%]" href="/">
                        <RxCross2 className="text-md px-3 h-[100%] box-content hover:bg-red-600 transition-colors duration-150" />
                    </Link>


                </section>

            </section>


        </header>
    )
}

export default HeaderComponent