import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token"); // Get JWT token from cookies
    setIsLoggedIn(!!token); // Convert token existence to boolean
  }, []);

  return (
    <div className="w-full h-16 flex justify-center items-center nav-clr border-b border-white">
      <div className="w-5xl flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">
          <a href="/">MySpace</a>
        </div>

        {!isLoggedIn && ( // Only show buttons if user is NOT logged in
          <div className="flex gap-2">
            <a href="/login">
              <button className="w-auto flex justify-center items-center gap-2 h-8 bg-neutral-100 text-[#000] px-4 rounded-md font-medium cursor-pointer hover:bg-neutral-200">
                Register
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10C11.33 10 6 11.33 6 14V16H22V14C22 11.33 16.67 10 14 10ZM5 6V3H3V6H0V8H3V11H5V8H8V6M14 8C15.0609 8 16.0783 7.57857 16.8284 6.82843C17.5786 6.07828 18 5.06087 18 4C18 2.93913 17.5786 1.92172 16.8284 1.17157C16.0783 0.421427 15.0609 0 14 0C12.9391 0 11.9217 0.421427 11.1716 1.17157C10.4214 1.92172 10 2.93913 10 4C10 5.06087 10.4214 6.07828 11.1716 6.82843C11.9217 7.57857 12.9391 8 14 8Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </button>
            </a>
            <button className="w-auto flex justify-center items-center gap-2 h-8 bg-[#8E9DFF] px-4 text-[#000] rounded-md font-medium cursor-pointer hover:bg-[#8694F4]">
              Log In
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 4H20C20.55 4 21 4.45 21 5V19C21 19.55 20.55 20 20 20H13"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12H14.5"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 8.5L14.5 12L11 15.5"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
