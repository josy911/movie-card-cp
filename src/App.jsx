import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetails from "./pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
