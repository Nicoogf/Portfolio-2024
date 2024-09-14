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



const HeaderComponent = () => {
    const { closeMenus, toggleViewFile, viewFile, toggleEditFile, viewEdit, viewSelection, toggleView, toggleSelection, viewView, toggleGo, viewGo, toggleRun, viewRun } = useMenu()
    // const [viewFile, setViewFile] = useState(false);
    // const [viewEdit , setViewEdit ] = useState(false);
    // const [viewSelection , setViewSelection ] = useState(false);
    // const [viewView , setViewView ] = useState(false);
    // const [viewGo , setViewGo] =  useState(false);
    // const [ viewRun , setViewRun] = useState( false )
    // const router = useRouter()

    // const toggleViewFile = () => {
    //     setViewFile(!viewFile)
    //     setViewEdit(false)
    //     setViewSelection(false)
    //     setViewView(false)     
    //     setViewGo(false)   
    //     setViewRun(false)
    // }

    // const toggleEditFile = () => {
    //     setViewEdit(!viewEdit)
    //     setViewFile(false)
    //     setViewSelection(false)
    //     setViewView(false)  
    //     setViewGo(false)   
    //     setViewRun(false)
    // }

    // const toggleSelection = () => {
    //     setViewSelection(!viewSelection)
    //     setViewFile(false)
    //     setViewEdit(false)
    //     setViewView(false)  
    //     setViewGo(false)   
    //     setViewRun(false)
    // }

    // const toggleView = () => {
    //     setViewView(!viewView)
    //     setViewFile(false)
    //     setViewEdit(false)
    //     setViewSelection(false)
    //     setViewGo(false)   
    //     setViewRun(false)
    // }

    // const toggleGo = () =>{
    //     setViewGo(!viewGo)
    //     setViewFile(false)
    //     setViewEdit(false)
    //     setViewSelection(false)
    //     setViewView(false)  
    //     setViewRun(false)
    // }

    // const toggleRun = () =>{
    //     setViewRun(!viewRun)
    //     setViewFile(false)
    //     setViewEdit(false)
    //     setViewSelection(false)
    //     setViewView(false)  
    //     setViewGo(false)   
    // }

    // const closeMenus = () =>{
    //     if( viewFile || viewEdit || viewSelection || viewView || viewGo || viewRun) {
    //         setViewRun(false)
    //         setViewFile(false)
    //         setViewEdit(false)
    //         setViewSelection(false)
    //         setViewView(false)  
    //         setViewGo(false)  
    //     }          
    // }
    const router = useRouter()


    return (
        <header className="w-full h-[35px] bg-blueheader text-whitelettercode flex flex-row justify-between items-center z-50" >

            <section className="flex items-center gap-x-[2px]">
                <Image src={LogoVSC} className="w-4 h-4 ml-3 mr-2 cursor-pointer" alt="Logo Visual Studio Code" onClick={closeMenus} />

                <article className="relative z-50" onClick={toggleViewFile}>
                    <h6 className={`${viewFile ? "bg-violetborderinput text-whitelettercode" : ""} text-sm px-2 py-[2px] hover:bg-violetborderinput hover:text-whitelettercode rounded-md cursor-pointer text-graylettercode transition-all duration-75 `}> File </h6>
                    <div className={`${viewFile ? "flex translate-y-0 opacity-100 z-50" : "hidden"} transition-all duration-75 delay-75 shadow-lg bg-graymenu text-white absolute w-[195px] rounded-md flex flex-col p-2 mt-1 -ml-1 z-[-50]`}>
                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Volver a Inicio </p>
                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Ver Portfolio Estandar </p>
                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Contacto </p>
                        <div className="border-b block border-gray-500 my-1" />
                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Salir </p>
                            <p className="text-[14px] pr-5 "> Alt+F4</p>
                        </div>
                    </div>
                </article>

                <article className="relative z-50" onClick={toggleEditFile}>
                    <h6 className={`${viewEdit ? "bg-violetborderinput text-whitelettercode" : " "} text-[13px] px-2 py-[2px] hover:bg-violetborderinput hover:text-whitelettercode rounded-md cursor-pointer text-graylettercode transition-all duration-75`} > Edit </h6>
                    <div className={`${viewEdit ? "flex translate-y-0 opacity-100" : "hidden"} transition-all duration-75 delay-75 shadow-lg bg-graymenu text-white absolute w-[195px] rounded-md flex flex-col p-2 mt-1 -ml-1 z-[-50]`}>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Deshacer </p>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Rehacer </p>

                        <div className="border-b block border-gray-500 my-1" />

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Cortar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+X</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Copiar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+C</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Pegar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+V</p>
                        </div>

                        <div className="border-b block border-gray-500 my-1" />
                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Emmet : Expand Abbreviation</p>
                            <p className="text-[14px] pr-5 "> Tab </p>
                        </div>
                    </div>
                </article>

                <article className="relative z-50" onClick={toggleSelection}>
                    <h6 className={`${viewSelection ? "bg-violetborderinput text-whitelettercode" : " "} text-[13px] px-2 py-[2px] hover:bg-violetborderinput hover:text-whitelettercode rounded-md cursor-pointer text-graylettercode transition-all duration-75`}> Selection </h6>
                    <div className={`${viewSelection ? "flex translate-y-0 opacity-100" : "hidden"} transition-all duration-75 delay-75 shadow-lg bg-graymenu text-white absolute w-[195px] rounded-md flex flex-col p-2 mt-1 -ml-1 z-[-50]`}>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Deshacer </p>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Rehacer </p>

                        <div className="border-b block border-gray-500 my-1" />

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Cortar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+X</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Copiar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+C</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Pegar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+V</p>
                        </div>

                        <div className="border-b block border-gray-500 my-1" />
                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Emmet : Expand Abbreviation</p>
                            <p className="text-[14px] pr-5 "> Tab </p>
                        </div>
                    </div>
                </article>

                <article className="relative  z-50 hidden lg:block" onClick={toggleView}>
                    <h6 className={`${viewView ? "bg-violetborderinput text-whitelettercode" : " "} text-[13px] px-2 py-[2px] hover:bg-violetborderinput rounded-md cursor-pointer text-graylettercode hover:text-whitelettercode transition-all duration-75`} > View </h6>
                    <div className={`${viewView ? "flex translate-y-0 opacity-100" : "hidden"} transition-all duration-75 delay-75 shadow-lg bg-graymenu text-white absolute w-[195px] rounded-md flex flex-col p-2 mt-1 -ml-1 z-[-50]`}>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Appearance </p>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Language </p>

                        <div className="border-b block border-gray-500 my-1" />

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Cortar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+X</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Copiar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+C</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Pegar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+V</p>
                        </div>

                        <div className="border-b block border-gray-500 my-1" />
                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Emmet : Expand Abbreviation</p>
                            <p className="text-[14px] pr-5 "> Tab </p>
                        </div>
                    </div>
                </article>

                <article className="relative z-50 hidden xl:block" onClick={toggleGo}>
                    <h6 className={`${viewGo ? "bg-violetborderinput text-whitelettercode" : " "} text-[13px] px-2 py-[2px] hover:bg-violetborderinput rounded-md cursor-pointer text-graylettercode hover:text-whitelettercode transition-all duration-75`} > Go </h6>
                    <div className={`${viewGo ? "flex translate-y-0 opacity-100" : "hidden"} transition-all duration-75 delay-75 shadow-lg bg-graymenu text-white absolute w-[195px] rounded-md flex flex-col p-2 mt-1 -ml-1 z-[-50]`}>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Appearance </p>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Language </p>

                        <div className="border-b block border-gray-500 my-1" />

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Cortar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+X</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Copiar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+C</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Pegar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+V</p>
                        </div>

                        <div className="border-b block border-gray-500 my-1" />
                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Emmet : Expand Abbreviation</p>
                            <p className="text-[14px] pr-5 "> Tab </p>
                        </div>
                    </div>
                </article>

                <article className="relative z-50 hidden xl:block" onClick={toggleRun}>
                    <h6 className={`${viewRun ? "bg-violetborderinput text-whitelettercode" : " "} text-[13px] px-2 py-[2px] hover:bg-violetborderinput rounded-md cursor-pointer text-graylettercode hover:text-whitelettercode transition-all duration-75`} > Run </h6>
                    <div className={`${viewRun ? "flex translate-y-0 opacity-100" : "hidden"} transition-all duration-75 delay-75 shadow-lg bg-graymenu text-white absolute w-[195px] rounded-md flex flex-col p-2 mt-1 -ml-1 z-[-50]`}>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Appearance </p>

                        <p className="text-[14px] rounded-md pl-5 py-[5px] cursor-pointer hover:bg-bluehover"> Language </p>

                        <div className="border-b block border-gray-500 my-1" />

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Cortar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+X</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Copiar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+C</p>
                        </div>

                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Pegar </p>
                            <p className="text-[14px] pr-5 "> Ctrl+V</p>
                        </div>

                        <div className="border-b block border-gray-500 my-1" />
                        <div className="py-[5px] flex flex-row justify-between rounded-md items-center cursor-pointer hover:bg-bluehover">
                            <p className="text-[14px] pl-5 "> Emmet : Expand Abbreviation</p>
                            <p className="text-[14px] pr-5 "> Tab </p>
                        </div>
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