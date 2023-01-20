import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
          {theme === 'dark' ? (
              <MdOutlineWbSunny
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="text-gray-500 dark:text-white text-3xl cursor-pointer"
              />
          ) : (
                  <MdOutlineDarkMode
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="text-gray-800 text-3xl cursor-pointer"
                  />
              )}
      </div>
  )
}

export default ThemeToggle