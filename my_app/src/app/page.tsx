import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-64 h-32 bg-green-500"></div>
      <Link href="/page2"> Ir a segunda pg </Link>
    </div> 
  );
}
