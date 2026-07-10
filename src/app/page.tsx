import { CharacterPanelWrapper } from "@/components/CharacterPanel";
import Navigation from "@/components/Navigation";
import { getMyCharacters } from "@/lib/artifacts-api";

export default async function Home() {
  const characters = await getMyCharacters();

  return (
    <div>
      <Navigation />
      <CharacterPanelWrapper characters={characters} />
    </div>
  );
}
