export type Article = {
  id: number;
  title: string;
  body: string;
};

export async function getArticles(): Promise<Article[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  return res.json();
}