import { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RecipeItem from "./components/RecipeItem";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const inputRef = useRef(null);

  const handleInputField = (e) => {
    setSearchQuery(e.target.value);
    // console.log(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getData();

    setSearchQuery('');
    inputRef.current.blur();
  }

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`);
      if (!res.ok) throw new Error('Something went wrong!');
      const data = await res.json();
      if (data.results === 0) throw new Error('No recipes found!')
      setRecipes(data?.data.recipes);
      // console.log(data);
      setLoading(false);
    }
    catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="App min-h-screen bg-rose-50 text-gray-600 text-lg">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleInputField={handleInputField} inputRef={inputRef} handleFormSubmit={handleFormSubmit} />
        <Routes>
          <Route path="/" element={<Home recipes={recipes} loading={loading} error={error} />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path='/recipe-item/:id' element={<RecipeItem />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
