"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { Languages, Mail, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary-foreground text-white ",
        annexes: "bg-white text-bluetomidgray hover:bg-bluetomidgray hover:text-white drop-shadow-md",
        secondary: "bg-bluetowhite text-white hover:bg-[#9FC9F6]",
        bluetomidgray:
          "bg-bluetomidgray/90 text-bluetomidgray-foreground hover:bg-bluetomidgray/75",
        outline:
          "border border-input bg-background hover:bg-reversed hover:text-reversed-foreground",
        ghost: "hover:bg-reversed hover:text-reversed-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-3 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  typeButton?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, typeButton, ...props },
    ref,
  ) => {
    const t = useScopedI18n("button");

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {typeButton === "github" ? (
          <Link href="https://github.com/Pamacea" target="_blank" className="flex items-center gap-2 font-semibold uppercase">
            <p>Github</p>
            <Image src="/svg/lucideGithub.svg" alt="" width={24} height={24} className="size-4 lg:size-full mt-1 lg:mt-0" />
          </Link>
        ) : typeButton === "contact" ? (
          <Link href="mailto:pamacea@live.fr" className="flex items-center gap-2 text-reversed font-semibold uppercase">
            <p>{t("contact")}</p>
            <Mail size={24} className="size-4 lg:size-full mt-1 lg:mt-0"/>
          </Link>
        ) : (
          props.children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
