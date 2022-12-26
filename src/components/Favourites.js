import Recipe from "./Recipe";

const Favourites = ({ savedFavouriteItem }) => {

  return (
    <div className="favourite-recipe-section flex flex-col gap-5 items-center py-10">
      <h2 className="text-4xl text-rose-300 font-semibold mb-5">Your Favourite Items!</h2>
      <div className="favourite-recipes flex flex-wrap container justify-center mx-auto  gap-10">
        {
          savedFavouriteItem.map(favouriteItem => <Recipe key={favouriteItem.id} recipe={favouriteItem} />)
        }
      </div>
    </div>
  );
};

export default Favourites;