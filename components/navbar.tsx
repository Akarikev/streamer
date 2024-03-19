import React from "react";
import { ModeToggle } from "@/components/moodtoggler";
function Navbar() {
  return (
    <div>
      <div className="border-b h-14 border-b-gray-600  mt-2 flex justify-between px-3 ">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
