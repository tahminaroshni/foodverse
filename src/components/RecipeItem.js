import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MdPermIdentity } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
import { BsCheck } from "react-icons/bs";
import Spinner from "./Spinner";

const RecipeItem = ({ handleFavouriteItem, savedFavouriteItem, setSavedFavouriteItem }) => {
  const { id } = useParams();
  const { data: recipe, loading, error } = useFetch(id);
  const { publisher, title, servings, cooking_time, image_url, ingredients } = recipe;
  const [isSaved, setIsSaved] = useState(null);

  const navigate = useNavigate();

  const handleCookingTime = (time) => {
    const cookingTime = String(time / 60);
    return cookingTime.includes('.')
      ?
      `${cookingTime.slice(0, cookingTime.indexOf('.'))}hr` + ` ` + `${Number(cookingTime.slice(cookingTime.indexOf('.'))) * 60}min`
      :
      `${cookingTime}hr`;
  }

  useEffect(() => {
    if (recipe) {
      setIsSaved(savedFavouriteItem.some(item => item.id === recipe.id));
    }
    else return;
  }, [recipe])

  return (
    <div className="text-center">
      {
        loading
          ?
          (error ? <p>{error}</p> : <Spinner />)
          :
          <div className="recipe-item-section grid grid-cols-2 gap-10 py-12 container mx-auto justify-center">
            <div className="recipe-item-left">
              <div className="  overflow-hidden">
                <img className="w-full object-cover rounded-lg hover:scale-110 duration-300" src={image_url} alt={title} />
              </div>
              <div className="ingredients mt-10">
                <h2 className="flex gap-4 text-4xl mb-5">
                  <span className="text-rose-500"><GiKnifeFork /></span>
                  <span className=" font-medium">Ingredients</span>
                </h2>
                <ul>
                  {ingredients?.map((ingredient, i) => <li className="flex items-center gap-2" key={i}>
                    <span><BsCheck /></span>
                    <span>{ingredient.quantity}{ingredient.unit} {ingredient.description}</span>
                  </li>)}
                </ul>
              </div>
            </div>
            <div className="recipe-item-right flex flex-col gap-5 items-start">
              <h4 className="uppercase font-semibold text-violet-500 tracking-widest">{publisher}</h4>
              <h2 className=" text-4xl">{title}</h2>
              <div className="flex justify-between gap-20 tracking-wider">
                <p className="flex gap-2  items-center text-orange-500">
                  <span><MdPermIdentity /></span>
                  <span className="servings uppercase font-medium">Servings: {servings} people</span>
                </p>
                <p className="flex gap-2  items-center text-orange-500">
                  <span><IoMdTime /></span>
                  <span className="cooking-time font-medium">
                    <span className="uppercase">Cooking Time: </span>
                    {cooking_time < 60 ? <span>{cooking_time} min</span> : handleCookingTime(cooking_time)}
                  </span>
                </p>
              </div>
              <div className="buttons flex gap-5 uppercase">
                <Link
                  onClick={() => navigate(-1)}
                  className="p-3 px-5 rounded-md bg-rose-500 text-rose-50  hover:bg-gray-600 duration-300 text-sm">Go Back
                </Link>
                <Link className="p-3 px-5 rounded-md bg-sky-400 text-sky-50  hover:bg-gray-600 duration-300 text-sm">Get Directions</Link>
                <NavLink to='/favourites' className={`flex gap-2 text-sm p-3 px-5 rounded-md bg-sky-200 text-sky-500 hover:bg-sky-500 hover:text-sky-50 font-medium uppercase tracking-wider duration-300 ${isSaved && ' bg-orange-500 text-orange-50 hover:bg-orange-200 hover:text-orange-500 duration-300'}`}
                  onClick={() => handleFavouriteItem(id)}>
                  {!isSaved ?
                    <>
                      <span>+</span>
                      <span>Save as Favourite</span>
                    </>
                    :
                    <>
                      <span>-</span>
                      <span>Remove from Favourite</span>
                    </>
                  }
                </NavLink>
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default RecipeItem;