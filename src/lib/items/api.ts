import type { components } from "@/lib/artifacts-api-types";
import { fetchArtifactsApi } from "@/lib/api-client";

export type Item = components["schemas"]["ItemSchema"];

export async function getItem(code: string): Promise<Item> {
  return fetchArtifactsApi<Item>(`/items/${code}`);
}

export async function getItemNames(
  codes: string[]
): Promise<Record<string, string>> {
  const uniqueCodes = [...new Set(codes)];
  const items = await Promise.all(uniqueCodes.map(getItem));
  return Object.fromEntries(items.map((item) => [item.code, item.name]));
}
