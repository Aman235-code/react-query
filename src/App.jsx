import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./Pages/Home";
import FetchOld from "./Pages/FetchOld";
import FetchRq from "./Pages/FetchRq";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FetchIndv from "./components/UI/FetchIndv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRq />,
      },
      {
        path: "/rq/:id",
        element: <FetchIndv />,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
