import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-blue-800 h-[100%] flex flex-col items-center justify-center gap-2 w-full">
      <h1> Ver porfolio </h1>
      <Link href="/standar" className="bg-blue-300 p-2 "> Ver porfolio estandar </Link>
      <Link href="/code" className="bg-blue-300 p-2 "> Ver porfolio Visual Studio Code  </Link>
    </div>
  );
}
