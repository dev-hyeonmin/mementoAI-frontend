interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Layout({
  className = '',
  children }
  : LayoutProps) {
  return (
    <div className="grid w-full gap-6 grid-rows-12 auto-rows-auto">
      {children}
    </div>
  );
}
