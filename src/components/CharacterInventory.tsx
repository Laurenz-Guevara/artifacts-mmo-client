import Card from "@/components/ui/Card";
import type { Character } from "@/lib/characters/api";

export default function CharacterInventory({
  selectedCharacter,
  itemNames,
}: {
  selectedCharacter: Character;
  itemNames: Record<string, string>;
}) {
  const filledSlots = (selectedCharacter.inventory ?? []).filter(
    (slot) => slot.quantity > 0
  );

  return (
    <Card>
      <p className="font-semibold mb-2">
        Inventory of {selectedCharacter.name}
      </p>
      {filledSlots.length === 0 ? (
        <p className="text-xs">Empty</p>
      ) : (
        <ul className="text-xs space-y-1">
          {filledSlots.map((slot) => (
            <li key={slot.slot} className="flex justify-between">
              <span>{itemNames[slot.code] ?? slot.code}</span>
              <span>x{slot.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
