"use client";

import {
  reportMeta,
  executiveSummary,
  organicGoogle,
  organicBing,
  googleBusinessProfile,
  conversions,
  brandNonBrand,
  competitors,
  keywords,
  sov,
  aiGeo,
  content,
  backlinks,
  siteHealth,
  nextSteps,
} from "@/data/report";
import {
  SlideChrome,
  DeltaBadge,
  MetricCard,
  BulletList,
  SectionDivider,
} from "@/components/ui/SlideChrome";
import {
  BingTrendChart,
  ConversionTotalsChart,
  ChannelMoMChart,
  CompetitorBarChart,
  KeywordBandChart,
  AiSovChart,
} from "@/components/ui/Charts";

function fmt(n: number) {
  return n.toLocaleString("en-SG");
}

function TitleSlide() {
  return (
    <SlideChrome dark>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-2xl font-bold backdrop-blur">
          HP
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-teal-200">
          {reportMeta.brand} · {reportMeta.market}
        </p>
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-white">
          {reportMeta.title}
        </h1>
        <p className="mt-3 text-2xl font-medium text-teal-100">{reportMeta.period}</p>
        <a
          href={reportMeta.siteUrl}
          className="mt-8 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm text-teal-50 backdrop-blur hover:bg-white/20"
          target="_blank"
          rel="noreferrer"
        >
          {reportMeta.siteUrl}
        </a>
      </div>
    </SlideChrome>
  );
}

function ExecSummarySlide() {
  return (
    <SlideChrome title="Executive Summary" section="Overview">
      <div className="grid h-full grid-cols-2 gap-8">
        <BulletList items={executiveSummary.bullets} />
        <div className="grid grid-cols-2 gap-3 content-start">
          <MetricCard label="Organic traffic" value="−1.9%" sub="MoM" delta={-1.9} />
          <MetricCard label="Organic conversions" value="+17.7%" sub="MoM" delta={17.7} />
          <MetricCard label="Share of voice" value="−1.9%" sub="MoM" delta={-1.9} />
          <MetricCard label="Site health" value="Good" sub="Ahrefs" />
        </div>
      </div>
    </SlideChrome>
  );
}

function OrganicGoogleSlide() {
  return (
    <SlideChrome
      title="Organic Traffic – Google (Singapore)"
      section="Performance"
      source={organicGoogle.source}
    >
      <div className="grid h-full grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">Month over month</p>
              <DeltaBadge value={organicGoogle.mom.changePct} />
            </div>
            <p className="mt-2 text-2xl font-bold tabular-nums text-slate-900">
              {fmt(organicGoogle.mom.previous)} → {fmt(organicGoogle.mom.current)}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Mainly from: {organicGoogle.mom.drivers.join(" · ")}
            </p>
          </div>
          <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">Year over year</p>
              <DeltaBadge value={organicGoogle.yoy.changePct} />
            </div>
            <p className="mt-2 text-2xl font-bold tabular-nums text-slate-900">
              {fmt(organicGoogle.yoy.previous)} → {fmt(organicGoogle.yoy.current)}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Mainly from: {organicGoogle.yoy.drivers.join(" · ")}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-xl border border-teal-100 bg-teal-50/30 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-teal-700">
            Top pages bringing traffic
          </p>
          <ul className="space-y-3">
            {organicGoogle.topPages.map((p) => (
              <li
                key={p.name}
                className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm"
              >
                <span className="rounded-md bg-teal-100 px-2 py-0.5 text-[10px] font-bold uppercase text-teal-800">
                  {p.type}
                </span>
                <span className="font-medium text-slate-800">{p.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideChrome>
  );
}

function OrganicBingSlide() {
  return (
    <SlideChrome
      title="Organic Traffic – Bing"
      section="Performance"
      source={organicBing.source}
    >
      <div className="grid h-full grid-cols-5 gap-5">
        <div className="col-span-2 space-y-3">
          <MetricCard
            label="Clicks MoM"
            value={`${fmt(organicBing.clicks.previous)} → ${fmt(organicBing.clicks.current)}`}
            delta={organicBing.clicks.changePct}
            sub={organicBing.clicks.note}
          />
          <MetricCard
            label="Impressions MoM"
            value={`${fmt(organicBing.impressions.previous)} → ${fmt(organicBing.impressions.current)}`}
            delta={organicBing.impressions.changePct}
            sub={organicBing.impressions.note}
          />
        </div>
        <div className="col-span-3 h-full min-h-0 rounded-xl border border-slate-100 bg-slate-50/50 p-3">
          <p className="mb-1 text-xs font-semibold text-slate-500">Mar–Aug trend</p>
          <div className="h-[calc(100%-1.25rem)]">
            <BingTrendChart data={organicBing.monthly} />
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

function GbpSlide() {
  return (
    <SlideChrome
      title="Google Business Profile"
      section="Performance"
      source={googleBusinessProfile.source}
    >
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-center gap-6">
        <div className="grid grid-cols-2 gap-5">
          <MetricCard
            label="Calls"
            value={`${googleBusinessProfile.calls.previous} → ${googleBusinessProfile.calls.current}`}
            delta={googleBusinessProfile.calls.changePct}
            sub="Month over month"
          />
          <MetricCard
            label="Website clicks"
            value={`${googleBusinessProfile.websiteClicks.previous} → ${googleBusinessProfile.websiteClicks.current}`}
            delta={googleBusinessProfile.websiteClicks.changePct}
            sub="Month over month"
          />
        </div>
        <p className="text-center text-sm text-slate-500">
          Both calls and website clicks declined MoM on Google Business Profile.
        </p>
      </div>
    </SlideChrome>
  );
}

function ConversionsOverviewSlide() {
  const totals = [
    { month: "Apr", total: conversions.totals.apr },
    { month: "May", total: conversions.totals.may },
    { month: "Jun", total: conversions.totals.jun },
    { month: "Jul", total: conversions.totals.jul },
    { month: "Aug", total: conversions.totals.aug },
  ];
  return (
    <SlideChrome
      title="Conversions (Singapore)"
      section="Performance"
      source={conversions.source}
    >
      <div className="grid h-full grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-5">
            <p className="text-sm font-semibold text-slate-700">Organic conversions MoM</p>
            <div className="mt-2 flex items-center gap-3">
              <p className="text-3xl font-bold tabular-nums">
                {conversions.mom.previous} → {conversions.mom.current}
              </p>
              <DeltaBadge value={conversions.mom.changePct} />
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-700">Year over year</p>
            <p className="mt-2 text-lg text-slate-600">{conversions.yoy.note}</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
              Conversion pages
            </p>
            <BulletList items={conversions.conversionPages} />
          </div>
        </div>
        <div className="h-full min-h-0 rounded-xl border border-slate-100 bg-slate-50/50 p-3">
          <p className="mb-1 text-xs font-semibold text-slate-500">Apr–Aug totals</p>
          <div className="h-[calc(100%-1.25rem)]">
            <ConversionTotalsChart data={totals} />
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

function ConversionsDetailSlide() {
  return (
    <SlideChrome
      title="Conversions – Channel Detail"
      section="Performance"
      source={conversions.source}
    >
      <div className="grid h-full grid-cols-5 gap-4">
        <div className="col-span-2 space-y-2 overflow-auto pr-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Comparing MoM
          </p>
          {conversions.momChannels.map((c) => (
            <div
              key={c.label}
              className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-3 py-2 shadow-sm"
            >
              <div>
                <p className="text-sm font-medium text-slate-800">{c.label}</p>
                <p className="text-xs text-slate-500">
                  {c.previous} → {c.current}
                </p>
              </div>
              <DeltaBadge value={c.changePct} />
            </div>
          ))}
        </div>
        <div className="col-span-3 flex min-h-0 flex-col gap-2">
          <div className="h-36 shrink-0 rounded-xl border border-slate-100 bg-slate-50/50 p-2">
            <ChannelMoMChart data={conversions.momChannels} />
          </div>
          <div className="min-h-0 flex-1 overflow-auto rounded-xl border border-slate-100">
            <table className="w-full text-left text-[11px]">
              <thead className="sticky top-0 bg-teal-700 text-white">
                <tr>
                  <th className="px-2 py-1.5 font-semibold">Channel</th>
                  {["Apr", "May", "Jun", "Jul", "Aug"].map((m) => (
                    <th key={m} className="px-2 py-1.5 text-right font-semibold">
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {conversions.table.map((row, i) => (
                  <tr
                    key={row.name}
                    className={i % 2 === 0 ? "bg-white" : "bg-teal-50/40"}
                  >
                    <td className="px-2 py-1 text-slate-700">{row.name}</td>
                    <td className="px-2 py-1 text-right tabular-nums">{row.apr}</td>
                    <td className="px-2 py-1 text-right tabular-nums">{row.may}</td>
                    <td className="px-2 py-1 text-right tabular-nums">{row.jun}</td>
                    <td className="px-2 py-1 text-right tabular-nums">{row.jul}</td>
                    <td className="px-2 py-1 text-right tabular-nums font-semibold">
                      {row.aug}
                    </td>
                  </tr>
                ))}
                <tr className="bg-teal-100 font-semibold">
                  <td className="px-2 py-1.5">Total</td>
                  <td className="px-2 py-1.5 text-right">{conversions.totals.apr}</td>
                  <td className="px-2 py-1.5 text-right">{conversions.totals.may}</td>
                  <td className="px-2 py-1.5 text-right">{conversions.totals.jun}</td>
                  <td className="px-2 py-1.5 text-right">{conversions.totals.jul}</td>
                  <td className="px-2 py-1.5 text-right">{conversions.totals.aug}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

function BrandSlide() {
  return (
    <SlideChrome title="Brand Keywords" section="Search" source={brandNonBrand.source}>
      <div className="grid h-full grid-cols-2 gap-6">
        <div className="rounded-xl border border-teal-100 bg-teal-50/40 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-teal-700">
            MoM*
          </p>
          <BulletList items={brandNonBrand.brand.mom} />
        </div>
        <div className="rounded-xl border border-sky-100 bg-sky-50/40 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-sky-700">
            YoY*
          </p>
          <BulletList items={brandNonBrand.brand.yoy} />
        </div>
        <p className="col-span-2 text-[11px] leading-relaxed text-slate-400">
          *{brandNonBrand.gscNote}
        </p>
      </div>
    </SlideChrome>
  );
}

function NonBrandSlide() {
  return (
    <SlideChrome
      title="Non-Brand Keywords"
      section="Search"
      source={brandNonBrand.source}
    >
      <div className="grid h-full grid-cols-2 gap-6">
        <div className="rounded-xl border border-teal-100 bg-teal-50/40 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-teal-700">
            MoM*
          </p>
          <BulletList items={brandNonBrand.nonBrand.mom} />
        </div>
        <div className="rounded-xl border border-sky-100 bg-sky-50/40 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-sky-700">
            YoY*
          </p>
          <BulletList items={brandNonBrand.nonBrand.yoy} />
        </div>
        <p className="col-span-2 text-[11px] leading-relaxed text-slate-400">
          *{brandNonBrand.gscNote}
        </p>
      </div>
    </SlideChrome>
  );
}

function CompetitorsSlide() {
  const valueBars = competitors.trafficValue.map((r) => ({
    name: r.name.replace("The ", ""),
    Jul: r.jul,
    Aug: r.aug,
  }));
  return (
    <SlideChrome
      title="Competitor Analysis"
      section="Competitors"
      source={competitors.source}
    >
      <div className="grid h-full grid-cols-2 gap-5">
        <div className="space-y-3">
          <BulletList items={competitors.summary} />
          <p className="text-xs text-slate-400">
            Chart values are relative indices for presentation (editable in{" "}
            <code className="rounded bg-slate-100 px-1">src/data/report.ts</code>).
          </p>
        </div>
        <div className="flex min-h-0 flex-col gap-3">
          <div className="h-1/2 min-h-0 rounded-xl border border-slate-100 bg-slate-50/50 p-2">
            <p className="mb-1 text-[10px] font-semibold uppercase text-slate-500">
              Organic traffic value (index)
            </p>
            <div className="h-[calc(100%-1rem)]">
              <ChannelMoMChart
                data={valueBars.map((r) => ({
                  label: r.name,
                  previous: r.Jul,
                  current: r.Aug,
                }))}
              />
            </div>
          </div>
          <div className="h-1/2 min-h-0 rounded-xl border border-slate-100 bg-slate-50/50 p-2">
            <p className="mb-1 text-[10px] font-semibold uppercase text-slate-500">
              Average organic traffic (index) — HP leads
            </p>
            <div className="h-[calc(100%-1rem)]">
              <CompetitorBarChart data={competitors.avgOrganicTraffic} />
            </div>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

function KeywordsSlide() {
  return (
    <SlideChrome
      title="Keyword Rankings Progress"
      section="Keywords"
      source={keywords.source}
    >
      <div className="grid h-full grid-cols-2 gap-5">
        <div className="space-y-3">
          {keywords.positions.map((p) => (
            <div
              key={p.band}
              className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-800">{p.band}</p>
                <DeltaBadge value={p.changePct} />
              </div>
              <p className="mt-1 text-xl font-bold tabular-nums text-slate-900">
                {p.previous} → {p.current}
              </p>
            </div>
          ))}
          <p className="text-xs leading-relaxed text-slate-400">{keywords.note}</p>
        </div>
        <div className="h-full min-h-0 rounded-xl border border-slate-100 bg-slate-50/50 p-3">
          <KeywordBandChart data={keywords.positions} />
        </div>
      </div>
    </SlideChrome>
  );
}

function KeywordsLandingSlide() {
  return (
    <SlideChrome
      title="Keyword Rankings – Landing Pages"
      section="Keywords"
      source={keywords.source}
    >
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-center">
        <BulletList items={keywords.landingPages} />
      </div>
    </SlideChrome>
  );
}

function KeywordsArticlesSlide() {
  return (
    <SlideChrome
      title="Keyword Rankings – Articles"
      section="Keywords"
      source={keywords.source}
    >
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-center">
        <BulletList items={keywords.articles} />
      </div>
    </SlideChrome>
  );
}

function SovSlide() {
  return (
    <SlideChrome title="Share of Voice (SOV)" section="Keywords" source={sov.source}>
      <div className="grid h-full grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-600">SOV MoM</span>
            <DeltaBadge value={sov.changePct} />
          </div>
          <BulletList items={sov.bullets} />
          <div className="space-y-2 rounded-xl bg-slate-50 p-4">
            {sov.definitions.map((d) => (
              <p key={d.term} className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{d.term}:</span>{" "}
                {d.definition}
              </p>
            ))}
          </div>
        </div>
        <div className="h-full min-h-0 rounded-xl border border-slate-100 bg-slate-50/50 p-3">
          <p className="mb-1 text-[10px] font-semibold uppercase text-slate-500">
            Relative SOV among competitors (illustrative index)
          </p>
          <div className="h-[calc(100%-1rem)]">
            <CompetitorBarChart data={sov.competitorSov} dataKey="sov" />
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

function AiCitationsSlide() {
  return (
    <SlideChrome
      title="AI Citations & GEO"
      section="GEO"
      sources={["Ahrefs", "Google Analytics"]}
    >
      <div className="grid h-full grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-[15px] leading-relaxed text-slate-700">{aiGeo.summary}</p>
          <div className="grid grid-cols-3 gap-3">
            <MetricCard label="AI sessions" value={aiGeo.augustSessions.sessions} />
            <MetricCard
              label="Form submissions"
              value={aiGeo.augustSessions.formSubmissions}
            />
            <MetricCard
              label="WhatsApp contacts"
              value={aiGeo.augustSessions.whatsappContacts}
            />
          </div>
        </div>
        <div className="space-y-2 overflow-auto">
          {aiGeo.platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-teal-100 bg-white px-3 py-2 shadow-sm"
            >
              <p className="text-sm font-semibold text-teal-800">{p.name}</p>
              <p className="mt-0.5 text-xs leading-snug text-slate-500">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

function AiSovSlide() {
  return (
    <SlideChrome title="AI Share of Voice" section="GEO" source="Ahrefs">
      <div className="grid h-full grid-cols-2 gap-6">
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-[15px] leading-relaxed text-slate-700">
            As of end August, we have the highest AI Share of Voice at{" "}
            <strong>{aiGeo.aiSov.hearingPartners}%</strong>, followed by The Hearing
            Centre at <strong>{aiGeo.aiSov.hearingCentre}%</strong>.
          </p>
          <p className="text-sm text-slate-500">{aiGeo.aiSov.note}</p>
          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              label="Hearing Partners AI SOV"
              value={`${aiGeo.aiSov.hearingPartners}%`}
            />
            <MetricCard
              label="The Hearing Centre AI SOV"
              value={`${aiGeo.aiSov.hearingCentre}%`}
            />
          </div>
        </div>
        <div className="h-full min-h-0 rounded-xl border border-slate-100 bg-slate-50/50 p-3">
          <AiSovChart
            hp={aiGeo.aiSov.hearingPartners}
            competitor={aiGeo.aiSov.hearingCentre}
          />
        </div>
      </div>
    </SlideChrome>
  );
}

function ContentSlide() {
  return (
    <SlideChrome title="Content Performance" section="Content" source={content.source}>
      <div className="mx-auto flex h-full max-w-2xl flex-col justify-center">
        <p className="mb-4 text-sm text-slate-500">
          The articles bringing in the most traffic for the website include:
        </p>
        <ol className="space-y-3">
          {content.topArticles.map((a, i) => (
            <li
              key={a}
              className="flex items-center gap-4 rounded-xl border border-teal-100 bg-gradient-to-r from-teal-50 to-white px-5 py-4 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                {i + 1}
              </span>
              <span className="text-lg font-semibold text-slate-800">{a}</span>
            </li>
          ))}
        </ol>
      </div>
    </SlideChrome>
  );
}

function BacklinksSlide() {
  return (
    <SlideChrome title="Backlinks" section="Links" source={backlinks.source}>
      <div className="mx-auto flex h-full max-w-2xl flex-col justify-center">
        <BulletList items={backlinks.bullets} />
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          Referring domains increased significantly MoM — mostly spammy. Monitor and
          disavow as needed after the new site launch.
        </div>
      </div>
    </SlideChrome>
  );
}

function SiteHealthSlide() {
  return (
    <SlideChrome title="Site Health" section="Technical SEO" source={siteHealth.source}>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-emerald-50">
          <span className="text-4xl font-bold text-emerald-700">✓</span>
        </div>
        <h3 className="mt-6 text-3xl font-bold text-slate-900">Site health is good</h3>
        <p className="mt-2 text-slate-500">{siteHealth.period} · Ahrefs</p>
      </div>
    </SlideChrome>
  );
}

function NextStepsSlide() {
  return (
    <SlideChrome title="Next Steps" section="Actions">
      <div className="grid h-full grid-cols-2 gap-6">
        <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            1 · {nextSteps.webDev.title}
          </p>
          <ul className="mt-4 space-y-3">
            {nextSteps.webDev.items.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-slate-700">
                <span className="mt-1 text-teal-600">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-sky-200 bg-sky-50/50 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
            2 · {nextSteps.seo.title}
          </p>
          <ul className="mt-4 space-y-3">
            {nextSteps.seo.items.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-slate-700">
                <span className="mt-1 text-sky-600">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideChrome>
  );
}

function ThankYouSlide() {
  return (
    <SlideChrome dark>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-bold tracking-tight text-white">Thank You</h2>
        <p className="mt-4 text-lg text-teal-100">
          {reportMeta.brand} · SEO Report · {reportMeta.period}
        </p>
        <p className="mt-8 text-sm text-teal-200/70">{reportMeta.siteUrl}</p>
      </div>
    </SlideChrome>
  );
}

export type SlideDef = {
  id: string;
  label: string;
  Component: React.ComponentType;
};

export const slides: SlideDef[] = [
  { id: "title", label: "Title", Component: TitleSlide },
  { id: "exec", label: "Executive Summary", Component: ExecSummarySlide },
  {
    id: "perf",
    label: "Performance Summary",
    Component: () => (
      <SectionDivider title="Performance Summary" subtitle="Traffic, GBP & conversions" />
    ),
  },
  { id: "google", label: "Organic Google", Component: OrganicGoogleSlide },
  { id: "bing", label: "Organic Bing", Component: OrganicBingSlide },
  { id: "gbp", label: "Google Business Profile", Component: GbpSlide },
  { id: "conv", label: "Conversions", Component: ConversionsOverviewSlide },
  { id: "conv-detail", label: "Conversion Detail", Component: ConversionsDetailSlide },
  { id: "brand", label: "Brand", Component: BrandSlide },
  { id: "nonbrand", label: "Non-Brand", Component: NonBrandSlide },
  {
    id: "comp-sec",
    label: "Competitors",
    Component: () => (
      <SectionDivider title="Competitor Analysis" subtitle="Ahrefs organic visibility" />
    ),
  },
  { id: "competitors", label: "Competitor Detail", Component: CompetitorsSlide },
  {
    id: "kw-sec",
    label: "Keywords",
    Component: () => (
      <SectionDivider title="Keyword Rankings" subtitle="Positions, landing pages & articles" />
    ),
  },
  { id: "keywords", label: "Keyword Progress", Component: KeywordsSlide },
  { id: "kw-landing", label: "Landing Pages", Component: KeywordsLandingSlide },
  { id: "kw-articles", label: "Articles", Component: KeywordsArticlesSlide },
  { id: "sov", label: "Share of Voice", Component: SovSlide },
  {
    id: "geo-sec",
    label: "GEO",
    Component: () => (
      <SectionDivider title="GEO / AI Visibility" subtitle="Citations & AI share of voice" />
    ),
  },
  { id: "ai", label: "AI Citations", Component: AiCitationsSlide },
  { id: "ai-sov", label: "AI SOV", Component: AiSovSlide },
  {
    id: "content-sec",
    label: "Content",
    Component: () => <SectionDivider title="Content" subtitle="Top performing articles" />,
  },
  { id: "content", label: "Content Performance", Component: ContentSlide },
  {
    id: "links-sec",
    label: "Links",
    Component: () => <SectionDivider title="Links" subtitle="Backlink profile" />,
  },
  { id: "backlinks", label: "Backlinks", Component: BacklinksSlide },
  {
    id: "tech-sec",
    label: "Technical",
    Component: () => <SectionDivider title="Technical SEO" subtitle="Site health" />,
  },
  { id: "health", label: "Site Health", Component: SiteHealthSlide },
  {
    id: "next-sec",
    label: "Next Steps",
    Component: () => <SectionDivider title="Next Steps" />,
  },
  { id: "next", label: "Actions", Component: NextStepsSlide },
  { id: "thanks", label: "Thank You", Component: ThankYouSlide },
];
