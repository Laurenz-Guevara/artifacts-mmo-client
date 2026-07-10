"use client";

import { useState } from "react";
import type { Character } from "@/lib/artifacts-api";
import { CharacterPanelWrapper } from "@/components/CharacterPanel";
import CharacterDashboard from "@/components/CharacterDashboard";
import Card from "@/components/ui/Card";

export default function CharacterSelection({ characters } : { characters: Character[] }) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(characters[0]);

  return (
    <div className="space-y-4">
      <CharacterPanelWrapper
        characters={characters}
        selectedCharacter={selectedCharacter}
        onSelectCharacter={setSelectedCharacter}
      />
      {selectedCharacter ? (
        <CharacterDashboard selectedCharacter={selectedCharacter} />
      ) : (
          <Card>
            <p>No avaliable characters...</p>
          </Card>
        )}
    </div>
  );
}
