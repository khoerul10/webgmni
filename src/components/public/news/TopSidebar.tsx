const data = [
  { tag: "EKONOMI", title: "Bank Indonesia Naikkan Suku Bunga" },
  { tag: "POLITIK", title: "Pilpres 2026 Mulai Memanas" },
  { tag: "TEKNOLOGI", title: "Startup AI Indonesia Naik Pesat" },
];

export default function TopSidebar() {
  return (
    <div className="space-y-4">
      {data.map((item, i) => (
        <div key={i} className="flex gap-3 border-b pb-3">
          <div className="w-20 h-16 bg-gray-200 rounded" />
          <div>
            <span className="text-[10px] text-red-600">{item.tag}</span>
            <p className="text-sm font-medium">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}