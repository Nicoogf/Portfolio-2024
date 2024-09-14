'use client'
import { useConsole } from '@/context/ConsoleContext';
import React from 'react'
import { VscVscode } from "react-icons/vsc";
import { AiFillBulb } from "react-icons/ai";
import { GoStarFill } from "react-icons/go";
import { useMenu } from '@/context/MenusContext';



const page = () => {
  const { viewSrc, toggleViewFolder ,setViewPortfolioFolder } = useMenu()
  return (
    <main className="h-[100%] overflow-hidden flex flex-col relative py-24  px-48 ">
      <h2 className="text-white text-4xl font-semibold z-50"> Visual Portfolio Code </h2>
      <h3 className="text-whitelettercode text-2xl z-50">  Nicolas Falabella </h3>
      <section className="z-50 mt-10 flex flex-row">
        <article className="w-[40%] max-w-[430px] flex flex-col items-start ">
          <h4 className="text-whitelettercode text-lg"> Recent </h4>
          <h6 className="text-[#3794FF] text-sm cursor-pointer" onClick={()=>setViewPortfolioFolder(true)}> portfolio-vsc <span className="text-whitelettercode mx-2"> C:/Desktop/portfolio-vsc</span> </h6>
        </article>

        <article className="w-[40%]  max-w-[430px] flex flex-col gap-y-2">

          <h4 className="text-whitelettercode text-lg"> Walkthroughs </h4>

          <section className="bg-[#04112C] overflow-hidden rounded-xl py-6 px-10 relative">
            <h6 className="text-whitelettercode font-semibold"> Get started with VS Code</h6>
            <h6 className="text-whitelettercode text-sm"> Customize your editor, learn the basics, and start coding</h6>
            <div className=" absolute bottom-0 left-0 border-b-4 border-[#3794FF] w-[40%] " />
            <GoStarFill className="text-whitelettercode bg-pinklettercode absolute top-0 left-0 py-1 px-3 text-xs box-content rounded-br-lg" /> 
          </section>

          <section className="flex flex-row items-center bg-[#04112C] rounded-xl gap-x-3 p-2">
            <AiFillBulb className="text-[#3794FF]" />
            <p className="font-semibold text-whitelettercode"> Lear the fundamentals </p>
          </section>
          <section className="flex flex-row items-center bg-[#04112C] rounded-xl gap-x-3 p-2">
            <AiFillBulb className="text-[#3794FF]" />
            <p className="font-semibold text-whitelettercode"> Lear the fundamentals </p>
          </section>
          <section className="flex flex-row items-center bg-[#04112C] rounded-xl gap-x-3 p-2">
            <AiFillBulb className="text-[#3794FF]" />
            <p className="font-semibold text-whitelettercode"> Lear the fundamentals </p>
          </section>



        </article>
      </section>
      <VscVscode className="text-[#020918] text-[350px] absolute inset-0 m-auto " />
    </main>
  )
}

export default page