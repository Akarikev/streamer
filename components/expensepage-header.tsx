import React from "react";
import Navbar from "./navbar";
import Link from "next/link";
import { ArrowLeft, HomeIcon } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./moodtoggler";

function ExpenseHeader() {
  return (
    <div suppressHydrationWarning>
      <div className=" h-14 border-b-red-500  border-b-2 flex justify-between px-6 items-center md:px-10">
        <div>
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "link",
              className: "text-red-500",
            })}
          >
            <ArrowLeft />
          </Link>
        </div>

        <div>
          <h1  className="text-bold text-xl text-red-500">
            All Transactions
          </h1>
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
