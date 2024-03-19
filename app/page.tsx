import Homepage from "@/components/homepage";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <div>
        <Navbar />

        <Homepage />
      </div>
    </main>
  );
}
