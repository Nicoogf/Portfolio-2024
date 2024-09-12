import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaRegWindowMaximize } from "react-icons/fa";
import { HiMiniMinus } from "react-icons/hi2";
import { SiVisualstudiocode } from "react-icons/si";

const VisualStudioCodeApp = () => {
    return (
        <main className="w-full h-[100%] bg-blue-500">
            <header className="w-full bg-blueheader text-whitelettercode flex flex-row justify-between items-center py-1">

                <section className="flex items-center gap-6">
                <SiVisualstudiocode className="text-bluelettercode text-lg ml-2" />
                <article>
                    <h6 className="text-sm"> File </h6>
                </article>
                <article>
                    <h6 className="text-sm"> Edit </h6>
                </article>
                <article>
                    <h6 className="text-sm"> Selection </h6>
                </article>
                <article>
                    <h6 className="text-sm"> View </h6>
                </article>
                <article>
                    <h6 className="text-sm"> Go </h6>
                </article>
                <article>
                    <h6 className="text-sm"> Run </h6>
                </article>
                </section>

                <section className="bg-violetinput border border-violetborderinput rounded-md w-[30%] hidden md:flex md:justify-center py-1">
                    <p className="text-sm text-center text-graylettercode"> portfolio-frontend</p>
                </section>

                <section className="text-whitelettercode flex flex-row items-center">
                    <HiMiniMinus className="text-xl px-3 py-2 box-content"/>
                    <FaRegWindowMaximize className="text-xl px-3 py-2 box-content"/>
                    <RxCross2 className="text-xl px-3 py-2 box-content"/>
                </section>
            </header>
            VisualStudioCodeApp
        </main>
    )
}

export default VisualStudioCodeApp;