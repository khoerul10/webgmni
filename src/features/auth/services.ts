// src/features/auth/services.ts
import { api } from "@/src/lib/axios";

export const login = async (payload: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/login", payload);
  return res.data;
};