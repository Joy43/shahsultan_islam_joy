import { ICategory } from "@/types/category.type";
import Image from "next/image";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer text-center hover:scale-105 transform duration-300">
      <div className="relative w-full h-32 mb-4">
        <Image
          src={category?.image}
          alt={category?.name || "Category Image"}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
