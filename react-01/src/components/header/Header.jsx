import "./Header.css";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
};

export default Header;