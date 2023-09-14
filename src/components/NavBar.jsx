import CartWidget from "./CartWidget";
import Brand from "./brand";
import CategoryItem from "./categoryItem";
import Menubutton from "./menuButton";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <Brand />
        <Menubutton />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <CategoryItem isActive={true} name="OFERTAS" />
            </li>
            <li className="nav-item">
              <CategoryItem isActive={false} name="PALETAS" />
            </li>
            <li className="nav-item">
              <CategoryItem isActive={false} name="ACCESORIOS" />
            </li>
            <li className="nav-item">
              <CategoryItem isActive={false} name="INDUMENTARIA" />
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar