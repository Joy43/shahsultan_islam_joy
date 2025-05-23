import CategoryCard from "@/components/modules/category";
import ProjectAllCategory from "@/components/modules/project";
import { getAllCategories } from "@/services/category";
import { getAllCategory } from "@/services/project";


const AllCategory = async () => {
  
  const { data: categories } = await getAllCategories();
     console.log("category is",categories)
  return (
    <div>

      {categories && categories.length > 0 ? (
  <div className="">
    {categories.map((category:any) => (
      // <CategoryCard key={category._id} category={category} />

 <ul className="flex flex-col gap-3">
          {categories.map((category: any) => (
            <li
              key={category._id}
              className="flex items-center gap-4 hover:text-[#3B9DF8] transition-all duration-300 cursor-pointer"
            >
              {/* Category Image */}
              <img
                src={category.image} // Make sure this exists in your category data
                alt={category.name}
                className="w-10 h-10 object-cover rounded-full shadow-md"
              />
              
              {/* Category Name */}
              <span className="font-medium text-base">{category.name}</span>
            </li>
          ))}
        </ul>
    ))}
  </div>
) : (
  <p>No categories found.</p>
)}
    </div>
  );
};

export default AllCategory;
