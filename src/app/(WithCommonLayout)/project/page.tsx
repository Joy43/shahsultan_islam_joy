import CategoryCard from "@/components/modules/category";
import ProjectAllProject from "@/components/modules/project";
import { getAllCategories } from "@/services/category";
import { getAllProject } from "@/services/project";


const AllProject = async () => {
  const { data: project } = await getAllProject();
  const { data: categories } = await getAllCategories();
     console.log("category is",categories)
  return (
    <div>
      


      {project && project.length > 0 ? (
        <ProjectAllProject projects={project} />
      ) : (
        <p>No projects found.</p>
      )}

      {categories && categories.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
    {categories.map((category:any) => (
      <CategoryCard key={category._id} category={category} />
    ))}
  </div>
) : (
  <p>No categories found.</p>
)}
    </div>
  );
};

export default AllProject;
