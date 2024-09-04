import { Link } from "react-router-dom";
import { categoriesData } from "../constants/categoriesData";

const CategoriesList = () => {
  return (
    <>
      <h1 className="text-xl md:text-3xl font-semibold mb-5">Browse Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categoriesData.map((category, index) => (
          <Link
            to={`/help/${category.title.toLowerCase()}`}
            key={index}
            className="border border-neutral-200 rounded-lg p-5 space-y-2 hover:shadow-lg transition-all duration-300"
          >
            {category.icon}
            <h1 className="font-semibold text-lg">{category.title}</h1>
            <p className="text-neutral-400 text-sm">{category.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoriesList;
