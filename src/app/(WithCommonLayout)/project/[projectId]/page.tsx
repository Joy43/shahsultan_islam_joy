import ProjectDetails from "@/components/modules/project/projectDetails";
import { getSingleProject } from "@/services/project";

// Correct: pages/project/[projectId]/page.tsx
const ProjectDetailsPage = async ({
  params,
}: {
  params: { projectId: string }; 
}) => {
  const response = await getSingleProject(params.projectId);

  // validate data shape
  if (!response?.data) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectDetails singleprojectdata={response.data} />
    </div>
  );
};

export default ProjectDetailsPage;
