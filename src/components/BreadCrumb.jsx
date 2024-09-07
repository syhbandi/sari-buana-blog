import PropTypes from "prop-types";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
const BreadCrumb = ({ data }) => {
  return (
    <ul className="flex space-x-5 text-xs md:text-sm">
      {data?.map((item, index) => {
        if (item.active) return <li key={index}>{item?.title}</li>;

        return (
          <li key={index} className="flex space-x-5 font-medium">
            <Link to={item.href}> {item?.title} </Link>
            <MdOutlineNavigateNext />
          </li>
        );
      })}
    </ul>
  );
};

BreadCrumb.propTypes = {
  data: PropTypes.array,
};

export default BreadCrumb;
