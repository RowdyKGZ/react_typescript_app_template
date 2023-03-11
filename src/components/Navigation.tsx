import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 items-center bg-gray-500 text-white">
      <span className="font-bold">React APP</span>
      <span>
        <Link to="/" className="mr-2">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
}

export default Navigation;
