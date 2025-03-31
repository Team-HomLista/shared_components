import { FC } from "react";
import { Button } from "../ui/button";

interface navbarProps {}

/**
 * @todo create navbar using figma
 * @param param0
 * @returns
 */
export const Navbar: FC<navbarProps> = ({}) => {
  return (
    <nav className="">
      <div className=""></div>
      <div className=""></div>
      <div className="">
        <Button>Acceder</Button>
      </div>
    </nav>
  );
};
