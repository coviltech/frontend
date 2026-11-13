import style from "./header.module.css";
import type { Theme } from "../../types/theme";

import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

const Header = ({ theme, setTheme }: Theme) => {
  function Toogle() {
    setTheme(!theme);
  }
  return (
    <header className={style.header}>
      <h1>covil tech</h1>
      <div className={style.containerMenu}>
        <ul className={style.headerMenu}>
          <li>home</li>
          <li>sobre</li>
          <li className={style.user}>acesso</li>
          {theme ? (
            <FaRegMoon
              style={{ cursor: "pointer", transition: ".5s" }}
              onClick={Toogle}
            />
          ) : (
            <FaRegSun
              style={{ cursor: "pointer", transition: ".5s" }}
              onClick={Toogle}
            />
          )}
        </ul>
      </div>
    </header>
  );
};
export default Header;
