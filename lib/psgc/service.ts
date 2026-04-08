import { httpClient } from "@/lib/http/client";

import type { LocationOption, PsgcLocation } from "./types";

const PSGC_BASE_URL = "https://psgc.rootscratch.com";

function toLocationOption(item: PsgcLocation): LocationOption {
  return {
    id: item.psgc_id,
    label: item.name.trim(),
    level: item.geographic_level.trim(),
  };
}

async function fetchLocations(pathname: string, id?: string) {
  const { data } = await httpClient.get<PsgcLocation[]>(`${PSGC_BASE_URL}${pathname}`, {
    params: id ? { id } : undefined,
  });

  return data
    .map(toLocationOption)
    .sort((left, right) => left.label.localeCompare(right.label, "en"));
}

export function getRegions() {
  return fetchLocations("/region");
}

export function getProvinces(regionId: string) {
  return fetchLocations("/province", regionId);
}

export function getMunicipalitiesOrCities(provinceId: string) {
  return fetchLocations("/municipal-city", provinceId);
}
