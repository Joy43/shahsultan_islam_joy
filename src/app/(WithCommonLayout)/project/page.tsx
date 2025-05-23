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


    </div>
  );
};

export default AllProject;
