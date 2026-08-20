import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import NavbarData from "@/data/navbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <header className="sticky top-0 z-20 bg-[#12182D] backdrop-blur py-2">
        <nav>
          <Container>
            <div className="flex items-center justify-between">
              <Logo />
              <ul className="flex items-center gap-4 text-sm font-medium text-primary">
                {NavbarData.navlist?.map((item, index) => {
                  return (
                    <li
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm font-medium transition",
                        pathname === item.url
                          ? "bg-brand-50 text-brand-700"
                          : "text-gray-600 hover:bg-surface-100 hover:text-gray-900",
                      )}
                      key={index}
                    >
                      <a href={item.url}>{item?.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
