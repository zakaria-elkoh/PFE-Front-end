import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <section className="md:hidden">
      <Sheet>
        <SheetTrigger>
          Open <i class="fa-solid fa-bars"></i>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetClose asChild>
            <Link to={"/"}>home</Link>
          </SheetClose>
          <Link to={"/login"}>login</Link>
          <Link to={"/"}>home</Link>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
