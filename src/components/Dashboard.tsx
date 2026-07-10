"use client";

import { useState } from "react";
import type { Character } from "@/lib/characters/api";
import { CharacterPanelWrapper } from "@/components/CharacterPanel";
import CharacterDashboard from "@/components/CharacterDashboard";
import Card from "@/components/ui/Card";

export default function CharacterSelection({
  characters,
  itemNames,
}: {
  characters: Character[];
  itemNames: Record<string, string>;
}) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(characters[0]);

  return (
    <div className="space-y-4">
      <CharacterPanelWrapper
        characters={characters}
        selectedCharacter={selectedCharacter}
        onSelectCharacter={setSelectedCharacter}
      />
      {selectedCharacter ? (
        <CharacterDashboard
          selectedCharacter={selectedCharacter}
          itemNames={itemNames}
        />
      ) : (
          <Card>
            <p>No avaliable characters...</p>
          </Card>
        )}
    </div>
  );
}
