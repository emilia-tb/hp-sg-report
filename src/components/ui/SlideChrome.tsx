"use client";

import { colors } from "@/data/report";

export function SlideChrome({
  children,
  title,
  section,
  source,
  sources,
  dark = false,
}: {
  children: React.ReactNode;
  title?: string;
  section?: string;
  source?: string;
  sources?: string[];
  dark?: boolean;
}) {
  const footnote = sources?.length
    ? `Source: ${sources.join(" · ")}`
    : source
      ? `Source: ${source}`
      : null;

  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-xl border shadow-2xl ${
        dark
          ? "border-teal-800 text-white"
          : "border-teal-100 bg-white text-slate-800"
      }`}
      style={
        dark
          ? {
              background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.tealDark} 55%, ${colors.teal} 100%)`,
            }
          : undefined
      }
    >
      <div
        className={`flex items-center justify-between border-b px-8 py-3 ${
          dark ? "border-white/15" : "border-teal-50 bg-gradient-to-r from-teal-50/80 to-sky-50/60"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
              dark ? "bg-white/20 text-white" : "bg-teal-600 text-white"
            }`}
          >
            HP
          </div>
          <div>
            {section && (
              <p
                className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  dark ? "text-teal-100/80" : "text-teal-600"
                }`}
              >
                {section}
              </p>
            )}
            {title && (
              <h2
                className={`text-xl font-semibold tracking-tight ${
                  dark ? "text-white" : "text-slate-900"
                }`}
              >
                {title}
              </h2>
            )}
          </div>
        </div>
        <p
          className={`text-xs font-medium ${
            dark ? "text-teal-100/70" : "text-slate-400"
          }`}
        >
          August 2026 · Singapore
        </p>
      </div>

      <div className="relative flex-1 overflow-hidden px-8 py-5">{children}</div>

      {footnote && (
        <div
          className={`border-t px-8 py-2 text-[11px] ${
            dark
              ? "border-white/10 text-teal-100/60"
              : "border-slate-100 text-slate-400"
          }`}
        >
          {footnote}
        </div>
      )}
    </div>
  );
}

export function DeltaBadge({
  value,
  suffix = "%",
}: {
  value: number;
  suffix?: string;
}) {
  const up = value > 0;
  const flat = value === 0;
  const color = flat
    ? "bg-slate-100 text-slate-600"
    : up
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : "bg-rose-50 text-rose-700 ring-rose-200";
  const sign = up ? "+" : "";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-semibold ring-1 ring-inset ${color}`}
    >
      {flat ? "Constant" : `${sign}${value}${suffix}`}
    </span>
  );
}

export function MetricCard({
  label,
  value,
  sub,
  delta,
}: {
  label: string;
  value: string | number;
  sub?: string;
  delta?: number;
}) {
  return (
    <div className="rounded-xl border border-teal-100 bg-gradient-to-br from-white to-teal-50/40 p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-700/80">
        {label}
      </p>
      <div className="mt-1 flex items-end gap-2">
        <p className="text-2xl font-bold tabular-nums text-slate-900">{value}</p>
        {typeof delta === "number" && <DeltaBadge value={delta} />}
      </div>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

export function BulletList({
  items,
  light = false,
}: {
  items: Array<string | { text: string; children?: string[] }>;
  light?: boolean;
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => {
        const text = typeof item === "string" ? item : item.text;
        const children = typeof item === "string" ? undefined : item.children;
        return (
          <li key={i} className="flex gap-3">
            <span
              className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                light ? "bg-teal-200" : "bg-teal-500"
              }`}
            />
            <div>
              <p
                className={`text-[15px] leading-snug ${
                  light ? "text-teal-50" : "text-slate-700"
                }`}
              >
                {text}
              </p>
              {children && (
                <ul className="mt-1.5 space-y-1 pl-1">
                  {children.map((c, j) => (
                    <li
                      key={j}
                      className={`text-sm ${
                        light ? "text-teal-100/80" : "text-slate-500"
                      }`}
                    >
                      ○ {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function SectionDivider({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <SlideChrome dark>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-teal-200/80">
          Section
        </p>
        <h2 className="text-5xl font-bold tracking-tight text-white">{title}</h2>
        {subtitle && (
          <p className="mt-4 max-w-xl text-lg text-teal-100/80">{subtitle}</p>
        )}
      </div>
    </SlideChrome>
  );
}
