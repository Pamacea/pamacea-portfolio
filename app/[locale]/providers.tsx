import { LanguageProvider } from "@/components/providers/LanguageProvider";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
export const Providers = ({
  params,
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) => {
  return (
    <>
      <ReactQueryProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider locale={params.locale}>{children}</LanguageProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </>
  );
};
