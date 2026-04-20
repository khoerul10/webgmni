import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: 200 }}>Sidebar</aside>
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}