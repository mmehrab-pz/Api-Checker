import React from "react";
import { ModeToggle } from "./ModeToggle";
import { LangToggle } from "./LangToggle";


export default function Header() {
  return (
    <header className={"w-full h-16 border-b border-border px-8 py-4 flex justify-between"}>
      <h1 className="text-[18px] font-semibold text-primary capitalize">
        api checker
      </h1>
     <div className="flex items-center gap-1.5">
        <LangToggle />
        <ModeToggle />
     </div>
    </header>
  );
}
