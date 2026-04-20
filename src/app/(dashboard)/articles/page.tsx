import { getArticles } from "@/features/articles/services";

export default async function AdminArticles() {
  const articles = await getArticles();

  return (
    <div>
      <h1>CMS Articles</h1>

      {articles.slice(0, 10).map((a) => (
        <div key={a.id}>
          <b>{a.title}</b>
        </div>
      ))}
    </div>
  );
}