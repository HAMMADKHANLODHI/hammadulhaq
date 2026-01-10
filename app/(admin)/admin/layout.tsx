
import Link from "next/link";
import React from "react";

const layout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white h-screen w-screen" >
      <nav className="w-full h-[10%] flex justify-evenly bg-amber-400">

        <Link href={"/admin/skills"} className="h-full flex items-center p-3 bg-amber-950">Skills</Link>
        <Link href={"/admin/experience"} className="h-full flex items-center p-3 bg-amber-950">experience</Link>
        <Link href={"/admin/education"} className="h-full flex items-center p-3 bg-amber-950">education</Link>
        <Link href={"/admin/Services"} className="h-full flex items-center p-3 bg-amber-950">Services</Link>
        <Link href={"/admin/portfolio"} className="h-full flex items-center p-3 bg-amber-950">portfolio</Link>
        <div  className="h-full flex items-center p-3 bg-amber-950">logout</div>



      </nav>
      {children}
    </div>
  );
}
export default layout