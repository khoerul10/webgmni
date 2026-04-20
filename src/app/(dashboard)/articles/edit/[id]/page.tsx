// src/app/(dashboard)/articles/edit/[id]/page.tsx
export default function EditArticle({
  params,
}: {
  params: { id: string };
}) {
  return <h1>Edit Article: {params.id}</h1>;
}