'use client'

import { Suspense } from "react";
import SplashScreen from "@/components/splashscreen";
import { AnimatePresence } from "motion/react";
import HomeContent from "./HomeContent";

export default function HomePage() {
  return (
    <AnimatePresence>
      <Suspense fallback={<SplashScreen key="splash" />}>
        <HomeContent />
      </Suspense>
    </AnimatePresence>
  );
}