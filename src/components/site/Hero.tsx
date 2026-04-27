import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-landscape.jpg";
import chief from "@/assets/chief-portrait.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Rolling green hills of Bombali Shebora Chiefdom at sunset"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container relative">
        <div className="grid items-end gap-6 py-10 md:grid-cols-2 md:py-16 lg:min-h-[560px] lg:py-20">
          {/* Text */}
          <div className="max-w-xl">
            <p className="font-display text-2xl italic text-secondary md:text-3xl">Welcome to</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-[0.95] text-primary sm:text-5xl md:text-6xl">
              BOMBALI SHEBORA
              <span className="mt-1 block text-secondary">CHIEFDOM</span>
            </h1>
            <div className="my-5 h-1 w-28 rounded-full bg-secondary" />
            <p className="font-display text-xl font-semibold text-primary md:text-2xl">
              Unity. Tradition. Development.
            </p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">
              Together, we preserve our heritage, promote peace, and drive sustainable development for a better future.
            </p>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-secondary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Chief portrait */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <img
              src={chief}
              alt="Usif Kamara — Paramount Chief, Bombali Shebora Chiefdom"
              className="mx-auto h-auto w-full max-w-sm object-contain drop-shadow-2xl md:max-w-md lg:max-w-lg"
              width={1024}
              height={1024}
            />
            <div className="absolute right-2 top-6 hidden rounded-md bg-background/85 px-4 py-2 text-right shadow-card backdrop-blur md:block">
              <p className="font-display text-lg font-bold text-primary">USIF KAMARA</p>
              <p className="text-xs text-muted-foreground">Paramount Chief</p>
              <p className="text-xs text-muted-foreground">Bombali Shebora Chiefdom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
