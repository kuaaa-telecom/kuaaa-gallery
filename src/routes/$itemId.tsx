import { createFileRoute } from "@tanstack/react-router";
import GalleryDetail from "../components/Gallery/GalleryDetail";
import Layout from "../components/Layout";

export const Route = createFileRoute("/$itemId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { itemId } = Route.useParams();

  return (
    <Layout>
      <GalleryDetail itemId={itemId} />
    </Layout>
  );
}
