import ProjectDetails from "@/components/modules/project/projectDetails";
import { getSingleProject } from "@/services/project";



const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProject(productId);

  return (
    <div className="">
<ProjectDetails product={product}>

</ProjectDetails>

    </div>
  ); 
};

export default ProjectDetailsPage;