import { Link } from "react-router-dom";
import { useState } from "react";
import hamburgerMenu from './Images/hamburgerMenu.png';

const Navbar = (props) => {
  let categories = props.categories;

  const [navMenuDisplayed, setNavMenuDisplayed] = useState(false);
  const [category, setCategory] = useState(window.location.pathname.slice(1, window.location.pathname.length));
  const [menuController, setMenuController] = useState('hidden');

  const toggleNavMenu = () => {

    setNavMenuDisplayed(!navMenuDisplayed);
    setMenuController(!navMenuDisplayed ? "" : "hidden");
  }

  const choseCategory = (event) => {
    setCategory(event.target.innerText);
  }

  const choseCategoryAndToggle = (event) => {
    choseCategory(event);
    toggleNavMenu();
  }


  return (
    <nav className=" bg-gray-900 text-white z-40 drop-shadow-md fixed w-[100%] top-0 mb-2">

      {/* Nav Bar for mobile screens */}
      <div className="flex justify-between  py-4 px-3 md:hidden">
        <li className="list-none font-bold" key="app_name">NewsApp {category !== '' && '- ' + category}</li>
        <button className="" onClick={toggleNavMenu}><img src={hamburgerMenu} alt='menu' /></button>
      </div>

      <div className={menuController + " mt-1 md:hidden drop-shadow-md pb-2"}>
        <ul>
          {categories.map((item) => {
            return (
              <Link to={`./${item}`} key={item}>
                <li className="list-none cursor-pointer hover:bg-gray-800 active:bg-gray-700 py-1 px-2 rounded-md" key={item} onClick={choseCategoryAndToggle}>{item}</li>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* Nav Bar for bigger screens */}
      <div className="hidden md:block py-2 px-2">
        <ul className="flex gap-3">
          <li className="list-none font-bold py-2" key="app_name">NewsApp</li>
          {categories.map((item) => {
            return (

              <Link to={`./${item}`} key={item}>
                {category === item ? <li className="list-none cursor-default py-2 bg-gray-700 px-1 rounded-md" onClick={choseCategory}>{item}</li> :
                  <li className="list-none cursor-pointer py-2 hover:bg-gray-800 active:bg-gray-700 px-1 rounded-md" onClick={choseCategory}>{item}</li>}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;