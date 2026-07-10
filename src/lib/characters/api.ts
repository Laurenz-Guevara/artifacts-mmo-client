import type { components } from "@/lib/artifacts-api-types";
import { fetchArtifactsApi } from "@/lib/api-client";

type ApiCharacter = components["schemas"]["CharacterSchema"];

export interface Character {
  name: ApiCharacter["name"];
  level: ApiCharacter["level"];
  skin: ApiCharacter["skin"];
  inventory?: ApiCharacter["inventory"];
}

export function getCharacterSkinUrl(skin: string): string {
  return `https://artifactsmmo.com/images/characters/${skin}.png`;
}

export async function getMyCharacters(): Promise<Character[]> {
  return fetchArtifactsApi<ApiCharacter[]>("/my/characters");
}
