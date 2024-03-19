import { buttonVariants } from "./ui/button";

import React from "react";
import { ModeToggle } from "@/components/moodtoggler";
import Link from "next/link";
function Navbar() {
  return (
    <div>
      <div className="border-b h-14 border-b-gray-600   flex justify-between px-6 items-center md:px-10">
        <div className="flex justify-between items-center gap-3">
          <h1 className="text-bold text-xl text-pink-300">Expen$e</h1>

          {/* <Link
            href={""}
            className={buttonVariants({
              variant: "link",
            })}
          >
            link 1
          </Link>
          <Link
            href={""}
            className={buttonVariants({
              variant: "link",
            })}
          >
            link 2
          </Link>
          <Link
            href={""}
            className={buttonVariants({
              variant: "link",
            })}
          >
            link 3
          </Link> */}
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
