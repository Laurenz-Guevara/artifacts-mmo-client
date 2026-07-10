import type { Character } from "@/lib/characters/api";
import Card from "@/components/ui/Card";
import CharacterInventory from "@/components/CharacterInventory";

export default function CharacterDashboard({
  selectedCharacter,
  itemNames,
}: {
  selectedCharacter: Character;
  itemNames: Record<string, string>;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <p>Selected Character: {selectedCharacter.name}</p>
        <p>Level: {selectedCharacter.level}</p>
      </Card>
      <CharacterInventory
        selectedCharacter={selectedCharacter}
        itemNames={itemNames}
      />
    </div>
  );
}
