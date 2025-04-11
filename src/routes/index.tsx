import { createFileRoute } from "@tanstack/react-router";
import Layout from "../components/Layout";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <Layout>asdf</Layout>;
}
