"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
} from "recharts";
import { colors } from "@/data/report";

const tipStyle = {
  background: "#fff",
  border: "1px solid #ccfbf1",
  borderRadius: 8,
  fontSize: 12,
};

export function BingTrendChart({
  data,
}: {
  data: Array<{ month: string; clicks: number; impressions: number }>;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis
          yAxisId="left"
          tick={{ fontSize: 11 }}
          width={40}
          label={{ value: "Clicks", angle: -90, position: "insideLeft", fontSize: 11 }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fontSize: 11 }}
          width={48}
          tickFormatter={(v) => `${Math.round(v / 1000)}k`}
        />
        <Tooltip contentStyle={tipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar yAxisId="right" dataKey="impressions" name="Impressions" fill={colors.tealLight} stroke={colors.teal} />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="clicks"
          name="Clicks"
          stroke={colors.blue}
          strokeWidth={2.5}
          dot={{ r: 4, fill: colors.blue }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export function ConversionTotalsChart({
  data,
}: {
  data: Array<{ month: string; total: number }>;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 11 }} width={36} />
        <Tooltip contentStyle={tipStyle} />
        <Bar dataKey="total" name="Total conversions" fill={colors.teal} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ChannelMoMChart({
  data,
}: {
  data: Array<{ label: string; previous: number; current: number }>;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data.map((d) => ({
          name: d.label.replace(" form", "").replace(" clicks", ""),
          Jul: d.previous,
          Aug: d.current,
        }))}
        margin={{ top: 8, right: 8, left: 0, bottom: 24 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" height={50} />
        <YAxis tick={{ fontSize: 11 }} width={32} />
        <Tooltip contentStyle={tipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="Jul" fill="#94a3b8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Aug" fill={colors.teal} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function CompetitorBarChart({
  data,
  dataKey = "value",
  nameKey = "name",
}: {
  data: Array<Record<string, string | number>>;
  dataKey?: string;
  nameKey?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
        <XAxis type="number" tick={{ fontSize: 11 }} />
        <YAxis type="category" dataKey={nameKey} width={130} tick={{ fontSize: 11 }} />
        <Tooltip contentStyle={tipStyle} />
        <Bar dataKey={dataKey} fill={colors.teal} radius={[0, 6, 6, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function KeywordBandChart({
  data,
}: {
  data: Array<{ band: string; previous: number; current: number }>;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data.map((d) => ({
          name: d.band,
          Previous: d.previous,
          Current: d.current,
        }))}
        margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 11 }} width={36} />
        <Tooltip contentStyle={tipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="Previous" fill="#94a3b8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Current" fill={colors.blue} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AiSovChart({
  hp,
  competitor,
}: {
  hp: number;
  competitor: number;
}) {
  const data = [
    { name: "Hearing Partners", sov: hp },
    { name: "The Hearing Centre", sov: competitor },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 11 }} width={36} domain={[0, 100]} unit="%" />
        <Tooltip contentStyle={tipStyle} formatter={(v) => [`${v}%`, "AI SOV"]} />
        <Bar dataKey="sov" name="AI SOV %" fill={colors.teal} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function SimpleLineChart({
  data,
  lines,
}: {
  data: Array<Record<string, string | number>>;
  lines: Array<{ key: string; color: string; name: string }>;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" tick={{ fontSize: 11 }} />
        <YAxis tick={{ fontSize: 11 }} width={36} />
        <Tooltip contentStyle={tipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        {lines.map((l) => (
          <Line
            key={l.key}
            type="monotone"
            dataKey={l.key}
            name={l.name}
            stroke={l.color}
            strokeWidth={2.5}
            dot={{ r: 3 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
