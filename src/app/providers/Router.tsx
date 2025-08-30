import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Main from "../../features/Main/Main.page";
import Error404 from "../../features/Errors/Error404/Error404.page";
import About from "../../features/About/About.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
