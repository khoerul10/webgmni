export default function HeroFeatured() {
  return (
    <div className="relative rounded-xl overflow-hidden h-[420px] bg-black">
      <img
        src="https://images.unsplash.com/photo-1581091870620-1e7b1b8c8f2a"
        className="object-cover w-full h-full opacity-80"
      />

      <div className="absolute bottom-0 p-6 text-white">
        <span className="text-xs bg-red-600 px-2 py-1 rounded">
          INVESTIGASI
        </span>

        <h1 className="text-2xl font-bold mt-3">
          Skandal Korupsi Proyek Infrastruktur Nasional
        </h1>

        <p className="text-sm text-gray-200 mt-2 max-w-lg">
          Investigasi mendalam mengenai jaringan korupsi proyek besar...
        </p>
      </div>
    </div>
  );
}