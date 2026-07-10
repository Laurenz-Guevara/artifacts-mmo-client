import type { components } from "@/lib/artifacts-api-types";

type ApiCharacter = components["schemas"]["CharacterSchema"];

export interface Character {
  name: ApiCharacter["name"];
  level: ApiCharacter["level"];
}

const API_BASE_URL = "https://api.artifactsmmo.com";

export async function getMyCharacters(): Promise<Character[]> {
  const token = process.env.API_TOKEN;
  if (!token) {
    throw new Error("API_TOKEN environment variable is not set");
  }

  const response = await fetch(`${API_BASE_URL}/my/characters`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if (data.error) throw new Error(data.error.message);

  return data.data as ApiCharacter[];
}
