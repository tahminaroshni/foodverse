import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const { image_url, publisher, title, id } = recipe;

  return (
    <div className="recipe p-5 bg-white w-80 h-80 rounded-xl shadow-lg shadow-rose-100">
      <div className="recipe-image flex overflow-hidden rounded-lg pb-5">
        <img className="w-full block h-40" src={image_url} alt={title} />
      </div>
      <div className="recipe-info">
        <h4 className="text-sky-400 text-xs uppercase tracking-widest font-semibold">{publisher}</h4>
        <h2 className="text-2xl truncate font-semibold">{title}</h2>
        <Link to={`/recipe-item/${id}`} className="bg-gradient-to-br from-rose-400 to-rose-600 p-3 px-8 uppercase text-sm tracking-wider text-rose-50 font-medium rounded-lg shadow-lg shadow-rose-100 hover:shadow-xl hover:shadow-rose-200 mt-2 inline-block"
        >View Recipe</Link>
      </div>
    </div>
  );
};

export default Recipe;