import {
  createFileRoute,
  stripSearchParams,
  useNavigate,
} from "@tanstack/react-router";
import Gallery from "../../components/Gallery/Gallery";
import Layout from "../../components/Layout";
import { galleryItems } from "../../consts/galleryItems";

const defaultValues = {
  query: "",
};

type GallerySearch = {
  query: string;
};

export const Route = createFileRoute("/kuaaa-gallery/")({
  component: Index,
  validateSearch: (search: Record<string, unknown>): GallerySearch => {
    return {
      query: (search.query as string) || "",
    };
  },
  search: {
    middlewares: [stripSearchParams(defaultValues)],
  },
});

function Index() {
  const { query } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <Layout>
      <Gallery items={galleryItems} queryParam={query} navigate={navigate} />
    </Layout>
  );
}
