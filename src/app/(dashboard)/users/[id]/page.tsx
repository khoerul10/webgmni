// src/app/(dashboard)/users/[id]/page.tsx
export default function UserDetail({
  params,
}: {
  params: { id: string };
}) {
  return <h1>User: {params.id}</h1>;
}