"use client";

import { useCallback, useEffect, useState } from "react";
import { slides } from "@/components/slides";

function readInitialIndex(): number {
  if (typeof window === "undefined") return 0;
  const params = new URLSearchParams(window.location.search);
  const q = params.get("slide");
  if (q !== null) {
    const n = Number.parseInt(q, 10);
    if (!Number.isNaN(n) && n >= 0 && n < slides.length) return n;
  }
  const hash = window.location.hash.replace(/^#/, "");
  if (hash) {
    const byId = slides.findIndex((s) => s.id === hash);
    if (byId >= 0) return byId;
    const n = Number.parseInt(hash, 10);
    if (!Number.isNaN(n) && n >= 0 && n < slides.length) return n;
  }
  return 0;
}

function writeUrl(index: number) {
  const id = slides[index]?.id ?? String(index);
  const url = new URL(window.location.href);
  url.searchParams.set("slide", String(index));
  url.hash = id;
  window.history.replaceState(null, "", url.toString());
}

export default function Presentation() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const total = slides.length;

  useEffect(() => {
    setIndex(readInitialIndex());
    setReady(true);
  }, []);

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setIndex(clamped);
      writeUrl(clamped);
    },
    [total],
  );

  useEffect(() => {
    if (!ready) return;
    writeUrl(index);
  }, [ready, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "PageDown" ||
        e.key === "Enter"
      ) {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total]);

  useEffect(() => {
    const onHash = () => {
      const next = readInitialIndex();
      setIndex(next);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Slide = slides[index]?.Component;
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      {/* Progress bar */}
      <div className="h-1 w-full bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-sky-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Stage — 16:9-ish */}
      <div className="flex flex-1 items-center justify-center p-4 md:p-6">
        <div
          className="relative w-full max-w-6xl"
          style={{ aspectRatio: "16 / 9" }}
        >
          <div className="absolute inset-0">
            {Slide ? <Slide /> : null}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4 border-t border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-300 backdrop-blur">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800 disabled:opacity-30"
            aria-label="Previous slide"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index >= total - 1}
            className="rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800 disabled:opacity-30"
            aria-label="Next slide"
          >
            Next →
          </button>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 md:flex">
          <span className="truncate text-slate-400">{slides[index]?.label}</span>
        </div>

        <div className="flex items-center gap-3 tabular-nums">
          <span className="text-teal-300">
            {index + 1} / {total}
          </span>
          <select
            className="max-w-[10rem] rounded-lg border border-slate-700 bg-slate-900 px-2 py-1.5 text-xs"
            value={index}
            onChange={(e) => go(Number(e.target.value))}
            aria-label="Jump to slide"
          >
            {slides.map((s, i) => (
              <option key={s.id} value={i}>
                {i + 1}. {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="bg-slate-950 pb-2 text-center text-[10px] text-slate-600">
        Keyboard: ← → Space · Edit data in src/data/report.ts
      </p>
    </div>
  );
}
