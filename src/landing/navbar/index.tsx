import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify-icon/react";
import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { NAV_ITEMS } from "./config";
import { cn } from "../../libs/cn";

const AppNavbar = () => {
  const [expandMobileNav, setExpandMobileNav] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const updateExpandMobileNav = () => setExpandMobileNav((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setExpandMobileNav(false);
      }
    };

    if (expandMobileNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandMobileNav]);

  return (
    <nav className="py-6 relative z-20">
      <div className="bg-gradient-to-r from-[#19461A] to-[#486A47] shadow-md rounded-b-[30px] absolute top-0 left-0 right-0 z-20">
        <div className="container flex justify-between items-center gap-10">
          <h1
            className="mb-4 text-3xl font-bold text-white cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            DESTINO
          </h1>

          {/* Desktop Nav */}
          <section className="mb-4 flex-1 max-w-[1000px] hidden lg:flex items-center gap-10 justify-center">
            <NavItemsWrapper />
          </section>

          {/* Mobile Hamburger */}
          <Button
            className="lg:hidden text-white"
            isIconOnly
            variant="light"
            size="lg"
            onPress={updateExpandMobileNav}
          >
            <Icon className="text-[32px]" icon="mdi:hamburger-menu" />
          </Button>
        </div>
      </div>

      <MobileMenu
        expandMobileState={expandMobileNav}
        updateExpandMobileNav={updateExpandMobileNav}
        menuRef={mobileMenuRef}
      />
    </nav>
  );
};

export default AppNavbar;

interface NavItemsWrapperProps {
  updateExpandMobileNav?: () => void;
}

const NavItemsWrapper = ({ updateExpandMobileNav }: NavItemsWrapperProps) => (
  <div className="flex flex-row lg:items-center gap-12 relative">
    {NAV_ITEMS.map((item) => (
      <div key={item.path} className="relative">
        <NavLink
          className={({ isActive }) =>
            cn(
              "text-base transition-colors duration-300 font-semibold text-white",
              isActive
                ? "underline underline-offset-4"
                : "hover:text-gray-200"
            )
          }
          to={item.path}
          onClick={updateExpandMobileNav}
        >
          {item.label}
        </NavLink>
      </div>
    ))}

    {/* Profile Icon */}
    <NavLink to="/profile">
      <Button
        variant="ghost"
        size="lg"
        className="p-2"
        style={{ borderRadius: "50%" }}
      >
        <Icon icon="mdi:account-circle" width="48" height="48" className="text-white" />
      </Button>
    </NavLink>
  </div>
);

interface MobileMenuProps {
  expandMobileState: boolean;
  updateExpandMobileNav: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

const MobileMenu = ({
  expandMobileState,
  updateExpandMobileNav,
  menuRef,
}: MobileMenuProps) => {
  const [isMenuHidden, setMenuHidden] = useState(!expandMobileState);

  const variants: Variants = {
    expand: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        opacity: { duration: 0.3 },
      },
    },
    minimize: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        opacity: { duration: 0.3 },
      },
    },
  };

  const handleAnimationComplete = (definition: string) => {
    if (definition === "minimize") {
      setMenuHidden(true);
    }
  };

  if (expandMobileState && isMenuHidden) {
    setMenuHidden(false);
  }

  return (
    <motion.div
      initial="minimize"
      animate={expandMobileState ? "expand" : "minimize"}
      variants={variants}
      onAnimationComplete={handleAnimationComplete}
      className={cn(
        "flex flex-col items-center text-center p-6 top-4 w-[280px] absolute z-[999] right-8 rounded-lg",
        "bg-gradient-to-b from-[#19461A] to-[#486A47] shadow-lg",
        {
          hidden: isMenuHidden,
        }
      )}
      ref={menuRef}
    >
      <Button
        className="self-end text-white"
        isIconOnly
        variant="light"
        size="lg"
        onPress={updateExpandMobileNav}
      >
        <Icon className="text-[32px]" icon="line-md:close" />
      </Button>
      <div className="flex flex-col gap-8 mt-6 w-full">
        {NAV_ITEMS.map((item) => (
          <div key={item.path}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  "text-lg transition-colors duration-300 font-semibold text-white",
                  isActive
                    ? "underline underline-offset-4"
                    : "hover:text-gray-200"
                )
              }
              to={item.path}
              onClick={updateExpandMobileNav}
            >
              {item.label}
            </NavLink>
          </div>
        ))}
        <NavLink to="/contact-us" className="w-full">
          <Button
            className="bg-white text-[#0F2F8F] px-8 py-2 text-lg justify-center rounded-lg mt-4"
            size="lg"
          >
            Contact Us
          </Button>
        </NavLink>
      </div>
    </motion.div>
  );
};
