import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLakhs(n: number) {
  const abs = Math.abs(n);
  const body =
    abs >= 10 ? abs.toFixed(1).replace(/\.0$/, "") : abs.toFixed(1);
  return `₹${n < 0 ? "-" : ""}${body} L`;
}

export function formatRupees(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function sqFtFromYards(yd: number) {
  return yd * 9;
}
