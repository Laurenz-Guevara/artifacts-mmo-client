import Link from "next/link";

export default function Navigation() {
  return (
    <div className="bg-surface-0/50 border-y border-surface-1 justify-between">
      <div className="flex divide-x-2 divide-surface-1 border-surface-1 text-sm">
        <div className="flex items-center px-4">
          <p>Artifacts MMO</p>
        </div>
        <Link className="py-2 px-4 hover:text-maroon" href="https://docs.artifactsmmo.com/" target="_blank">Docs</Link>
        <Link className="py-2 px-4 hover:text-maroon" href="https://api.artifactsmmo.com/docs/" target="_blank">API Reference</Link> 
        <Link className="py-2 px-4 hover:text-maroon" href="https://play.artifactsmmo.com/" target="_blank">Online Client</Link>
        <Link className="py-2 px-4 hover:text-maroon border-r border-surface-1" href="https://github.com/Laurenz-Guevara/artifacts-mmo-client" target="_blank">GitHub</Link>
      </div>
    </div>
  )
}
