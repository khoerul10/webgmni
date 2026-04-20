"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b">
      {/* TOP BAR */}
      <div className="bg-black text-white text-[11px] px-4 py-2 flex justify-between items-center">
        <span className="opacity-80">Platform Media Digital Indonesia</span>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hover:underline">
            Masuk
          </Link>
          <span className="opacity-50">|</span>
          <Link href="/register" className="hover:underline">
            Daftar
          </Link>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 relative">
        {/* LOGO */}
        <h1 className="text-2xl font-serif font-bold">Jurnal F</h1>

        {/* MENU CENTER */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-500 absolute left-1/2 -translate-x-1/2 font-semibold">
          <Link href="#" className="hover:text-black">Politik</Link>
          <Link href="#" className="hover:text-black">Ekonomi</Link>
          <Link href="#" className="hover:text-black">Sosial</Link>
          <Link href="#" className="hover:text-black">Investigasi</Link>
          <Link href="#" className="hover:text-black">Opini</Link>
          <Link href="#" className="hover:text-black">Teknologi</Link>
          <Link href="#" className="hover:text-black">Global</Link>
        </nav>

        {/* SEARCH ICON */}
        <div
          className="cursor-pointer"
          onClick={() => setOpenSearch(!openSearch)}
        >
          <Search size={20} />
        </div>
      </div>

      {/* SEARCH BAR DROPDOWN */}
      {openSearch && (
        <div className="border-t bg-white px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            
            <input
              type="text"
              placeholder="Cari berita..."
              className="flex-1 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              autoFocus
            />

            <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
              SEARCH
            </button>
          </div>
        </div>
      )}
    </header>
  );
}