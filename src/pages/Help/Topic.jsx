import { Navigate, useParams } from "react-router-dom";
import { categoriesData } from "./constants/categoriesData";
import BreadCrumb from "../../components/BreadCrumb";
import CategoriesList from "./components/CategoriesList";

const TopicPage = () => {
  const { category, slug } = useParams();

  const categoryData = categoriesData.find(
    (data) => data.title.toLowerCase() === category
  );

  const topic = categoryData.topics?.find(
    (topic) =>
      topic.title.toLowerCase() === slug.split("-").join(" ").toLowerCase()
  );

  if (!categoryData || !topic) return <Navigate to={"/help"} />;

  return (
    <main className="container mx-auto max-w-7xl px-5 py-10">
      <h1 className="text-3xl font-semibold mb-5">{categoryData.title}</h1>
      <BreadCrumb
        data={[
          { title: "Help", href: "/help" },
          { title: categoryData.title, href: `/help/${category}` },
          { title: topic.title, active: true },
        ]}
      />
      <section className="my-20">
        <h1 className="text-4xl font-semibold text-center">{topic.title}</h1>
      </section>
      <CategoriesList />
    </main>
  );
};

export default TopicPage;
