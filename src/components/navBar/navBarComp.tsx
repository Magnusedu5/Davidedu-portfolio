import config from "../../utils/config";
import { Link, useLocation } from "react-router-dom";
import { icons } from "../../utils/data";

const NavBarComp = () => {
  const { routes } = config;
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
    <div className="flex gap-10 my-10 bg-[#212529] border-r-2 border-l-2 border-t-2 border-[#3B3B3B] text-center py-4 px-8 w-fit m-auto rounded-2xl z-50">
      {Object.entries(routes).map(([key, path]) => {
        const isActive = location.pathname === path;
        return (
          <Link
            key={key}
            to={path}
            className={`py-2 px-4 text-base font-normal rounded flex items-center gap-2 `}
          >
            {isActive && icons[key] && (
              <img src={icons[key]} alt={`${key} icon`} className="w-4 h-4" />
            )}
            <span
              className={`${isActive ? "text-[#F8F9FA]" : "text-[#6C757D]"}`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
          </Link>
        );
      })}
    </div>
    </div>
  );
};

export default NavBarComp;
