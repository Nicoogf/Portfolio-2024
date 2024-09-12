import "./globals.css";

export const metadata = {
  title: "Portfolio Personal",
  description: "Desarrollador Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className="w-full max-w-[100%] h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
