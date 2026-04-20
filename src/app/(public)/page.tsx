import Footer from "@/components/public/news/Footer";
import HeroFeatured from "@/components/public/news/HeroFeatured";
import Newsletter from "@/components/public/news/NewsLatter";
import SectionTerkini from "@/components/public/news/SectionTerkini";
import SectionTrending from "@/components/public/news/SectionTrending";
import TopSidebar from "@/components/public/news/TopSidebar";

export default function HomePage() {
  return (
    <div className="space-y-10">

      {/* HERO + SIDEBAR GRID */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <HeroFeatured />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <TopSidebar />
        </div>
      </div>

      {/* TERKINI SECTION */}
      <SectionTerkini />

      {/* TRENDING */}
      <SectionTrending />

      {/* NEWSLETTER */}
      <Newsletter />
    </div>
  );
}