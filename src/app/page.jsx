import Checker from "@/components/api-checker/Checker";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className={"w-full h-screen flex justify-center items-center"}>
      <Checker />
    </main>
  );
}
