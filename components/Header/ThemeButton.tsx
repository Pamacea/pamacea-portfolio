"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun, SunMoon } from "lucide-react";
import { AnimatedThemeIcon } from "./AnimatedThemeIcon";

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: SunMoon,
};

export const ThemeButton = () => {
  const { setTheme } = useTheme();

  return (
    <ul className="relative mx-auto flex max-w-fit items-center justify-center rounded-lg bg-white outline-none drop-shadow-[0px_3px_1px_rgba(0,0,0,0.25)] backdrop-blur-sm">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center p-3 text-staticblack outline-none group-hover:text-staticblack-foreground">
          <AnimatedThemeIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 w-32 rounded-md p-1 text-staticblack">
          <DropdownMenuGroup>
            {Object.keys(themeIcons).map((themeKey) => (
              <DropdownMenuItem
                key={themeKey}
                onClick={() => setTheme(themeKey)}
              >
                {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ul>
  );
};



