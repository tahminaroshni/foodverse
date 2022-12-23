
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center text-md gap-3 bg-rose-100 h-32 w-full">
      <h2 className="font-bold italic text-2xl">food<span className="text-rose-500">verse</span></h2>
      <p>&copy; {new Date().getFullYear()} Foodverse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;