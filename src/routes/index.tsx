import { createFileRoute } from "@tanstack/react-router";
import Gallery from "../components/Gallery/Gallery";
import Layout from "../components/Layout";
import { galleryItems } from "../consts/galleryItems";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Gallery items={galleryItems} />
    </Layout>
  );
}
