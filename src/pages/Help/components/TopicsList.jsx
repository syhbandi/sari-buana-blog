import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopicsList = ({ category }) => {
  if (!category.topics) return <div>No Topics Found</div>;

  return (
    <>
      <ul className="mb-10">
        {category?.topics?.map((topic, index) => {
          const slug = topic.title.toLowerCase().split(" ").join("-");
          return (
            <li
              key={index}
              className="py-5 text-neutral-800 border-b border-neutral-200 text-lg font-medium"
            >
              <Link to={`/help/${category.title.toLowerCase()}/${slug}`}>
                {topic.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

TopicsList.propTypes = {
  category: PropTypes.any,
};

export default TopicsList;
