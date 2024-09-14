import { ConsoleProvider } from "@/context/ConsoleContext";
import "./globals.css";
import { MenuProvider } from "@/context/MenusContext";

export const metadata = {
  title: "Portfolio Personal",
  description: "Desarrollador Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <ConsoleProvider>
        <MenuProvider>      
        <body className="w-full max-w-[100%] h-screen overflow-hidden">
          {children}
        </body>
        </MenuProvider>
      </ConsoleProvider>
    </html>
  );
}
