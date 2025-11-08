"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <header className={`site-header`}>
      <div className="container glasscard" style={{ marginTop: "20px" }}>
        <Link href="/">
          <div className="site-logo">
            {/* <Logo /> */}
            <Image
              alt=""
              src={"/images/logo_21_comp.png"}
              height={100}
              width={150}
            />
            {/* &nbsp;&nbsp;&nbsp;&nbsp; VakratundaSK - Paithani & Sarees */}
          </div>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          <Link href="/paithanis/all-paithani">All Paithani</Link>
          <Link href="/paithanis/semi-silk-paithani">Semi Silk Paithani</Link>
          <Link href="/paithanis/pure-silk-paithani">Pure Silk Paithani</Link>
          {/* <button className="site-nav__btn"><p>Account</p></button> */}
        </nav>

        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? "search-form--active" : ""
            }`}
          >
            <form className={`search-form`}>
              <i
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              ></i>
              <input
                type="text"
                name="search"
                placeholder="Enter the product you are looking for"
              />
            </form>
            <i
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            ></i>
          </button>
          <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>

              <span className="btn-cart__count">2</span>
            </button>
          </Link>
          <Link href="/login">
            <button className="site-header__btn-avatar">
              <i className="icon-avatar"></i>
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span></span>
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
