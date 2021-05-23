import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";
import ListItem from "./ListItem";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function Nav() {
  const [show, handleShow] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [input, setInput] = useState("");
  const history = useHistory();
  const inputEl = useRef(null);
  const searchEl = useRef(null);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(input);
    setSearchOpen(false);
    inputEl.current.blur();
    setTimeout(() => setInput(""), 100);
  };

  const searchClick = () => {
    setSearchOpen(true);
    setTimeout(() => {
      inputEl.current.focus();
    }, 300);
  };

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="navBar">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />

        <ul>
          {/* <ListItem text="Home" exact to="/" />
          <ListItem text="Profile" to="/profile" /> */}
          <li className="item" onClick={() => history.push("/")}>
            Home
          </li>
          <li className="item" onClick={() => history.push("/profile")}>
            Profile
          </li>
          <li
            className={`app__search mobile ${
              searchOpen || input ? "open" : ""
            }`}
            onClick={searchClick}
          >
            <form>
              <input
                ref={inputEl}
                type="search"
                value={input}
                onBlur={() => setSearchOpen(false)}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search..."
              />
              {/* <button onClick={(e) => handleSearch(e)} type="submit"></button> */}
            </form>
            <SearchRoundedIcon
              style={{ fontSize: 20 }}
              className="app__searchIcon"
              onClick={searchClick}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
