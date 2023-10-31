import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

// Styles
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-left">
          <div className="item">
            <img src="../../../public/img/arg-flag.png" />
            <ArrowDropDownIcon />
          </div>
          <div className="item">
            <span>ARS</span>
            <ArrowDropDownIcon />
          </div>
          <div className="item">
            <Link className="link" to={"/products/1"}>
              Vino Tinto
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/2"}>
              Vino Blanco
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/3"}>
              Vino Rosado
            </Link>
          </div>
        </div>

        <div className="navbar-center">
          <Link className="link" to={"/"}>
            Reina de Copas
          </Link>
        </div>
        <div className="navbar-right">
          <div className="item">
            <Link className="link" to={"/"}>
              Inicio
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/about-us"}>
              Sobre nosotros
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/contact"}>
              Contacto
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <AccountCircleIcon />
            <FavoriteIcon />
            <div className="cartIcon">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
