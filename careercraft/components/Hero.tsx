"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/* Spotlight Background Effects */}
      <Spotlight className="-top-60 -left-10 md:-left-32 md:-top-40 h-screen z-0" fill="white" />
      <Spotlight className="h-[80vh] w-[50vw] top-0 left-full z-0" fill="purple" />
      <Spotlight className="left-80 top-10 h-[80vh] w-[50vw] z-0" fill="blue" />

      {/* Animated Text & Button */}
      <div className="z-10 flex min-h-64 items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-black text-base text-gray-300 transition-all ease-in hover:cursor-pointer hover:bg-gray-800 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-700"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-gray-300 hover:text-gray-500 dark:hover:text-gray-400">
            <span>✨ Introducing CareerCraft</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
    </div>
  );
};

export default Hero;
