const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>FOODS</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">Food Zone</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>FOODS</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Sign up</a>
      </div>
    </div>
  );
};

export default Header;
