import CharacterSelection from "@/components/CharacterSelection";
import { getMyCharacters } from "@/lib/artifacts-api";

export default async function Home() {
  const characters = await getMyCharacters();

  return (
    <div className="p-4 space-y-4">
      <CharacterSelection characters={characters} />
    </div>
  );
}
