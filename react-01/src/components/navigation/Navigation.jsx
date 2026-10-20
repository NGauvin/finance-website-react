import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <button aria-label="Toggle Navigation">&#9776;</button>
            <ul>
                <li><a href="#">Finance Overview</a></li>
                <li><a href="#">Time Value of Money</a></li>
                <li><a href="#">Debt</a></li>
                <li><a href="#">Equity</a></li>
                <li><a href="#">Alternatives</a></li>
                <li><a href="#">Applications</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;