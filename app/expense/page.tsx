import Expensepage from "@/components/expensepage";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="px-4 md:px-10">
      <Expensepage />
    </div>
  );
};

export default page;
