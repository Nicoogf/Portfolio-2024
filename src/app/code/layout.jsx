'use client'
import FooterComponent from '@/Components/FooterComponent';
import HeaderComponent from '@/Components/HeaderComponent';
import React ,{useEffect,useState}from 'react'
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
import { FaCircleInfo } from "react-icons/fa6";
import { DiHtml5 } from "react-icons/di";
import { FaJsSquare } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import Link from 'next/link';
import { useConsole } from '@/context/ConsoleContext';
import { randomNumber } from '@/utils/random';
import ConsoleComponent from '@/Components/Console';
import { useRouter } from 'next/navigation';
import { useMenu } from '@/context/MenusContext';


const VisualStudioCodeApp = ({children}) => {

    // const [viewPortfolioFolder, setViewPortfolioFolder] = useState(false)
    const [viewOnlineFolder, setViewOnlineFolderr] = useState(false)
    const [viewTimeLine, setViewTimeLine] = useState(false)
    // const [viewSrc, setViewSrc] = useState(false)
    const [changesGit, setChangesCommit] = useState(false)
    const { toggleConsole , viewConsole} = useConsole()
    const [ comand , setComand ] = useState()
    const router = useRouter()
    const { viewSrc, toggleViewFolder ,viewPortfolioFolder ,setViewSrc , closeMenus} = useMenu()
   
  

    const toggleViewOnlineFolder = () => {
        setViewOnlineFolderr(!viewOnlineFolder)
    }
    const toggleViewTimelineFolder = () => {
        setViewTimeLine(!viewTimeLine)
    }
    const toggleViewSrc = () => {
        setViewSrc(!viewSrc)
    }


    useEffect(() => {

        const interval = setInterval(() => {
            setChangesCommit(changesGit => !changesGit);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    
    return (
        <main className="w-full h-[100%] bg-blue-500 overflow-hidden flex flex-col" onClick={closeMenus}>
            <HeaderComponent />

            <main className="w-full bg-bluedarkmain grid grid-cols-12 h-[calc(100vh-56px)]">

                <nav className="col-span-2 md:col-span-4 lg:col-span-3 xl:col-span-2 h-[100%] flex flex-row">

                    <section className="bg-bluedarkmain flex flex-col h-[100%] p-3 gap-y-6">
                        <FaRegCopy className=" text-2xl text-pinkactive transition-all duration-100" />
                        <LiaSearchSolid className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100" onClick={toggleConsole}/>

                        <div className="relative">
                            <p className="absolute text-whitelettercode bg-pinkactive rounded-full w-4 h-4 r text-center text-[10px] -bottom-2 -right-2 flex justify-center items-center font-semibold">
                                {changesGit ? <ImClock className="font-semibold" /> : <span> 4 </span>}
                            </p>
                            <IoGitMergeOutline className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100" />
                        </div>

                        <VscDebugAlt className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100" />

                        <div className="relative">
                            <p className="absolute text-whitelettercode bg-pinkactive rounded-full w-4 h-4 r text-center text-[10px] -bottom-2 -right-2 flex justify-center items-center font-semibold">
                                <span> 1 </span>
                            </p>
                            <VscExtensions className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100" />
                        </div>
                        <VscRemoteExplorer className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100" />
                        <BiLogoMongodb className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100" />
                        <FaDocker className="text-iconOff text-2xl hover:text-pinkactive transition-all duration-100" />
                    </section>

                    <section className="h-[100%] w-full">

                        <div className="flex flex-row items-center justify-between p-2 bg-bluedarkmain text-whitelettercode">
                            <h6 className="text-[11px]"> EXPLORER </h6>
                            <IoIosMore className="" />
                        </div>

                        <section className="bg-[#04112E] w-full flex flex-col">

                            <Link href="/code" className="flex flex-row text-[#169AFF] items-center cursor-pointer" onClick={toggleViewFolder}>
                                <MdKeyboardArrowRight className={`text-[#B9AE90] text-xl ${viewPortfolioFolder ? "rotate-90" : ""} transition-all duration-300`} />
                                <h6 className="font-bold text-[11px]">PORTFOLIO-VSC</h6>
                            </Link>

                            <article className={` ${viewPortfolioFolder ? "flex flex-row " : "hidden"} ml-4  text-[#169AFF] items-center gap-x-1`}>
                                <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" />
                                <FaFolder className="text-[#546E7A] text-sm mr-1 " />
                                <h6 className="text-sm">.next</h6>
                            </article>

                            <article className={` ${viewPortfolioFolder ? "flex flex-row " : "hidden"} ml-4  text-[#169AFF] items-center gap-x-1`}>
                                <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" />
                                <FaFolder className="text-[#8BC34A] text-sm mr-1 " />
                                <h6 className="text-sm">node_modules</h6>
                            </article>
                            <article className={` ${viewPortfolioFolder ? "flex flex-row " : "hidden"} ml-4  text-[#169AFF] items-center gap-x-1`}>
                                <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" />
                                <FaFolder className="text-[##039BE5] text-sm mr-1 " />
                                <h6 className="text-sm"> public</h6>
                            </article>

                            <article className={` ${viewPortfolioFolder ? "flex flex-row " : "hidden"} ml-4  text-[#169AFF] items-center gap-x-1 cursor-pointer`} onClick={toggleViewSrc}>
                                <MdKeyboardArrowRight className="text-[#B9AE90] text-xl"/>
                                <FaFolder className="text-[#EF5350] text-sm mr-1 " />
                                <h6 className="text-sm text-whitelettercode"> src</h6>
                            </article>

                            <Link href="/code/readme" className={` ${viewSrc ? "flex flex-row " : "hidden"} pl-8  text-[#169AFF] items-center gap-x-1 hover:bg-bluehover`}>
                                {/* <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" /> */}
                                <FaCircleInfo className="text-[#42A5F5] text-base ml-4 " />
                                <h6 className="text-[13px] text-whitelettercode py-[1px]"> README.md </h6>
                            </Link>

                            <Link href="/code/experience" className={` ${viewSrc ? "flex flex-row " : "hidden"} pl-8 mt-[2px] text-[#169AFF] items-center gap-x-1 hover:bg-bluehover`}>
                                {/* <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" /> */}
                                <DiHtml5 className="text-orange-500 text-base ml-4 " />
                                <h6 className="text-[13px] text-whitelettercode py-[1px]"> Experiencia.html </h6>
                            </Link>

                            <Link href="/code/contact" className={` ${viewSrc ? "flex flex-row " : "hidden"} pl-8 mt-[2px] text-[#169AFF] items-center gap-x-1 hover:bg-bluehover`}>
                                {/* <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" /> */}
                                <DiCss3 className="text-[#30ABE1] text-base ml-4 " />
                                <h6 className="text-[13px] text-whitelettercode py-[1px]"> Contacto.css </h6>
                            </Link>

                            <Link href="/code/stack" className={` ${viewSrc ? "flex flex-row " : "hidden"} pl-8 mt-[2px] text-[#169AFF] items-center gap-x-1 hover:bg-bluehover`}>
                                {/* <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" /> */}
                                <FaJsSquare className="text-yellow-400 text-base ml-4 " />
                                <h6 className="text-[13px] text-whitelettercode py-[1px]"> Tecnologias.js </h6>
                            </Link>

                            <Link href="/code/curriculum" className={` ${viewSrc ? "flex flex-row " : "hidden"} pl-8 mt-[2px] text-[#169AFF] items-center gap-x-1 hover:bg-bluehover`}>
                                {/* <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" /> */}
                                <AiFillFilePdf className="text-red-500 text-base ml-4 " />
                                <h6 className="text-[13px] text-whitelettercode py-[1px]"> Curriculum.pdf </h6>
                            </Link>

                            <Link href="/code/readme" className={` ${viewSrc ? "flex flex-row " : "hidden"} pl-8 mt-[2px] text-[#169AFF] items-center gap-x-1 hover:bg-bluehover`}>
                                {/* <MdKeyboardArrowRight className="text-[#B9AE90] text-xl" /> */}
                                <FaJava className="text-red-500 text-base ml-4 " />
                                <h6 className="text-[13px] text-whitelettercode py-[1px]"> Proyectos.java </h6>
                            </Link>


                        </section>

                        <section className="bg-[#04112E] w-full">
                            <article className="flex flex-row text-[#169AFF] items-center cursor-pointer" onClick={toggleViewOnlineFolder}>
                                <MdKeyboardArrowRight className={`text-[#B9AE90] text-xl ${viewOnlineFolder ? "rotate-90" : ""} transition-all duration-300`} />
                                <h6 className="font-bold text-[11px]"> OUTLINE</h6>
                            </article>
                        </section>

                        <section className="bg-[#04112E] w-full">
                            <article className="flex flex-row text-[#169AFF] items-center cursor-pointer" onClick={toggleViewTimelineFolder}>
                                <MdKeyboardArrowRight className={`text-[#B9AE90] text-xl ${viewTimeLine ? "rotate-90" : ""} transition-all duration-300`} />
                                <h6 className="font-bold text-[11px]"> TIMELINE</h6>
                            </article>
                        </section>

                    </section>
                </nav>

                <section className="bg-bluedarkmain col-span-10 md:col-span-8 lg:col-span-9 xl:col-span-10 relative  overflow-hidden h-[100%]">                    
                    {children}

                    {/* <section className={`${ viewConsole ? "flex translate-y-0" :  "translate-y-96"} transition-all duration-200 absolute bg-red-500 -bottom-0  right-0 z-[99] w-full h-[35%] flex flex-col`}>
                        <header className="w-full bg-[#0E0952] h-[35px] flex flex-row items-center gap-x-10 pl-5">
                            <h6 className="text-[#D600DD] text-xs font-semibold"> PROBLEMS </h6>
                            <h6 className="text-[#D600DD] text-xs font-semibold"> OUTPUT </h6>
                            <h6 className="text-[#D600DD] text-xs font-semibold"> DEBUG CONSOLE </h6>
                            <h6 className="text-[#D600DD] text-xs font-semibold"> PORTS </h6>
                            <h6 className="text-[#D600DD] text-xs font-semibold"> TERMINAL </h6>
                            <h6 className="text-[#D600DD] text-xs font-semibold"> COMENTS </h6>
                        </header>

                        <main className="bg-[#0D0936] h-[calc(100%-35px)] overflow-hidden overflow-y-scroll flex flex-col">
                            <article className="flex flex-row items-center mt-3">
                            <p className="text-[#09AD00] ml-5 code text-sm mr-2"> {Math.floor(1000 + Math.random() * 9000)}@User</p>
                            <p className="text-[#DC00BA] code text-sm mr-2"> PORTFOLIO </p>
                            <p className="text-[#FFD400] code text-sm mr-2">  ~/Desktop/portfolio-vsc </p>
                            <p className="text-[#0BB2FA] code text-sm">  (main) </p>
                            </article>

                            <article className="flex flex-row items-center ">
                            <p className="text-whitelettercode ml-5 code text-sm mr-2"> $ </p>
                            <input  className="block w-full bg-transparent code text-whitelettercode outline-none"/>
                            </article>
                           
                        </main>

                        
                    </section> */}
                    <ConsoleComponent />
                </section>
            </main>


            <FooterComponent />
        </main>
    )
}

export default VisualStudioCodeApp;