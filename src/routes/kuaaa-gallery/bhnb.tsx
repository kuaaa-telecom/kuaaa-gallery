import { createFileRoute } from "@tanstack/react-router";
import BHNBHome from "../../components/BHNB/BHNBHome";

export const Route = createFileRoute("/kuaaa-gallery/bhnb")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BHNBHome />;
}
