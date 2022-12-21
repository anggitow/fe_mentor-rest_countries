import { Icon } from "@iconify/react";
import { useThemeStore } from "@store/storeTheme";

const Header = () => {
  const { theme, setTheme } = useThemeStore();

  const handleClick = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div className="navbar shadow-md text-primary-content bg-secondary h-20">
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-extrabold">Where in the world?</div>
        <button
          className="font-semibold flex items-center gap-1.5"
          onClick={handleClick}
        >
          {theme == "light" ? (
            <>
              <Icon icon="material-symbols:dark-mode-outline-rounded" />
              Dark Mode
            </>
          ) : (
            <>
              <Icon icon="material-symbols:light-mode-outline" />
              Light Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
