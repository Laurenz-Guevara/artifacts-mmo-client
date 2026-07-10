import type { Character } from "@/lib/artifacts-api";
import Card from "@/components/ui/Card";
import CharacterInventory from "@/components/CharacterInventory";

export default function CharacterDashboard({
  selectedCharacter,
}: {
  selectedCharacter: Character;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <p>Selected Character: {selectedCharacter.name}</p>
        <p>Level: {selectedCharacter.level}</p>
      </Card>
      <CharacterInventory selectedCharacter={selectedCharacter} />
    </div>
  );
}
