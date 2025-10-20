import Styles from "./Header.module.css";
import "../app/globals.css";
function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <i className="bi bi-list menu-icon"></i>
        <i className="bi bi-bounding-box"></i>
      </div>
      <div className={Styles.brandname}>LOGO</div>
      <div className={Styles.headsections}>
        <ul className={Styles.headlist}>
          <li>
            <i className="bi bi-search icon"></i>
          </li>
          <li>
            <i className="bi bi-heart icon"></i>
          </li>
          <li>
            <i className="bi bi-bag icon"></i>
          </li>
          <li>
            <i className="bi bi-person-circle icon"></i>
          </li>
        </ul>
        <select name="language" id="" className={Styles.language}>
          <option value="">Eng</option>
        </select>
      </div>
    </header>
  );
}
export default Header;
