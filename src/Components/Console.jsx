// // 'use client'
// // import { useConsole } from '@/context/ConsoleContext'
// // import { useRouter } from 'next/navigation'
// // import React, { useState ,useRef} from 'react'

// // const ConsoleComponent = () => {
// //     const { viewConsole } = useConsole()
// //     const [inputValue, setInputValue] = useState(''); // Para manejar el valor del input
// //     const [interactions, setInteractions] = useState([]); // Para manejar el historial de interacciones
// //     const router = useRouter()
// //     const endOfConsoleRef = useRef(null);

// //     const scrollToBottom = () => {
// //         endOfConsoleRef.current?.scrollIntoView({ behavior: 'smooth' });
// //     };

// //     const handleEnter = (e) => {
// //         if (e.key === "Enter") {
// //             e.preventDefault();
// //             const command = inputValue.trim();
// //             if (command) {
// //                 handleCommand(command); // Ejecuta el comando
// //                 setInputValue(""); // Limpia el input después de presionar Enter
// //                 scrollToBottom();
// //             }
// //         }
// //     }

// //     const handleInputChange = (e) => {
// //         setInputValue(e.target.value); // Actualiza el valor del input mientras se escribe
// //     };

// //     const handleCommand = (command) => {
// //         let message = '';
// //         switch (command.toLowerCase()) { // Convertir el comando a minúsculas para evitar errores de mayúsculas/minúsculas
// //             case "ls":
// //                 message = ".next   node_modules    public  src";
// //                 break;
// //             case "help":
// //                 message = "/ls  /exit";
// //                 break;
// //             case "git add .":
// //                 message = " ";
// //                 break;
// //             case "git commit":
// //                 message = "[main f8do87a] Update 1 file changed, 44 insertions(+), 1 deletion(-)";
// //                 break;
// //             case "git push":
// //                 message = "Enumerating objects: 21, done. To https://github.com/Nicoogf/Portfolio-2024 05scf7f..f7ma27b  main -> main"
// //                 break;
// //             case "exit":
// //                 router.push("/");
// //                 return; // Salir de la función para no añadirlo al historial
// //             default:
// //                 message = "No se puede hacer ninguna acción con ese comando. Escribe help para ver el listado de comandos";
// //                 break;
// //         }

// //         // Añadir la interacción al historial
// //         setInteractions(prev => [...prev, { command, message }]);
// //     }

// //     return (
// //         <section className={`${viewConsole ? "flex translate-y-0" : "translate-y-96"} transition-all duration-200 absolute bg-red-500 -bottom-0  right-0 z-[99] w-full h-[35%] flex flex-col`}>

// //             <header className="w-full bg-[#0E0952] h-[35px] flex flex-row items-center gap-x-10 pl-5">
// //                 <h6 className="text-[#D600DD] text-xs font-semibold"> PROBLEMS </h6>
// //                 <h6 className="text-[#D600DD] text-xs font-semibold"> OUTPUT </h6>
// //                 <h6 className="text-[#D600DD] text-xs font-semibold"> DEBUG CONSOLE </h6>
// //                 <h6 className="text-[#D600DD] text-xs font-semibold"> PORTS </h6>
// //                 <h6 className="text-[#D600DD] text-xs font-semibold"> TERMINAL </h6>
// //                 <h6 className="text-[#D600DD] text-xs font-semibold"> COMMENTS </h6>
// //             </header>

// //             <main className="bg-[#0D0936] h-[calc(100%-35px)] overflow-hidden overflow-y-scroll flex flex-col">
// //                 {interactions.map((interaction, index) => (
// //                     <article key={index} className="flex flex-col mt-3">
// //                         <div className="flex flex-row items-center">
// //                             <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
// //                             <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
// //                             <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
// //                             <p className="text-[#0BB2FA] code text-sm">(main)</p>
// //                         </div>

// //                         <div className="flex flex-row items-center">
// //                             <p className="text-whitelettercode ml-5 code text-sm mr-2">$</p>
// //                             <p className="text-whitelettercode code text-sm">{interaction.command}</p>
// //                         </div>

// //                         {interaction.message && <p className="ml-5 text-whitelettercode code">{interaction.message}</p>}
// //                     </article>
// //                 ))}

// //                 <article className="flex flex-row items-center mt-3">
// //                     <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
// //                     <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
// //                     <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
// //                     <p className="text-[#0BB2FA] code text-sm">(main)</p>
// //                 </article>

// //                 <article className="flex flex-row items-center">
// //                     <p className="text-whitelettercode ml-5 code text-sm mr-2">$</p>
// //                     <input
// //                         value={inputValue}
// //                         onChange={handleInputChange}
// //                         onKeyPress={handleEnter}
// //                         className="block w-full bg-transparent code text-whitelettercode outline-none"
// //                     />
// //                 </article>

// //                 <div ref={endOfConsoleRef} />
// //             </main>
// //         </section>
// //     )
// // }

// // export default ConsoleComponent;


// import { useConsole } from '@/context/ConsoleContext'
// import { useRouter } from 'next/navigation'
// import React, { useState, useRef, useEffect } from 'react'

// const ConsoleComponent = () => {
//     const { viewConsole ,toggleConsole } = useConsole()
//     const [inputValue, setInputValue] = useState(''); // Para manejar el valor del input
//     const [interactions, setInteractions] = useState([]); // Para manejar el historial de interacciones
//     const router = useRouter()
//     const endOfConsoleRef = useRef(null);

//     // Función para hacer scroll hacia el final del contenedor
//     const scrollToBottom = () => {
//         endOfConsoleRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     // Hacer scroll automáticamente cuando cambian las interacciones
//     useEffect(() => {
//         scrollToBottom(); 
//     }, [interactions]);

//     const handleEnter = (e) => {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             const command = inputValue.trim();
//             if (command) {
//                 handleCommand(command); // Ejecuta el comando
//                 setInputValue(""); // Limpia el input después de presionar Enter
//             }
//         }
//     }

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value); // Actualiza el valor del input mientras se escribe
//     };

//     const handleCommand = (command) => {
//         let message = '';
//         switch (command.toLowerCase()) { // Convertir el comando a minúsculas para evitar errores de mayúsculas/minúsculas
//             case "ls":
//                 message = ".next   node_modules    public  src";
//                 break;
//             case "help":
//                 message = "/ls  /exit /git add . /git commit /git push /close";
//                 break;
//             case "git add .":
//                 message = " ";
//                 break;
//             case "git commit":
//                 message = "[main f8do87a] Update 1 file changed, 44 insertions(+), 1 deletion(-)";
//                 break;
//             case "git push":
//                 message = "Enumerating objects: 21, done. To https://github.com/Nicoogf/Portfolio-2024 05scf7f..f7ma27b  main -> main"
//                 break;
//             case "exit":
//                 router.push("/");
//                 return; // Salir de la función para no añadirlo al historial
//             case "close":
//                 router.push("/code");
//                 return;
//             case "killconsole":
//                 toggleConsole();
//                 return;      
//             default:
//                 message = "No se puede hacer ninguna acción con ese comando, escribe help para ver listado de comandos";
//                 break;
//         }

//         // Añadir la interacción al historial
//         setInteractions(prev => [...prev, { command, message }]);
//     }

//     return (
//         <section className={`${viewConsole ? "flex translate-y-0" : "translate-y-96"} transition-all duration-200 absolute bg-red-500 -bottom-0  right-0 z-[99] w-full h-[35%] flex flex-col`}>
//             <header className="w-full bg-[#0E0952] h-[35px] flex flex-row items-center gap-x-10 pl-5">
//                 <h6 className="text-[#D600DD] text-xs font-semibold"> PROBLEMS </h6>
//                 <h6 className="text-[#D600DD] text-xs font-semibold"> OUTPUT </h6>
//                 <h6 className="text-[#D600DD] text-xs font-semibold"> DEBUG CONSOLE </h6>
//                 <h6 className="text-[#D600DD] text-xs font-semibold"> PORTS </h6>
//                 <h6 className="text-[#D600DD] text-xs font-semibold"> TERMINAL </h6>
//                 <h6 className="text-[#D600DD] text-xs font-semibold"> COMMENTS </h6>
//             </header>

//             <main className="bg-[#0D0936] h-[calc(100%-35px)] overflow-hidden overflow-y-scroll flex flex-col pb-20">
//                 {interactions.map((interaction, index) => (
//                     <article key={index} className="flex flex-col mt-3">
//                         <div className="flex flex-row items-center">
//                             <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
//                             <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
//                             <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
//                             <p className="text-[#0BB2FA] code text-sm">(main)</p>
//                         </div>

//                         <div className="flex flex-row items-center">
//                             <p className="text-whitelettercode ml-5 code text-sm mr-2">$</p>
//                             <p className="text-whitelettercode code text-sm">{interaction.command}</p>
//                         </div>

//                         {interaction.message && <p className="ml-5 text-whitelettercode code">{interaction.message}</p>}
//                     </article>
//                 ))}

//                 <article className="flex flex-row items-center mt-3">
//                     <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
//                     <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
//                     <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
//                     <p className="text-[#0BB2FA] code text-sm">(main)</p>
//                 </article>

//                 <article className="flex flex-row items-center">
//                     <p className="text-whitelettercode ml-5 code text-sm mr-2">$</p>
//                     <input
//                         value={inputValue}
//                         onChange={handleInputChange}
//                         onKeyPress={handleEnter}
//                         className="block w-full bg-transparent code text-whitelettercode outline-none"
//                     />
//                 </article>

//                 {/* Referencia al final */}
//                 <div ref={endOfConsoleRef} />
//             </main>
//         </section>
//     )
// }

// export default ConsoleComponent;


// 'use client'
// import { useConsole } from '@/context/ConsoleContext'
// import { useRouter } from 'next/navigation'
// import React, { useState , useRef } from 'react'

// const ConsoleComponent = () => {
//   const { viewConsole } = useConsole()
//   const [inputValue, setInputValue] = useState(''); // Para manejar el valor del input
//   const [interactions, setInteractions] = useState([]); // Para manejar el historial de interacciones
//   const router = useRouter()
//   const endOfConsoleRef = useRef(null);

//   const scrollToBottom = () => {
//     endOfConsoleRef.current?.scrollIntoView({ behavior: 'smooth' });
// };

//   const handleEnter = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       const command = inputValue.trim();
//       if (command) {
//         handleCommand(command); // Ejecuta el comando
//         setInputValue(""); // Limpia el input después de presionar Enter
//       }
//     }
//   }

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value); // Actualiza el valor del input mientras se escribe
//   };

//   const handleCommand = (command) => {
//     let message = '';
//     switch (command.toLowerCase()) { // Convertir el comando a minúsculas para evitar errores de mayúsculas/minúsculas
//       case "ls":
//         message = ".next   node_modules    public  src";
//         break;
//       case "help":
//         message = "Ayuda";
//         break;
//       case "exit":
//         router.push("/");
//         return; // Salir de la función para no añadirlo al historial
//       default:
//         message = "No se puede hacer ninguna acción con ese comando";
//         break;
//     }

//     // Añadir la interacción al historial
//     setInteractions(prev => [...prev, { command, message }]);
//   }

//   return (
//     <section className={`${viewConsole ? "flex translate-y-0" : "translate-y-96"} transition-all duration-200 absolute bg-red-500 -bottom-0  right-0 z-[99] w-full h-[35%] flex flex-col`}>

//       <header className="w-full bg-[#0E0952] h-[35px] flex flex-row items-center gap-x-10 pl-5">
//         <h6 className="text-[#D600DD] text-xs font-semibold"> PROBLEMS </h6>
//         <h6 className="text-[#D600DD] text-xs font-semibold"> OUTPUT </h6>
//         <h6 className="text-[#D600DD] text-xs font-semibold"> DEBUG CONSOLE </h6>
//         <h6 className="text-[#D600DD] text-xs font-semibold"> PORTS </h6>
//         <h6 className="text-[#D600DD] text-xs font-semibold"> TERMINAL </h6>
//         <h6 className="text-[#D600DD] text-xs font-semibold"> COMMENTS </h6>
//       </header>

//       <main className="bg-[#0D0936] h-[calc(100%-35px)] overflow-hidden overflow-y-scroll flex flex-col">
//         {interactions.map((interaction, index) => (
//           <article key={index} className="flex flex-col mt-3">
//             <div className="flex flex-row items-center">
//               <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
//               <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
//               <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
//               <p className="text-[#0BB2FA] code text-sm">(main)</p>
//             </div>

//             <div className="flex flex-row items-center">
//               <p className="text-whitelettercode ml-5 code text-sm mr-2">$</p>
//               <p className="text-whitelettercode code text-sm">{interaction.command}</p>
//             </div>

//             {interaction.message && <p className="ml-5 text-whitelettercode code">{interaction.message}</p>}
//           </article>
//         ))}

//         <article className="flex flex-row items-center mt-3">
//           <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
//           <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
//           <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
//           <p className="text-[#0BB2FA] code text-sm">(main)</p>
//         </article>

//         <article className="flex flex-row items-center pb-10">
//           <p className="text-whitelettercode ml-5 code text-sm mr-2">$</p>
//           <input
//             value={inputValue}
//             onChange={handleInputChange}
//             onKeyPress={handleEnter}
//             className="block w-full bg-transparent code text-whitelettercode outline-none"
//           />
//         </article>
//       </main>
//     </section>
//   )
// }

// export default ConsoleComponent;


'use client'
import { useConsole } from '@/context/ConsoleContext'
import { useRouter } from 'next/navigation'
import React, { useState, useRef, useEffect } from 'react'

const ConsoleComponent = () => {
    const { viewConsole, toggleConsole } = useConsole()
    const [inputValue, setInputValue] = useState(''); // Para manejar el valor del input
    const [interactions, setInteractions] = useState([]); // Para manejar el historial de interacciones
    const router = useRouter()
    const endOfConsoleRef = useRef(null);


    const scrollToBottom = () => {
        endOfConsoleRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const command = inputValue.trim();
            if (command) {
                handleCommand(command); // Ejecuta el comando
                setInputValue(""); // Limpia el input después de presionar Enter
            }
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Actualiza el valor del input mientras se escribe
    };

    const handleCommand = (command) => {
        let message = '';
        switch (command.toLowerCase()) { // Convertir el comando a minúsculas para evitar errores de mayúsculas/minúsculas
            case "ls":
                message = ".next   node_modules    public  src";
                break;
            case "node tecnologias.js":
                message = "Hello word desde portfolio personal";
                break;
            case "git add":
                message = " ";
                break;
            case "git commit":
                message = "[main f8do87a] Update 1 file changed, 44 insertions(+), 1 deletion(-)";
                break;
            case "git push":
                message = "Enumerating objects: 21, done. To https://github.com/Nicoogf/Portfolio-2024 05scf7f..f7ma27b  main -> main"
                break;
            case "close":
                router.push("/code")
                return;
            case "exit":
                router.push("/");
                return; // Salir de la función para no añadirlo al historial
            case "killconsole":
                toggleConsole()
                return;
            case "help":
                message = "/ls /close / exit /killconsole /node tecnologias.js /git add  /git commit"
                break;
            default:
                message = "No se puede hacer ninguna acción con ese comando.Escribe help para ver el listado de comandos disponibles";
                break;
        }

        // Añadir la interacción al historial
        setInteractions(prev => [...prev, { command, message }]);
    }

    useEffect(() => {
        scrollToBottom();
    }, [interactions]);

    return (
        <section className={`${viewConsole ? "flex translate-y-0" : "translate-y-96"} transition-all duration-200 absolute bg-red-500 -bottom-0  right-0 z-[99] w-full h-[35%] flex flex-col`}>

            <header className="w-full bg-[#0E0952] h-[35px] flex flex-row items-center gap-x-10 pl-5">
                <h6 className="text-[#D600DD] text-xs font-semibold"> PROBLEMS </h6>
                <h6 className="text-[#D600DD] text-xs font-semibold"> OUTPUT </h6>
                <h6 className="text-[#D600DD] text-xs font-semibold"> DEBUG CONSOLE </h6>
                <h6 className="text-[#D600DD] text-xs font-semibold"> PORTS </h6>
                <h6 className="text-[#D600DD] text-xs font-semibold"> TERMINAL </h6>
                <h6 className="text-[#D600DD] text-xs font-semibold"> COMMENTS </h6>
            </header>

            <main className="bg-[#0D0936] h-[calc(100%-35px)] overflow-hidden overflow-y-scroll flex flex-col">
                {interactions.map((interaction, index) => (
                    <article key={index} className="flex flex-col mt-3">
                        <div className="flex flex-row items-center">
                            <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
                            <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
                            <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
                            <p className="text-[#0BB2FA] code text-sm">(main)</p>
                        </div>

                        <div className="flex flex-row items-center">
                            <p className="text-whitelettercode ml-5 code text-sm mr-2">$</p>
                            <p className="text-whitelettercode code text-sm">{interaction.command}</p>
                        </div>

                        {interaction.message && <p className="ml-5 text-whitelettercode code">{interaction.message}</p>}
                    </article>
                ))}

                <article className="flex flex-row items-center mt-3">
                    <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
                    <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
                    <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
                    <p className="text-[#0BB2FA] code text-sm">(main)</p>
                </article>

                <article className="flex flex-row items-center pb-10">
                    <p className="text-whitelettercode ml-5 code text-sm mr-2">$</p>
                    <input
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleEnter}
                        className="block w-full bg-transparent code text-whitelettercode outline-none"
                    />
                </article>

                <div ref={endOfConsoleRef} />

            </main>
        </section>
    )
}

export default ConsoleComponent;