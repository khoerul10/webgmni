import TrendingItem from "./TrendingItem";

const dummyData = [
  {
    category: "Investasi",
    title:
      "Skandal Korupsi Proyek Infrastruktur Nasional: Investigasi Mendalam",
    author: "Rina Kusuma",
    time: "15 jam yang lalu",
  },
  {
    category: "Ekonomi",
    title:
      "Bank Indonesia Naikkan Suku Bunga Acuan, Rupiah Menguat",
    author: "Ahmad Fauzi",
    time: "12 jam yang lalu",
  },
  {
    category: "Politik",
    title:
      "Pilkada Serentak 2026: Peta Politik Berubah Drastis",
    author: "Dewi Lestari",
    time: "1 hari yang lalu",
  },
  {
    category: "Teknologi",
    title:
      "Startup Indonesia Raih Pendanaan Seri C Senilai $150 Juta",
    author: "Budi Santoso",
    time: "1 hari yang lalu",
  },
  {
    category: "Global",
    title:
      "Ketegangan Laut China Selatan Meningkat, Indonesia Perkuat Pertahanan",
    author: "Maya Indra",
    time: "3 hari yang lalu",
  },
  {
    category: "Investigasi",
    title:
      "Investigasi: Mafia Tanah Jakarta dan Jaringan Kekuasaan",
    author: "Rina Kusuma",
    time: "4 hari yang lalu",
  },
];

export default function SectionTrending() {
  return (
    <section className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Trending</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {dummyData.map((item, index) => (
          <TrendingItem
            key={index}
            index={index + 1}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}