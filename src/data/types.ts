export type DeltaDirection = "up" | "down" | "flat";

export interface MetricDelta {
  label: string;
  value: string;
  detail?: string;
  direction?: DeltaDirection;
}

export interface BulletItem {
  text: string;
  children?: string[];
}

export interface ChartSeriesPoint {
  name: string;
  [key: string]: string | number;
}

export interface ConversionChannel {
  name: string;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
}

export interface SlideMeta {
  id: string;
  title: string;
  section?: string;
  source?: string;
  sources?: string[];
}
