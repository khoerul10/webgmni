export default function Newsletter() {
  return (
    <div className="bg-gray-100 p-8 text-center rounded-lg">
      <h2 className="text-xl font-semibold mb-2">
        Berlangganan Newsletter
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Dapatkan berita terbaru langsung ke email Anda
      </p>

      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Alamat email"
          className="px-4 py-2 border rounded w-64"
        />
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Berlangganan
        </button>
      </div>
    </div>
  );
}