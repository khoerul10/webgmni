// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: any) {
  return (
    <div className="max-w-3xl mx-auto">
      <span className="text-red-600 text-xs">INVESTIGASI</span>

      <h1 className="text-3xl font-bold mt-2">
        {params.slug}
      </h1>

      <div className="h-64 bg-gray-200 rounded-lg mt-6" />

      <article className="mt-6 leading-7 text-gray-700">
        Artikel detail seperti portal berita modern...
      </article>
    </div>
  );
}