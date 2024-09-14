'use client'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSymbolVariable } from "react-icons/vsc";
import Link from 'next/link';
import { DiHtml5 } from "react-icons/di";
import { IoIosArrowForward } from "react-icons/io";
import { useConsole } from '@/context/ConsoleContext';

const page = () => {

  const { toggleConsole , viewConsole} = useConsole() ;
  return (
    <main className="h-[100%] overflow-hidden selection:bg-violetborderinput/85">
      <section className="bg-bluedarkmain w-full">

        <article className="h-[37px] bg-[#1D1641] flex flex-row justify-center items-center w-[100%] max-w-[170px]  gap-x-1">
          <DiHtml5 className="text-red-500 text-base mr-1 " />
          <p className="text-whitelettercode text-xs"> experiencia.html </p>
          <p className="font-semibold mx-1 text-whitelettercode text-[11px]"> M </p>
          <Link href="/code">
            <RxCross2 className="text-whitelettercode hover:bg-[#302C4A] p-1 text-sm box-content rounded-md" />
          </Link>
        </article>

      </section>

      <section className="h-[25px] bg-bluedarkmain flex flex-row items-center w-[100%] gap-x-1">
        <div className="text-whitelettercode ml-4 text-sm flex flex-row items-center gap-x-[2px]">
          <Link href="/code" className="text-xs"> portfolio-vsc </Link>
          <MdKeyboardArrowRight className="text-xl" />
          <p className="text-xs"> src </p>
          <MdKeyboardArrowRight className="text-xl" />
          <div className="flex flex-row items-center">
            <DiHtml5 className="text-red-500 text-base mr-1 " />
            <p className="text-xs"> experiencia.html </p>
          </div>
          <MdKeyboardArrowRight className="text-xl" />
          <div className="flex flex-row items-center gap-x-1">
            <VscSymbolVariable className="text-[#63ADC6] text-lg" />
            <p className="text-xs"> Page </p>
          </div>

        </div>
      </section>
      <section className={`${ viewConsole ? "h-[60%]" : "h-[80%]"} bg-bluedarkmain flex flex-col gap-y-2 overflow-hidden overflow-y-scroll  pb-20 code`}>

        <article className="flex flex-row items-center mt-1">

          <p className="text-pinkactive font-semibold text-xs ml-4 mr-4 w-[20px] text-center code no-select"> 1 </p>
          <div className="ml-4">
           <p> 
            <span className="text-pinkactive"> {`<!DOCTYPE`} </span> 
            <span className="text-yellowelettercode"> {`html`} </span> 
            <span className="text-pinkactive">{`>`} </span> 
           </p>
          </div>
        </article>



        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 2 </p>
          <IoIosArrowForward className="text-graylettercode" /> 
          <div className="ml-2">
          <p> 
            <span className="text-pinkactive"> {`<html`} </span> 
            <span className="text-yellowelettercode"> {`lang`} </span> 
            <span className="text-pinkactive"> {`=`} </span> 
            <span className="text-skybluelettercode"> {`"es"`} </span> 
            <span className="text-pinkactive">{`>`} </span> 
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 3 </p> 
          <IoIosArrowForward className="text-graylettercode" />        
          <div className="ml-8">
          <p> 
            <span className="text-pinkactive"> {`<head>`} </span>            
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 4 </p>                
          <div className="ml-16">
          <p> 
            <span className="text-pinkactive"> {`<meta`} </span> 
            <span className="text-yellowelettercode"> {`charset`} </span>   
            <span className="text-pinkactive"> {`=`} </span>  
            <span className="text-skybluelettercode"> {` "UTF-8" `} </span>      
            <span className="text-pinkactive"> {`>`} </span>                 
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 5 </p>                
          <div className="ml-16">
          <p> 
            <span className="text-pinkactive"> {`<meta`} </span> 
            <span className="text-yellowelettercode"> {`name`} </span>   
            <span className="text-pinkactive"> {`=`} </span>  
            <span className="text-skybluelettercode"> {` "viewport" `} </span> 
            <span className="text-yellowelettercode"> {`content`} </span>   
            <span className="text-pinkactive"> {`=`} </span>  
            <span className="text-skybluelettercode"> {` "width=device-width, initial-scale=1.0" `} </span>      
            <span className="text-pinkactive"> {`>`} </span>                 
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select" > 6 </p>                
          <div className="ml-16">
          <p> 
            <span className="text-pinkactive"> {`<link`} </span> 
            <span className="text-yellowelettercode"> {`rel`} </span>   
            <span className="text-pinkactive"> {`=`} </span>  
            <span className="text-skybluelettercode"> {` "stylesheet" `} </span> 
            <span className="text-yellowelettercode"> {`src`} </span>   
            <span className="text-pinkactive"> {`=`} </span>  
            <Link className="text-skybluelettercode underline" href="/code/contact"> {` "contacto.css" `} </Link>      
            <span className="text-pinkactive"> {`>`} </span>                 
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 7 </p>                
          <div className="ml-16">
          <p> 
            <span className="text-pinkactive"> {`<title>`} </span> 
            <span className="text-whitelettercode"> Experiencia profesional  </span>   
            <span className="text-pinkactive"> {`</title>`} </span>           
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 8 </p>         
          <div className="ml-12">
          <p> 
            <span className="text-pinkactive"> {`<head>`} </span>            
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 9 </p>         
            <div className="ml-12">         
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 10 </p> 
          <IoIosArrowForward className="text-graylettercode" />        
          <div className="ml-8">
          <p> 
            <span className="text-pinkactive"> {`<body>`} </span>            
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 11 </p> 
          <IoIosArrowForward className="text-graylettercode" />        
          <div className="ml-12">
          <p> 
            <span className="text-pinkactive"> {`<header`} </span>   
            <span className="text-yellowelettercode"> {`class`} </span> 
            <span className="text-pinkactive"> {`=`} </span> 
            <span className="text-skybluelettercode"> {`"contenedor-experiencias-laborales"`} </span> 
            <span className="text-pinkactive"> {`>`} </span>                 
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 12</p> 
                 
          <div className="ml-20">
          <p> 
            <span className="text-pinkactive"> {`<h1`} </span>   
            <span className="text-yellowelettercode"> {`class`} </span> 
            <span className="text-pinkactive"> {`=`} </span> 
            <span className="text-skybluelettercode"> {`"titulo-experiencias-laborales"`} </span> 
            <span className="text-pinklettercode"> {`>`} </span> 
            <span className="text-whitelettercode">  Listado de Experiencias Laborales</span>
            <span className="text-pinkactive"> {`</h1>`} </span>                 
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 13 </p> 
          <IoIosArrowForward className="text-graylettercode" />        
          <div className="ml-16">
          <p> 
            <span className="text-pinkactive"> {`<section>`} </span>                               
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 14 </p> 
          <IoIosArrowForward className="text-graylettercode" />        
          <div className="ml-20">
          <p> 
            <span className="text-pinkactive"> {`<ul>`} </span>                               
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 15 </p>        
          <div className="ml-32">
          <p> 
            <span className="text-pinkactive"> {`<li>`} </span>
            <span className="text-white"> (BigFive) Frontend Developer Wordpress | 2024 </span>
            <span className="text-pinkactive"> {`</li>`} </span>  
            <span className="text-[#0098DF]"> {`// Responsable del mantenimiento y optimización de sitios web preexistentes para clientes, asegurando su correcto funcionamiento`} </span>                                       
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 16 </p>     
          <div className="ml-32">
          <p> 
            <span className="text-pinkactive"> {`<li>`} </span>
            <span className="text-white"> (Interfas) Asesor Comercial | 2023 </span>
            <span className="text-pinkactive"> {`</li>`} </span> 
            <span className="text-[#0098DF]"> {`// Coordinador de ventas`} </span>                                     
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 17 </p> 
          <div className="ml-32">
          <p> 
            <span className="text-pinkactive"> {`<li>`} </span>
            <span className="text-white"> (Telecom) Asesor Comercial | 2019 - 2022  </span>
            <span className="text-pinkactive"> {`</li>`} </span>
            <span className="text-[#0098DF]"> {`// Atencion al cliente  | Servicio post venta | Responsable de Sucursal Mercedes`} </span>                                      
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 18 </p>      
          <div className="ml-32">
          <p> 
            <span className="text-pinkactive"> {`<li>`} </span>
            <span className="text-white"> (Vika) Atencion al Publico | 2018 - 2019  </span>
            <span className="text-pinkactive"> {`</li>`} </span>
            <span className="text-[#0098DF]"> {`// Atencion al cliente  | Administrativo `} </span>                                      
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 19 </p>         
          <div className="ml-24">
          <p> 
            <span className="text-pinkactive"> {`</ul>`} </span>                               
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 20 </p>   
          <div className="ml-20">
          <p> 
            <span className="text-pinkactive"> {`</section>`} </span>                               
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 21 </p>      
          <div className="ml-16">
          <p> 
            <span className="text-pinkactive"> {`</header>`} </span>                      
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 22 </p> 
          <div className="ml-16">
          <p> 
            <span className="text-pinkactive"> {`<script`} </span>   
            <span className="text-yellowelettercode"> {`src`} </span> 
            <span className="text-pinkactive"> {`=`} </span> 
            <Link href="/" className="text-skybluelettercode underline cursor-pointer"> {`"./stack.js"`} </Link> 
            <span className="text-pinklettercode"> {`>`} </span> 
           
            <span className="text-pinkactive"> {`</script>`} </span>                 
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 23 </p>                 
          <div className="ml-12">
          <p> 
            <span className="text-pinkactive"> {`</body>`} </span>            
           </p>
          </div>
        </article>

        <article className="flex flex-row items-center -mt-1">
          <p className="text-pinkactive font-semibold text-xs ml-4 mr-2 w-[20px] text-center code no-select"> 24 </p>                 
          <div className="ml-6">
          <p> 
            <span className="text-pinkactive"> {`</html>`} </span>            
           </p>
          </div>
        </article>

        

      </section>


    </main>
  )
}

export default page