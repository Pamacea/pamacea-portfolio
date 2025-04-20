import { useScroll } from "@/hooks/custom/useScroll";
import { useScopedI18n } from "@/locales/client";
import { NavbarLink } from "./NavbarLink";
import { ThemeButton } from "./ThemeButton";
import { TranslateButton } from "./TranslateButton";

export const Navbar = () => {
  const t = useScopedI18n("navbar");
  const { transformStyle } = useScroll();

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <ul className="relative mx-auto flex max-w-fit items-center justify-center gap-4 rounded-lg bg-white p-2 px-4 drop-shadow-[0px_3px_1px_rgba(0,0,0,0.25)] backdrop-blur-sm">
        <div
          className="absolute inset-2 flex items-center"
          style={transformStyle}
        >
          <svg
            viewBox="0 0 136 50"
            className="fill-bluetomidgray h-6 dark:opacity-40"
          >
            <path d="m136 25.5-24 16.022V9.479L136 25.5Z" />
            <path d="M0 10C0 4.477 4.477 0 10 0h100c5.523 0 10 4.477 10 10v30c0 5.523-4.477 10-10 10H10C4.477 50 0 45.523 0 40V10Z" />
          </svg>
        </div>
        <NavbarLink href="/#accueil">{t("home")}</NavbarLink>
        <NavbarLink href="/#projets">{t("projects")}</NavbarLink>
        <NavbarLink href="/#competences">{t("skills")}</NavbarLink>
        <NavbarLink href="/#avis">{t("notice")}</NavbarLink>
      </ul>
      <div className="flex w-fit flex-row gap-3 self-end">
        <TranslateButton />
        <ThemeButton />
      </div>
    </div>
  );
};
