import Navbar from "./Navbar";
import "../styles/header.css";

function Header() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <div className="header-spacer" aria-hidden="true"></div>
        </>
    );
}

export default Header;