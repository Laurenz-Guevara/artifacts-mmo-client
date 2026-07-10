import Card from "@/components/ui/Card";
import { Character } from "@/lib/artifacts-api";

export default function CharacterInventory(
  {selectedCharacter,
  }: {
    selectedCharacter: Character;
  }) {
  return (
    <Card>
      <p>Inventory of {selectedCharacter.name}</p>
    </Card>
  );
}
