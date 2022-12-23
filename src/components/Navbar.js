import { NavLink } from "react-router-dom";

const Navbar = ({ searchQuery, handleInputField, handleFormSubmit, inputRef }) => {

  const navActive = ({ isActive }) => {
    return {
      color: isActive ? '#f43f5e' : null
    }
  }

  return (
    <nav className="navbar flex justify-between items-center py-8">
      <div className="logo">
        <h2 className="font-bold italic text-2xl">food<span className="text-rose-500">verse</span></h2>
      </div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          ref={inputRef}
          value={searchQuery}
          onChange={(e) => handleInputField(e)}
          className="search-field p-3 px-8 w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 bg-white/75"
          type="search"
          placeholder="Search recipe..." />
      </form>
      <div className="menu flex gap-5 text-gray-400 hover:text-gray-600 duration-300">
        <NavLink style={navActive} to='/'>Home</NavLink>
        <NavLink style={navActive} to='/favourites'>Favourites <span className="text-sky-400 font-extrabold">(0)</span> </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;