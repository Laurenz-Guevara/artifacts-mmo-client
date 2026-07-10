import type { Character } from "@/lib/artifacts-api";

export function CharacterPanelWrapper({ characters} : {characters: Character[]}) {
  return (
    <div className="flex gap-x-4 p-4">
      {characters.map((character, index) => (
        <div className="bg-surface-0/50 border border-surface-1 px-3 py-2" key={index}>
          <CharacterPanel character={character} />
        </div>
      ))}
    </div>
  )
}

export function CharacterPanel( { character} : { character: Character}) {
  return (
    <div className="flex justify-between space-x-4 text-xs">
      <p className="font-semibold">{character.name}</p>
      <p>lvl {character.level}</p>
    </div>
  )
}
