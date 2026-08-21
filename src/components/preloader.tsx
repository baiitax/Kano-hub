"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import { brand } from "@/config/brand";

const KEY = "kanohub.preloader";

export function Preloader() {
  const [show, setShow] = useState(true);
  const [out, setOut] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) === "1") {
        setShow(false);
        return;
      }
    } catch {
      /* ignore */
    }
    const hold = window.setTimeout(() => setOut(true), 1600);
    const hide = window.setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {
        /* ignore */
      }
    }, 2200);
    return () => {
      window.clearTimeout(hold);
      window.clearTimeout(hide);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] grid place-items-center bg-emerald-950 transition-opacity duration-500 ${out ? "pointer-events-none opacity-0" : "opacity-100"}`}
      aria-live="polite"
      aria-label="KanoHub loading"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <div className="kh-preloader-mark">
          <BrandMark className="h-20 w-20 drop-shadow-2xl sm:h-24 sm:w-24" />
        </div>
        <p className="kh-preloader-name mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{brand.name}</p>
        <p className="kh-preloader-sub mt-2 text-sm font-medium text-emerald-200/90">{brand.subtitle}</p>
        <div className="mt-8 h-1 w-36 overflow-hidden rounded-full bg-white/15">
          <div className="kh-preloader-bar h-full rounded-full bg-amber-400" />
        </div>
      </div>
    </div>
  );
}
