import { getArticles } from "@/features/articles/services";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div>
      <h1>Articles</h1>

      {articles.slice(0, 10).map((a) => (
        <div key={a.id} style={{ marginBottom: 10 }}>
          <h3>{a.title}</h3>
          <p>{a.body}</p>
        </div>
      ))}
    </div>
  );
}