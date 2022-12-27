import FryingPan from "./FryingPan/FryingPan";
import Recipe from "./Recipe";
import Spinner from "./Spinner";

const Home = ({ recipes, loading, error }) => {
  return (
    <div
      className="recipies flex flex-wrap container justify-center mx-auto py-10 gap-10">
      {
        !loading && !error && (recipes.length === 0) &&
        <div>
          <p
            className="text-4xl text-rose-300 font-semibold">Nothing to show, please search something!</p>
          <FryingPan />
        </div>
      }
      {
        loading
          ?
          (error ? <p>{error}</p> : <Spinner />)
          :
          recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
      }
    </div>
  );
};

export default Home;