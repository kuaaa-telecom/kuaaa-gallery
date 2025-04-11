import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";
import { IntersectionObserverProvider } from "../contexts/IntersectionObserverContext";

export const Route = createRootRoute({
  component: () => (
    <IntersectionObserverProvider>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </IntersectionObserverProvider>
  ),
});
