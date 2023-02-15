import { FC } from "react";

import BaseForButton from "../ui/BaseForButton.component";

import sidelist from "@/assets/sidelist.png";

const Header: FC = () => {
  return (
    <header>
      <BaseForButton
        width={"114px"}
        height={"56px"}
        text={"Menu"}
        image={sidelist}
      />
    </header>
  );
};

export default Header;
