import Image from "next/image";
import type { Character } from "@/lib/characters/api";
import { getCharacterSkinUrl } from "@/lib/characters/api";
import Card from "@/components/ui/Card";

export function CharacterPanelWrapper({
  characters,
  selectedCharacter,
  onSelectCharacter,
}: {
  characters: Character[];
  selectedCharacter?: Character;
  onSelectCharacter?: (character: Character) => void;
}) {
  return (
    <div className="flex gap-x-4">
      {characters.map((character) => (
        <Card
          key={character.name}
          onClick={() => onSelectCharacter?.(character)}
          selected={character === selectedCharacter}
        >
          <CharacterPanel character={character} />
        </Card>
      ))}
    </div>
  )
}

export function CharacterPanel( { character} : { character: Character}) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 text-xs">
      <div className="flex justify-between space-x-4 flex-1">
        <p className="font-semibold">{character.name}</p>
        <p>lvl {character.level}</p>
      </div>
      <div className="w-full flex justify-center my-2">
        <Image
          src={getCharacterSkinUrl(character.skin)}
          alt={character.name}
          width={32}
          height={32}
        />
      </div>
    </div>
  )
}
