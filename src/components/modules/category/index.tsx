import { ICategory } from "@/types/category.type";
import Image from 'next/image'
interface CategoryCardProps {
  categories: ICategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ categories }) => {
  console.log("category is",cagtegories)
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer text-center hover:scale-105 transform duration-300">
      <Image
        src={categories.image}
        alt={categories.name || "Category Image"}
        width={300}
        height={200}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{ategories.name}</h3>
    </div>
  );
};

export default CategoryCard;
