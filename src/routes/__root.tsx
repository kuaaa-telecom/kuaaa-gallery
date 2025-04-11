import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import { IntersectionObserverProvider } from "../contexts/IntersectionObserverContext";

export const Route = createRootRoute({
  component: () => (
    <IntersectionObserverProvider>
      <Header />
      <Outlet />
    </IntersectionObserverProvider>
  ),
});
