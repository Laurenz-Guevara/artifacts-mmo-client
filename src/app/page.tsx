import Dashboard from "@/components/Dashboard";
import { getMyCharacters } from "@/lib/characters/api";
import { getItemNames } from "@/lib/items/api";

export default async function Home() {
  const characters = await getMyCharacters();
  const itemCodes = characters.flatMap(
    (character) => character.inventory?.map((slot) => slot.code) ?? []
  );
  const itemNames = await getItemNames(itemCodes);

  return (
    <div className="p-4 space-y-4">
      <Dashboard characters={characters} itemNames={itemNames} />
    </div>
  );
}
