import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />

      <div className="flex flex-col justify-center items-center space-y-10 font-sans w-full h-full">
        <h1 className="text-5xl text-red-700">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-xl text-red-700">
            {error.statusText || error.message}
          </i>
        </p>
      </div>
    </div>
  );
}
