import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// @ts-expect-error yyy
import App from "./App";
// @ts-expect-error yyy
import Tasks from "./pages/Tasks";
// @ts-expect-error yyy
import TaskDetail from "./pages/TaskDetail";
import { Toaster } from "sonner";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/task/:taskId",
    element: <TaskDetail />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors position="bottom-right" />
    </QueryClientProvider>
  </StrictMode>
);
