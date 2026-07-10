export default function Card({
  children,
  onClick,
  selected,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-surface-0/50 border p-2 ${
        selected ? "border-maroon" : "border-surface-1"
      } ${onClick ? "cursor-pointer hover:border-maroon/50" : ""}`}
    >
      {children}
    </div>
  );
}
