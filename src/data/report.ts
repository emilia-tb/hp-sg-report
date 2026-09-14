/**
 * Editable SEO report data — Hearing Partners Singapore · August 2026
 * Update metrics, bullets, and chart series here; slides read from this file.
 */

export const reportMeta = {
  title: "SEO Report",
  period: "August 2026",
  siteUrl: "https://www.hearingpartners.com.sg",
  brand: "Hearing Partners",
  market: "Singapore",
};

export const executiveSummary = {
  bullets: [
    { text: "Organic traffic decreased by 1.9% MoM" },
    { text: "Organic conversions increased by 17.7% MoM" },
    { text: "Share of voice (SOV) decreased by 1.9% MoM" },
    {
      text: "AI responses from AI Overview, ChatGPT and Copilot decreased MoM, while Gemini and Perplexity increased.",
    },
    { text: "Referring domains increased MoM" },
    { text: "Site health is good" },
  ],
};

export const organicGoogle = {
  mom: {
    changePct: -1.9,
    previous: 2233,
    current: 2190,
    drivers: ["Best hearing aid article", "BPPV article (zh)"],
  },
  yoy: {
    changePct: -22.4,
    previous: 2823,
    current: 2190,
    drivers: ["Blog articles", "Hearing aid prices page"],
  },
  topPages: [
    { type: "Landing page", name: "Homepage" },
    { type: "Article", name: "Best hearing aid" },
    { type: "Article", name: "BPPV" },
  ],
  source: "Google Analytics",
};

export const organicBing = {
  clicks: {
    changePct: -14,
    previous: 437,
    current: 376,
    note: "Mainly coming from the homepage and articles",
  },
  impressions: {
    changePct: -23.5,
    previous: 54426,
    current: 41616,
    note: "Mainly coming from the articles (e.g. human hearing frequency range, pain behind the ear, how to use ear drops)",
  },
  monthly: [
    { month: "Mar", clicks: 991, impressions: 80918 },
    { month: "Apr", clicks: 666, impressions: 76067 },
    { month: "May", clicks: 595, impressions: 68251 },
    { month: "Jun", clicks: 454, impressions: 60086 },
    { month: "Jul", clicks: 437, impressions: 54426 },
    { month: "Aug", clicks: 376, impressions: 41616 },
  ],
  source: "Bing Webmaster Tools",
};

export const googleBusinessProfile = {
  calls: { changePct: -12.1, previous: 116, current: 102 },
  websiteClicks: { changePct: -14.1, previous: 92, current: 79 },
  source: "Google",
};

export const conversions = {
  mom: { changePct: 17.7, previous: 164, current: 193 },
  yoy: { changePct: 0, note: "Organic conversions remained constant YoY" },
  momChannels: [
    { label: "Book appointment form", changePct: -12.5, previous: 40, current: 35 },
    { label: "Contact form", changePct: -75, previous: 16, current: 4 },
    { label: "WhatsApp clicks", changePct: 48.5, previous: 33, current: 49 },
    { label: "Phone clicks", changePct: 29.2, previous: 72, current: 93 },
    { label: "Email clicks", changePct: 700, previous: 1, current: 8 },
  ],
  table: [
    { name: "Email Link Click", apr: 11, may: 12, jun: 6, jul: 1, aug: 8 },
    { name: "Phone Call Click", apr: 42, may: 76, jun: 36, jul: 72, aug: 93 },
    { name: "Contact Form Submission", apr: 11, may: 7, jun: 6, jul: 16, aug: 4 },
    { name: "Book Appt Form Submission", apr: 33, may: 38, jun: 33, jul: 40, aug: 35 },
    { name: "IHS Form Submission", apr: 0, may: 1, jun: 0, jul: 1, aug: 1 },
    { name: "Dizziness Quiz", apr: 0, may: 0, jun: 0, jul: 0, aug: 0 },
    { name: "TEM Form Submission", apr: 0, may: 0, jun: 0, jul: 0, aug: 0 },
    { name: "Online Hearing Test", apr: 0, may: 2, jun: 2, jul: 1, aug: 3 },
    { name: "WhatsApp Click", apr: 16, may: 36, jun: 32, jul: 33, aug: 49 },
  ],
  totals: { apr: 113, may: 172, jun: 115, jul: 164, aug: 193 },
  conversionPages: [
    "Oticon HA",
    "Homepage",
    "BTE HA",
    "Clinics (e.g. Tampines, Yishun)",
  ],
  source: "Google Analytics",
};

export const brandNonBrand = {
  brand: {
    mom: [
      "Slightly fewer clicks and impressions for brand keywords MoM",
    ],
    yoy: [
      "Fewer impressions and clicks for brand keywords YoY",
      "CTR is also lower YoY",
    ],
  },
  nonBrand: {
    mom: [
      "Significantly more impressions for non-brand keywords MoM",
      "Clicks and CTR are lower MoM",
    ],
    yoy: [
      "More impressions but fewer clicks for non-brand keywords YoY",
      "CTR is slightly lower YoY",
    ],
  },
  gscNote:
    "We are using an updated measurement on GSC for MoM values to offer a more accurate estimate of reporting figures. This updated measurement is not available for YoY values, so you may notice discrepancies in the values between MoM and YoY.",
  source: "Google Search Console",
};

export const competitors = {
  summary: [
    "Our organic traffic value remained constant MoM, though there was a slight drop in average organic traffic.",
    "The Hearing Centre and Listening Lab saw an increase in their organic traffic value.",
    "Our average organic traffic remained almost constant MoM, but we are still leading our competitors in average organic traffic.",
  ],
  // Approximate relative values for charts (editable placeholders reflecting narrative)
  trafficValue: [
    { name: "Hearing Partners", jul: 100, aug: 100 },
    { name: "The Hearing Centre", jul: 72, aug: 78 },
    { name: "Listening Lab", jul: 65, aug: 71 },
  ],
  avgOrganicTraffic: [
    { name: "Hearing Partners", value: 100 },
    { name: "The Hearing Centre", value: 68 },
    { name: "Listening Lab", value: 62 },
  ],
  source: "Ahrefs",
};

export const keywords = {
  positions: [
    { band: "Positions 1–3", changePct: -3.1, previous: 129, current: 125 },
    { band: "Positions 4–10", changePct: 7.7, previous: 194, current: 209 },
  ],
  note: "Due to Google changes to SERP monitoring, pages with rankings beyond the top 10 pages can no longer be crawled meaningfully.",
  landingPages: [
    "Rankings for some pages improved while some dropped MoM",
    "For 'audiometry test singapore', Thomson Medical and SingHealth are ranking above us",
    "For 'hearing aid price singapore', Listening Lab, PAA and SGH are ranking above us",
  ],
  articles: [
    "Rankings for a number of our articles improved while some dropped MoM",
    "We will monitor the pages that dropped in ranking to see if it's necessary to make any changes",
  ],
  source: "Ahrefs",
};

export const sov = {
  changePct: -1.9,
  bullets: [
    "SOV dropped by 1.9% MoM",
    "The average position of our keywords increased slightly MoM",
    "We still have the highest SOV among our competitors for the keywords we are targeting",
  ],
  definitions: [
    {
      term: "Share of voice",
      definition:
        "The number of clicks we are getting as compared to the total number of clicks for all targeted keywords.",
    },
    {
      term: "Average position",
      definition: "The average ranking position across all keywords with position.",
    },
  ],
  // Relative SOV for chart (HP highest)
  competitorSov: [
    { name: "Hearing Partners", sov: 28 },
    { name: "Competitor A", sov: 18 },
    { name: "Competitor B", sov: 15 },
    { name: "Competitor C", sov: 12 },
  ],
  source: "Ahrefs",
};

export const aiGeo = {
  summary:
    "AI responses from AI Overview, ChatGPT and Copilot decreased MoM, while Gemini and Perplexity increased.",
  augustSessions: {
    sessions: 34,
    formSubmissions: 1,
    whatsappContacts: 3,
  },
  aiSov: {
    hearingPartners: 60.3,
    hearingCentre: 48.3,
    note: "We are leading across AI Overviews, AI Mode and Perplexity.",
  },
  platforms: [
    {
      name: "AI Overview",
      detail:
        "Brand mentioned and cited in queries related to hearing aids and hearing care such as 'hearing aid for elderly singapore', 'hearing aid price singapore' and 'how to improve hearing'.",
    },
    {
      name: "AI Mode",
      detail:
        "Brand mentioned and cited in conversion-driven queries such as 'hearing aids Singapore', 'audiologist' and 'audiometry test singapore'.",
    },
    {
      name: "ChatGPT",
      detail:
        "Brand cited in queries such as 'How much does ear cleaning cost in Singapore?' and 'How much is a hearing aid cost in SG?'.",
    },
    {
      name: "Microsoft Copilot",
      detail:
        "Drop in total citations and cited pages from July to August. Once the new site launches, faster loading speed may improve appearance in AI platforms.",
    },
  ],
  sources: ["Ahrefs", "Google Analytics", "Bing Webmaster Tools"],
};

export const content = {
  topArticles: ["Hearing aids", "Best hearing aid", "Ear digging (ZH)"],
  source: "Ahrefs",
};

export const backlinks = {
  bullets: [
    "Referring domains increased significantly MoM",
    "Mostly coming from spammy sites",
  ],
  source: "Ahrefs",
};

export const siteHealth = {
  status: "good",
  note: "Site health is good",
  period: "Aug 2026",
  source: "Ahrefs",
};

export const nextSteps = {
  webDev: {
    title: "Web Development Plan",
    items: ["Complete new website for launch"],
  },
  seo: {
    title: "SEO Optimisations",
    items: [
      "Improve article: Getting a hearing aid",
      "Duplicate landing page: Hearing aid repair (from MY site)",
      "Publish on our blog: Oticon vs competitor brands (from guest post)",
    ],
  },
};

export const colors = {
  teal: "#0d9488",
  tealDark: "#0f766e",
  tealLight: "#ccfbf1",
  blue: "#0284c7",
  blueDark: "#0369a1",
  navy: "#0c4a6e",
  slate: "#334155",
  muted: "#64748b",
  positive: "#059669",
  negative: "#dc2626",
  white: "#ffffff",
  bg: "#f0fdfa",
};
