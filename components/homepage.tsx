import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button, buttonVariants } from "./ui/button";
import { SendHorizontal } from "lucide-react";

interface homepageProps {}

const Homepage: FC<homepageProps> = ({}) => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div>
        <Image
          src={"/indian-man-got-confused-with-expenses.svg"}
          height={900}
          width={900}
          alt="image of confused man checking his expenses"
        />

        {/* Get Started Button */}
      </div>

      <div className="">
        <h1 className="text-left text-2xl uppercase font-bold tracking-wider text-gray-400 md:text-4xl">
          Never Lose Track of Expenses Again
        </h1>
      </div>

      <div>
        <p className="text-gray-400 md:text-2xl ">
          My ultimate companion for hassle-free expense management
        </p>
      </div>

      <div>
        <Link
          href={"/expense"}
          className={buttonVariants({
            variant: "link",
            size: "lg",
            className: "mt-2 hover:animate-pulse ",
          })}
        >
          <SendHorizontal />
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
