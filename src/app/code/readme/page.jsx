import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSymbolVariable } from "react-icons/vsc";
import Link from 'next/link';


const page = () => {
  return (
    <main className= "h-[100%] overflow-hidden selection:bg-violetborderinput/85">
        <section className="bg-bluedarkmain w-full">

          <article className="h-[37px] bg-[#1D1641] flex flex-row justify-center items-center w-[100%] max-w-[170px]  gap-x-1">
            <FaCircleInfo className="text-[#42A5F5] text-base mr-1 " />
            <p className="text-whitelettercode text-[11px]"> README.md </p>
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
            <FaCircleInfo className="text-[#42A5F5]  text-base mr-1 " />
            <p className="text-xs"> README.md </p>
            </div>          
            <MdKeyboardArrowRight className="text-xl"/>
            <div className="flex flex-row items-center gap-x-1">
            <VscSymbolVariable className="text-[#63ADC6] text-lg" />
            <p className="text-xs"> Page </p>
            </div>
           
          </div>
        </sectcion>

        <section className="bg-bluedarkmain flex flex-col gap-y-2 overflow-hidden overflow-y-scroll h-[80%] pb-20">

          <article className="flex flex-row items-center mt-1">           

            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4 w-[20px] text-center code"> 1 </p>
            <div>
            <p className="text-pinkactive code text-base" > 
              <span className="text-whitelettercode"> Este es mi Portfolio desarrollado en </span> 
              <span className="text-pinkactive"> [Next.js]</span> 
              <span className="text-[#EF19BB]"> (https://nextjs.org/)   </span>
            </p>
            </div>
           </article>



           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4 w-[20px] text-center code"> 2 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4  w-[20px] text-center code"> 3 </p>
            <div>
            <p className="text-pinkactive code text-base" >## Nicolas Falabella </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4 w-[20px] text-center code"> 4 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 4 </p>
            <div>
            <p className="text-pinkactive code text-base" >### **Stack de Desarrollo** </p>
            </div>
           </article>

           
           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 5 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            Mi stack de desarrollo principal es <span className="text-pinkactive"> **MERN** </span>
            </p>
            </div>
           </article>
           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 6 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            y actualmente me estoy capacitando en lenguajes fuertemente tipados como 
            <span className="text-pinkactive"> **Java** </span> 
            y  
            <span className="text-pinkactive"> **TypeScript** </span> 
            .
            </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 7 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 8 </p>
            <div>
            <p className="text-pinkactive code text-base" >### **Bio** </p>
            </div>
           </article>

           <article className="flex flex-row items-start -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 9 </p>
            <div className="w-[85%]">
            <p className="text-whitelettercode code text-base ml-4" >He tenido el privilegio de desarrollar mi carrera profesional durante los últimos 3 años, con una sólida experiencia consolidada en el sector comercial, principalmente en la atención al cliente. Mi trayectoria profesional ha dado un giro hacia el área de la programación, especializándome en el sector Frontend. Actualmente, estoy cursando una especialización en Frontend en Digital House y estoy en mi primer año como Analista de Sistemas en la Universidad de Luján. </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 10 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 11 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            Tengo 
            <span className="text-pinkactive "> **2 años de experiencia** </span> 
            como desarrollador, enfocado en el desarrollo 
            <span className="text-pinkactive"> **Fullstack**</span>
            .
            </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 12 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 13 </p>
            <div>
            <p className="text-pinkactive code text-base" >### **Certificados Oficiales** </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 14 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 15 </p>
            <div>
            <p className="text-pinkactive code text-base" >
              <span className="text-whitelettercode"> - </span> 
              **Digital House (2024)** </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 16 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            - Especialización en Frontend ( React - Next - Tailwind - Typescrypt - Mongo )
            </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 17 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 18 </p>
            <div>
            <p className="text-pinkactive code text-base" >
              <span className="text-whitelettercode"> - </span> 
              **FreeCodeCamp (2023)** </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 19 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            - JavaScript, Algoritmos y Estructura de Datos
            </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 20 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 21 </p>
            <div>
            <p className="text-pinkactive code text-base" >
              <span className="text-whitelettercode"> - </span> 
              **Universidad Tecnológica Nacional (2023)** </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 22 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            - JavaScript, Algoritmos y Estructura de Datos
            </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 23 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 24 </p>
            <div>
            <p className="text-pinkactive code text-base" >
              <span className="text-whitelettercode"> - </span> 
              **Digital House (2022)** </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 25 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            - Introduccion al Desarrollo Web ( HTML - CSS - Javascrpit - React - MYSQL )
            </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 26 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 27 </p>
            <div>
            <p className="text-pinkactive code text-base" >
              <span className="text-whitelettercode"> - </span> 
              **Instituto de Formación Técnica 7 (2018)** </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1 ">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 28 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            - Terciario : Tecnicatura en Administración de Empresas
            </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 29 </p>
            <div>
            <p className="text-pinkactive code text-base" > </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 30 </p>
            <div>
            <p className="text-pinkactive code text-base" >
              <span className="text-whitelettercode"> - </span> 
              ### **Contacto** </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1 ">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 31 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            -  <span className="text-pinkactive">**Email:** </span> nicolasgfalabella@gmail.com
            </p>
            </div>
           </article>

           <article className="flex flex-row items-center -mt-1 ">           
            <p className="text-pinkactive font-semibold text-xs ml-4 mr-4   w-[20px] text-center code"> 32 </p>
            <div>
            <p className="text-whitelettercode code text-base ml-4" >
            -  <span className="text-pinkactive">**LinkedIn:** </span> 
            <span  className="text-pinkactive"> [linkedin.com/in/Nicolas-Falabella]</span>
            <span className="text-[#EF19BB]">(https://www.linkedin.com/in/nicolas-falabella-02ab47251) </span>
            </p>
            </div>
           </article>
        
        </section>
        
    </main>
  )
}

export default page