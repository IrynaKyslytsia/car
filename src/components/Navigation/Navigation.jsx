import { Link, Nav } from "./Navigation.styled";

const Navigation = () => {
    return (
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/favorites">Favorites</Link>
        </Nav>
    )
};

export default Navigation;