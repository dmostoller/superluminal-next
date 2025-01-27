"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import Search from "./Search";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const NavItems = () => (
    <>
      <NavigationMenuItem>
        <Link href="/music" legacyBehavior passHref>
          <NavigationMenuTrigger
            className={`${navigationMenuTriggerStyle()} rounded bg-transparent hover:bg-accent transition-colors`}
          >
            Music
          </NavigationMenuTrigger>
        </Link>
        <NavigationMenuContent>
          <div className="grid gap-3 p-4 w-full">
            <NavigationMenuLink asChild>
              <Link
                href="/music/superluminal"
                className={`${navigationMenuTriggerStyle()} rounded bg-transparent hover:bg-accent transition-colors w-full`}
              >
                Superluminal
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/music/kabayun"
                className={`${navigationMenuTriggerStyle()} rounded bg-transparent hover:bg-accent transition-colors w-full`}
              >
                Kabayun
              </Link>
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link
          href="/about"
          className={`${navigationMenuTriggerStyle()} rounded bg-transparent hover:bg-accent transition-colors`}
        >
          About
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link
          href="/learn"
          className={`${navigationMenuTriggerStyle()} rounded bg-transparent hover:bg-accent transition-colors`}
        >
          Learn
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link
          href="/shows"
          className={`${navigationMenuTriggerStyle()} rounded bg-transparent hover:bg-accent transition-colors`}
        >
          Shows
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link
          href="/video"
          className={`${navigationMenuTriggerStyle()} rounded bg-transparent hover:bg-accent transition-colors`}
        >
          Video
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link
          href="/contact"
          className={`${navigationMenuTriggerStyle()} rounded bg-transparent hover:bg-accent transition-colors`}
        >
          Contact
        </Link>
      </NavigationMenuItem>
    </>
  );

  const MobileNavItems = () => (
    <div className="flex flex-col space-y-4 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <DrawerClose asChild>
          <Button variant="ghost" size="icon">
            <X className="h-5 w-5" />
          </Button>
        </DrawerClose>
      </div>
      <div className="flex items-center justify-between space-x-4 pt-4 border-t">
        <Search />
        <ModeToggle />
      </div>
      <Link
        href="/music"
        className="text-foreground hover:text-primary transition-colors py-2"
        onClick={() => setOpen(false)}
      >
        Music
      </Link>
      <div className="pl-4 space-y-2">
        <Link
          href="/music/superluminal"
          className="text-muted-foreground hover:text-primary transition-colors block py-1"
          onClick={() => setOpen(false)}
        >
          Superluminal
        </Link>
        <Link
          href="/music/kabayun"
          className="text-muted-foreground hover:text-primary transition-colors block py-1"
          onClick={() => setOpen(false)}
        >
          Kabayun
        </Link>
      </div>
      {[
        ["About", "/about"],
        ["Learn", "/learn"],
        ["Shows", "/shows"],
        ["Video", "/video"],
        ["Contact", "/contact"],
      ].map(([label, href]) => (
        <Link
          key={href}
          href={href}
          className="text-foreground hover:text-primary transition-colors py-2"
          onClick={() => setOpen(false)}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <Link href="/" className="relative h-8 w-8">
            <Image
              src="/super-logo-white.png"
              alt="Superluminal Logo"
              fill
              className={`object-contain ${theme === "light" ? "invert" : ""}`}
              priority={false}
              sizes="32px"
              loading="lazy"
            />
          </Link> */}
          {/* <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Superluminal | Kabayun</span>
          </Link> */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-20 w-48">
              <Image
                src="/sl-text.png"
                alt="Superluminal"
                fill
                className="object-contain"
                priority={false}
                sizes="192px"
                loading="lazy"
              />
            </div>
          </Link>
        </div>
        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <VisuallyHidden>
                <DrawerTitle className="text-lg font-semibold px-6 pt-6">
                  Menu
                </DrawerTitle>
              </VisuallyHidden>
              <MobileNavItems />
            </DrawerContent>
          </Drawer>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavItems />
            </NavigationMenuList>
            <Search />
            <ModeToggle />
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
