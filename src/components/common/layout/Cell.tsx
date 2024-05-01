interface CellProps {
  className?: string;
  children?: React.ReactNode;
  span?: number;
  rows?: number;
}

export function Cell({
  className = '',
  children,
  span = 12,
  rows = 1,
}: CellProps) {
  return (
    <div
      className={`${className}`}
      style={{
        gridArea: `span ${rows} / span ${span} / auto / auto`
      }}>
      {children}
    </div>
  )
}