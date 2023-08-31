import { useRouteError } from "react-router-dom";

interface CustomError {
  statusText?: string;
  status?: number;
  message?: string;
}

function ErrorPage() {
  const error = useRouteError() as CustomError;

  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <img
        src="https://media.tenor.com/vXdLito9Qt0AAAAd/cat-shaking-head-funny-cat-face.gif"
        alt=""
        className="mb-4 rounded-3xl dark:shadow-none border-4 border-gray-900 shadow-lg dark:border-gray-100"
      />
      <h1 className="text-4xl font-bold mb-2">Na geci!</h1>
      <p className="text-lg mb-4">Valami nem jó!</p>
      <p className="text-gray-600">
        <i>
          {error.status || "500"}{" "}
          {error.statusText || "Én nem tudom mi történt!"}
        </i>
      </p>
    </div>
  );
}

export default ErrorPage;
