import React from "react";
import Navbar from "./navbar";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./moodtoggler";

function ExpenseHeader() {
  return (
    <div suppressHydrationWarning>
      <div className=" h-14 border-b-pink-300  border-b-2 flex justify-between px-6 items-center md:px-10">
        <div>
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "link",
              className: "text-pink-300",
            })}
          >
            <HomeIcon />
          </Link>
        </div>

        <div>
          <h1 className="text-bold text-xl text-pink-300">All Transactions</h1>
        </div>

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

        <ModeToggle />
      </div>
    </div>
  );
}

export default ExpenseHeader;
