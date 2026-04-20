// src/components/common/Button.tsx
export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button style={{ padding: 10 }}>
      {children}
    </button>
  );
}