import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import LightPillar from "@/components/landing/LightPillar";
import "./LightPillar.css";

function readRootTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/** Light mode: professional blue → soft sky (white + blue theme). */
const PILLAR_LIGHT_TOP = "#0A66C2";
const PILLAR_LIGHT_BOTTOM = "#93C5FD";

/** Dark mode: bright blue pillar on deep navy. */
const PILLAR_DARK_TOP = "#3B82F6";
const PILLAR_DARK_BOTTOM = "#60A5FA";

/**
 * Full-viewport fixed WebGL pillar behind the entire landing page.
 * Pointer events pass through to content.
 */
export function LandingLightPillarBackground() {
  const reduceMotion = useReducedMotion();
  const [liveTheme, setLiveTheme] = useState<"light" | "dark">(readRootTheme);

  useEffect(() => {
    const sync = () => setLiveTheme(readRootTheme());
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {!reduceMotion ? (
        <>
          <div className="absolute inset-0 bg-background" aria-hidden />
          {/* Light: CSS pillar bed (always visible on white; WebGL stacks on top). Dark: vignette is handled below + WebGL + screen blend. */}
          {liveTheme === "light" ? (
            <div className="absolute inset-0 landing-light-pillar-bed" aria-hidden />
          ) : null}
          <div className="absolute inset-0 h-full min-h-[100dvh] w-full">
            <LightPillar
              topColor={liveTheme === "dark" ? PILLAR_DARK_TOP : PILLAR_LIGHT_TOP}
              bottomColor={liveTheme === "dark" ? PILLAR_DARK_BOTTOM : PILLAR_LIGHT_BOTTOM}
              intensity={1}
              rotationSpeed={0.28}
              glowAmount={0.0025}
              pillarWidth={3}
              pillarHeight={0.4}
              noiseIntensity={0.5}
              pillarRotation={25}
              interactive={false}
              mixBlendMode={liveTheme === "dark" ? "screen" : undefined}
              compositeForLightBackground={liveTheme === "light"}
              quality="high"
            />
          </div>
          {/* Dark vignette; light: whisper-thin veil so text stays crisp without erasing the CSS/WebGL pillar */}
          {liveTheme === "light" ? (
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-blue-50/25 dark:hidden" />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-background/58 via-background/48 to-background/62" />
              <div className="absolute inset-0 bg-background/32" />
            </>
          )}
        </>
      ) : liveTheme === "light" ? (
        <div className="absolute inset-0 landing-light-pillar-bed" aria-hidden />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/15" />
      )}
    </div>
  );
}
