import Dashboard from "@/components/Dashboard";
import { getMyCharacters } from "@/lib/artifacts-api";

export default async function Home() {
  const characters = await getMyCharacters();

  return (
    <div className="p-4 space-y-4">
      <Dashboard characters={characters} />
    </div>
  );
}
