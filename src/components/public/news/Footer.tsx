export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-10">

        {/* LOGO + DESC */}
        <div>
          <h2 className="text-lg font-bold mb-2">Jurnal F</h2>
          <p className="text-sm text-gray-400">
            Platform media digital Indonesia untuk jurnalisme investigasi dan
            berita terkini. Independen, akurat, dan terpercaya.
          </p>

          {/* Newsletter kecil */}
          <div className="mt-4 flex">
            <input
              placeholder="Alamat email"
              className="px-3 py-2 text-black w-full text-sm"
            />
            <button className="bg-red-600 px-3 text-sm">
              Berlangganan
            </button>
          </div>
        </div>

        {/* KATEGORI */}
        <div>
          <h3 className="font-semibold mb-3">Kategori</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Politik</li>
            <li>Ekonomi</li>
            <li>Sosial</li>
            <li>Investigasi</li>
            <li>Opini</li>
            <li>Teknologi</li>
            <li>Global</li>
          </ul>
        </div>

        {/* PERUSAHAAN */}
        <div>
          <h3 className="font-semibold mb-3">Perusahaan</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Tentang Kami</li>
            <li>Redaksi</li>
            <li>Kontak</li>
            <li>Pasang Iklan</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Kebijakan Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 text-center text-sm text-gray-500 py-4">
        © 2026 Jurnal F. Hak Cipta dilindungi.
      </div>
    </footer>
  );
}