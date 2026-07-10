import type { Character } from "@/lib/artifacts-api";
import Card from "@/components/ui/Card";

export default function CharacterDashboard({
  selectedCharacter,
}: {
  selectedCharacter: Character;
}) {
  return (
    <Card>
      <h1 className="">Character Dashboard</h1>
      <p>Selected Character: {selectedCharacter.name}</p>
      <p>Level: {selectedCharacter.level}</p>
    </Card>
  );
}
