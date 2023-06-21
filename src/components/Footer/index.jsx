import { Link } from "react-router-dom";
import logo from "../../assets/SRA.png";

const Footer = () => {
  return (
    <div className="md:container md:mx-auto md:px-10 bg-gray-50 border-t border-gray-300 p-4">
      <div className="text-center">
        &copy; {new Date().getFullYear()}{" "}
        <Link to={"/"} className="mx-1">
          SARI BUANA
        </Link>{" "}
        all rights reserved
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <Link to={"/kebijakan-privasi"}>Privacy Policy</Link>
        <Link to={"/syarat-ketentuan"}>Term & Condition</Link>
      </div>
    </div>
  );
};

export default Footer;
