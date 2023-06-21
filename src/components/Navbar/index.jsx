import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../../assets/SRA.png";

const Navbar = () => {
  const [isExpand, setIsExpand] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);
  useEffect(() => {
    setIsExpand(false);
  }, [location]);
  return (
    <div className="bg-white shadow font-poppins sticky top-0">
      <div className="md:container md:mx-auto md:px-10 flex items-center justify-between px-4 py-4">
        <div className="font-semibold flex items-center gap-2">
          <img src={logo} alt="logo" className="w-6 h-6 object-contain" />
          <span className="text-xl">SARI BUANA</span>
        </div>
        <div className="flex items-center">
          {/* navbar desktop */}
          <div className=" items-center gap-6 hidden md:flex">
            {["Home"].map((menu, index) => (
              <Link key={index} to={"/"}>
                {menu}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsExpand((prev) => !prev)}
          >
            <MdMenu className="text-2xl" />
          </button>
          {/* navbar mobile */}
          <div
            className={`fixed top-0 left-0 w-screen h-screen after:bg-black after:bg-opacity-50 after:absolute after:w-full after:h-full after:z-[-1]  ${
              isExpand ? "block md:hidden" : "hidden"
            }`}
          >
            <div
              className={`absolute top-0 right-0 bg-white shadow w-64 h-full animate-menuOpen`}
            >
              <div className="flex items-center justify-end pr-4 py-5">
                <button onClick={() => setIsExpand(false)}>
                  <MdClose className="text-2xl" />
                </button>
              </div>
              <div className="px-6 flex flex-col gap-3">
                {["Home"].map((menu, index) => (
                  <Link key={index} to={"/"}>
                    {menu}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
