import { Navbar } from "@/components/navbar";
import { UnderConstruction } from "@/components/under-construction";
import Cookies from "./cookies";

export default function CookiesPage() {
  return (
    <>
      <Navbar variant="default" />
      <Cookies />
    </>
  );
}
