import { FC } from "react";
import ExpenseHeader from "./expensepage-header";
import { ModeToggle } from "./moodtoggler";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import ExpenseCards from "./expensecards";
import ExpenseList from "./expense-list";

interface expensepageProps {}

const Expensepage: FC<expensepageProps> = ({}) => {
  return (
    <div>
      <ExpenseHeader />

      {/* items */}

      <ExpenseCards />

      {/* Lists */}
      <ExpenseList />
    </div>
  );
};

export default Expensepage;
