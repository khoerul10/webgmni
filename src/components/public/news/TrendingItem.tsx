type Props = {
  index: number;
  category: string;
  title: string;
  author: string;
  time: string;
};

export default function TrendingItem({
  index,
  category,
  title,
  author,
  time,
}: Props) {
  return (
    <div className="flex gap-4">
      {/* Number */}
      <div className="trending-number">
        {index.toString().padStart(2, "0")}
      </div>

      {/* Content */}
      <div>
        <p className="text-xs uppercase text-red-600 font-semibold">
          {category}
        </p>

        <h3 className="font-semibold leading-snug hover:text-red-600 cursor-pointer transition">
          {title}
        </h3>

        <p className="meta">
          {author} • {time}
        </p>
      </div>
    </div>
  );
}