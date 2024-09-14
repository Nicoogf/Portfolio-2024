import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSymbolVariable } from "react-icons/vsc";
import Link from 'next/link';
import { AiFillFilePdf } from "react-icons/ai";

const page = () => {
  return (
    <main className= "h-[100%] overflow-hidden">
    <section className="bg-bluedarkmain w-full">

      <article className="h-[37px] bg-[#1D1641] flex flex-row justify-center items-center w-[100%] max-w-[170px]  gap-x-1">
        <AiFillFilePdf className="text-red-500 text-base mr-1 " />
        <p className="text-whitelettercode text-xs"> curriculum.pfd </p>
        <p className="font-semibold mx-1 text-whitelettercode text-[11px]"> M </p>
        <Link href="/code">
        <RxCross2 className="text-whitelettercode hover:bg-[#302C4A] p-1 text-sm box-content rounded-md" />
        </Link>
      </article>

    </section>

    <sectcion className="h-[25px] bg-bluedarkmain flex flex-row items-center w-[100%] gap-x-1">
      <div className="text-whitelettercode ml-4 text-sm flex flex-row items-center gap-x-[2px]"> 
        <Link href="/code" className="text-xs"> portfolio-vsc </Link> 
        <MdKeyboardArrowRight className="text-xl" />
        <p className="text-xs"> src </p>
        <MdKeyboardArrowRight className="text-xl"/>
        <div className="flex flex-row items-center">
        <AiFillFilePdf className="text-red-500 text-base mr-1 " />
        <p className="text-xs"> curriculum.pfd </p>
        </div>          
        <MdKeyboardArrowRight className="text-xl"/>
        <div className="flex flex-row items-center gap-x-1">
        <VscSymbolVariable className="text-[#63ADC6] text-lg" />
        <p className="text-xs"> Page </p>
        </div>
       
      </div>
    </sectcion>

    
</main>
  )
}

export default page