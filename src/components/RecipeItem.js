import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MdPermIdentity } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiKnifeFork, IconName } from "react-icons/gi";
import { BsCheck } from "react-icons/bs";

const RecipeItem = () => {
  const { id } = useParams();
  const { data: recipe, loading, error } = useFetch(id);
  const { publisher, title, servings, cooking_time, image_url, ingredients
  } = recipe;
  console.log(recipe);
  return (
    <div className="recipe-item-section">
      <div className="recipe-item-left">
        <img src={image_url} alt={title} />
        <div className="ingredients">
          <h2><span><GiKnifeFork /></span><span>Ingredients</span></h2>
          <ul>
            {ingredients?.map((ingredient, i) => <li key={i}><BsCheck /> {ingredient.quantity} {ingredient.unit} {ingredient.description}</li>)}
          </ul>
        </div>
      </div>
      <div className="recipe-item-right">
        <h4>{publisher}</h4>
        <h2>{title}</h2>
        <div>
          <p><span><MdPermIdentity /></span><span className="servings">Servings: {servings} people</span></p>
          <p><span><IoMdTime /></span><span className="cooking-time">Cooking Time: {cooking_time}</span></p>
        </div>
        <div className="buttons">
          <Link>Go Back</Link>
          <Link>Get Directions</Link>
          <Link><span>+</span>Save as Favourite</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;