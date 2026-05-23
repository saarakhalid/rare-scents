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

  const updateExpandMobileNav = () =>
    setExpandMobileNav((prev) => !prev);

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
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [expandMobileNav]);

  return (
    <nav className="py- relative z-20">
      <div className="bg-transparent absolute top-0 left-0 right-0 z-20 shadow-md rounded-b-[60px] absolute top-0 left-0 right-0 z-20">
        
        <div className="container flex justify-between items-center gap-10">

          {/* LOGO */}
          <div className="flex items-center h-20">
  <img
    src="logo.png"
    alt="The Rare Scents"
    className="w-28 h-28 cursor-pointer object-contain"
    onClick={() => (window.location.href = "/")}
  />
</div>

          {/* DESKTOP NAV */}
          <section className="mb-2 flex-1 max-w-[1000px] hidden lg:flex items-center justify-center">
            <NavItemsWrapper />
          </section>

          {/* MOBILE HAMBURGER */}
          <Button
            className="lg:hidden text-white"
            isIconOnly
            variant="light"
            size="lg"
            onPress={updateExpandMobileNav}
          >
            <Icon
              className="text-[32px]"
              icon="mdi:hamburger-menu"
            />
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

const NavItemsWrapper = ({
  updateExpandMobileNav,
}: NavItemsWrapperProps) => (
  <div className="flex flex-row lg:items-center gap-6 relative">

    {/* NAV LINKS */}
    {NAV_ITEMS.map((item) => (
      <div key={item.path} className="relative">
        <NavLink
          className={({ isActive }) =>
            cn(
              "text-base transition-colors duration-300 font-semibold text-[#534741]",
              isActive
                ? "underline underline-offset-4"
                : "hover:text-[#8b6439]"
            )
          }
          to={item.path}
          onClick={updateExpandMobileNav}
        >
          {item.label}
        </NavLink>
      </div>
    ))}

    {/* SEARCH BUTTON */}
   {/* SEARCH BAR */}
<div className="flex items-center bg-white/10 border border-[#534741] rounded-full px-4 py-2 w-[220px] backdrop-blur-md">
  
  <Icon
    icon="mdi:magnify"
    width="22"
    height="22"
    className="text-[#534741]"
  />

  <input
    type="text"
    placeholder="Search perfumes..."
    className="bg-transparent outline-none border-none text-[#534741] placeholder:text-[#534741]text-sm ml-2 w-full"
  />
</div>

{/* CART BUTTON */}
<NavLink to="/cart">
  <Button
    isIconOnly
    variant="light"
    className="text-[#534741]"
  >
    <Icon
      icon="mdi:cart-outline"
      width="28"
      height="28"
    />
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
  const [isMenuHidden, setMenuHidden] = useState(
    !expandMobileState
  );

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

  const handleAnimationComplete = (
    definition: string
  ) => {
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
      {/* CLOSE BUTTON */}
      <Button
        className="self-end text-white"
        isIconOnly
        variant="light"
        size="lg"
        onPress={updateExpandMobileNav}
      >
        <Icon
          className="text-[32px]"
          icon="line-md:close"
        />
      </Button>

      {/* MOBILE LINKS */}
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

        {/* MOBILE SEARCH */}
        <Button
          className="text-white"
          variant="light"
          startContent={
            <Icon icon="mdi:magnify" width="24" />
          }
        >
          Search
        </Button>

        {/* MOBILE CART */}
        <NavLink to="/cart" className="w-full">
          <Button
            className="bg-white text-[#19461A] px-8 py-2 text-lg justify-center rounded-lg mt-2"
            size="lg"
            startContent={
              <Icon
                icon="mdi:cart-outline"
                width="24"
              />
            }
          >
            Cart
          </Button>
        </NavLink>

        {/* CONTACT BUTTON */}
        <NavLink to="/contact-us" className="w-full">
          <Button
            className="bg-white text-[#19461A] px-8 py-2 text-lg justify-center rounded-lg mt-2"
            size="lg"
          >
            Contact Us
          </Button>
        </NavLink>
      </div>
    </motion.div>
  );
};