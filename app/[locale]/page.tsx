import { Contact } from "@/components/Testimonials/Contact";
import { Hero } from "@/components/Hero/Hero";
import { Projects } from "@/components/Projects/Projects";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Tools } from "@/components/Tools/Tools";
import { Header } from "@/components/Header/Header";
import { Analytics } from "@vercel/analytics/react"
// import { getI18n } from "@/locales/server"

export default function Home() {
  // const t = await getI18n();

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Hero />
        <Projects />
        <Tools />
        <Testimonials />
        <Contact />
      </div>
      <Analytics />
    </>
  );
}
