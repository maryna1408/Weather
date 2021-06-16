import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import './Header.css'
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="logo">
              LOGO
            </Link>
            <SearchForm></SearchForm>
          </nav>
        </div>
      </header>
    </>
  );
}
