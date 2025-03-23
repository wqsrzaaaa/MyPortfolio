import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-2">Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-5 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
