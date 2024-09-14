'use client'
import React ,{ useState , useEffect}  from 'react'
import { FaRegCopy } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { VscDebugAlt } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscRemoteExplorer } from "react-icons/vsc";
import { BiLogoMongodb } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { IoGitMergeOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { ImClock } from "react-icons/im";
import { RiReactjsLine } from "react-icons/ri";


const MainApp = () => {

    const [ viewPortfolioFolder , setViewPortfolioFolder] = useState(false)
    const [ viewOnlineFolder , setViewOnlineFolderr] = useState(false)
    const [ viewTimeLine , setViewTimeLine ] = useState(false)
    const [ viewSrc , setViewSrc ] = useState(false)
    const [ changesGit , setChangesCommit ] = useState(false)

    const toggleViewFolder =() =>{
        if(viewSrc){
            setViewSrc(false)
        }
        setViewPortfolioFolder(!viewPortfolioFolder)
    }
    const toggleViewOnlineFolder =() =>{
        setViewOnlineFolderr(!viewOnlineFolder)
    }
    const toggleViewTimelineFolder =() =>{
        setViewTimeLine(!viewTimeLine)
    }
    const toggleViewSrc =() =>{
        setViewSrc(!viewSrc)
    }

    useEffect(() => {
       
        const interval = setInterval(() => {
            setChangesCommit(changesGit => !changesGit); 
        }, 5000);    
        
        return () => clearInterval(interval);
      }, []);

    return (
        <main className="w-full bg-green-400 grid grid-cols-12 h-[calc(100vh-56px)]">

            <nav className="bg-red-500 col-span-2 md:col-span-4 lg:col-span-3 xl:col-span-2 h-[100%] flex flex-row">

                <section className="bg-bluedarkmain flex flex-col h-[100%] p-3 gap-y-6">
                    <FaRegCopy className=" text-2xl text-pinkactive transition-all duration-100"/>
                    <LiaSearchSolid className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100" />

                    <div className="relative">
                    <p className="absolute text-whitelettercode bg-pinkactive rounded-full w-4 h-4 r text-center text-[10px] -bottom-2 -right-2 flex justify-center items-center font-semibold"> 
                       {changesGit ? <ImClock className="font-semibold" /> : <span> 4 </span>  }                       
                    </p>
                    <IoGitMergeOutline className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100"/>
                    </div>    

                    <VscDebugAlt className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100"/>
                   
                    <div className="relative">
                    <p className="absolute text-whitelettercode bg-pinkactive rounded-full w-4 h-4 r text-center text-[10px] -bottom-2 -right-2 flex justify-center items-center font-semibold"> 
                      <span> 1 </span>                         
                    </p>
                    <VscExtensions className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100"/>
                    </div>    
                    <VscRemoteExplorer className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100"/>
                    <BiLogoMongodb className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100"/>
                    <FaDocker className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100"/>
                </section>

                <section className="bg-red-500 h-[100%] w-full">

                   <div className="flex flex-row items-center justify-between p-2 bg-bluedarkmain text-whitelettercode">
                    <h6 className="text-[11px]"> EXPLORER</h6>
                    <IoIosMore className=""/>
                   </div>

                   <section className="bg-[#04112E] w-full flex flex-col">

                        <article className="flex flex-row text-[#169AFF] items-center cursor-pointer" onClick={toggleViewFolder}>
                        <MdKeyboardArrowRight className={`text-[#B9AE90] text-xl ${viewPortfolioFolder ? "rotate-90" : ""} transition-all duration-300`}/>
                        <h6 className="font-bold text-[11px]">PORTFOLIO-VSC</h6>
                        </article>

                        <article className={` ${viewPortfolioFolder ? "flex flex-row " : "hidden"} ml-4  text-[#169AFF] items-center gap-x-1`}>
                        <MdKeyboardArrowRight className="text-[#B9AE90] text-xl"/>
                        <FaFolder className="text-[#546E7A] text-sm mr-1 "/>
                        <h6 className="text-sm">.next</h6>
                        </article>

                        <article className={` ${viewPortfolioFolder ? "flex flex-row " : "hidden"} ml-4  text-[#169AFF] items-center gap-x-1`}>
                        <MdKeyboardArrowRight className="text-[#B9AE90] text-xl"/>
                        <FaFolder className="text-[#8BC34A] text-sm mr-1 "/>
                        <h6 className="text-sm">node_modules</h6>
                        </article>
                        <article className={` ${viewPortfolioFolder ? "flex flex-row " : "hidden"} ml-4  text-[#169AFF] items-center gap-x-1`}>
                        <MdKeyboardArrowRight className="text-[#B9AE90] text-xl"/>
                        <FaFolder className="text-[##039BE5] text-sm mr-1 "/>
                        <h6 className="text-sm"> public</h6>
                        </article>

                        <article className={` ${viewPortfolioFolder ? "flex flex-row " : "hidden"} ml-4  text-[#169AFF] items-center gap-x-1`}>
                        <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" onClick={toggleViewSrc}/>
                        <FaFolder className="text-[#EF5350] text-sm mr-1 "/>
                        <h6 className="text-sm"> src</h6>
                        </article>

                        <article className={` ${viewSrc ? "flex flex-row " : "hidden"} ml-8  text-[#169AFF] items-center gap-x-1`}>
                        <MdKeyboardArrowRight className="text-[#B9AE90] text-xl"/>
                        <RiReactjsLine className="text-[#00DCFF] text-base mr-1 "/>
                        <h6 className="text-sm"> index.jsx </h6>
                        </article>


                   </section>

                   <section className="bg-[#04112E] w-full">
                   <article className="flex flex-row text-[#169AFF] items-center cursor-pointer" onClick={toggleViewOnlineFolder}>
                   <MdKeyboardArrowRight className={`text-[#B9AE90] text-xl ${viewOnlineFolder ? "rotate-90" : ""} transition-all duration-300`}/>
                        <h6 className="font-bold text-[11px]"> OUTLINE</h6>
                        </article>
                   </section>
                   
                   <section className="bg-[#04112E] w-full">
                   <article className="flex flex-row text-[#169AFF] items-center cursor-pointer" onClick={toggleViewTimelineFolder}>
                   <MdKeyboardArrowRight className={`text-[#B9AE90] text-xl ${viewTimeLine ? "rotate-90" : ""} transition-all duration-300`}/>
                        <h6 className="font-bold text-[11px]"> TIMELINE</h6>
                        </article>
                   </section>
                    
                </section>
            </nav>

            <section className="bg-bluedarkmain col-span-10 md:col-span-8 lg:col-span-9 xl:col-span-10">

            </section>
        </main>
    )
}

export default MainApp