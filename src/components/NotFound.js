import { useNavigate } from "react-router-dom";
import FryingPan from "./FryingPan/FryingPan";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHomeButton = () => {
    navigate('/');
  }

  return (
    <div className="text-center py-10">
      <h2 className="text-4xl text-rose-700 font-semibold mb-8">Page not found!</h2>
      <button
        onClick={handleGoHomeButton}
        className="bg-sky-400 text-sky-50  p-3 px-5 rounded-full hover:bg-gray-600 duration-300">Go Home
      </button>
      <FryingPan />
    </div>
  );
};

export default NotFound;