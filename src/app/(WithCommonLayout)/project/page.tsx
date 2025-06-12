import ProjectPage from "@/components/modules/project";
import { getAllProject } from "@/services/project";

const AllProject = async () => {
  const { data: project } = await getAllProject();

    
  return (
    <div>
      <ProjectPage projects ={project} /> 
    </div>

  )}

  export default AllProject;