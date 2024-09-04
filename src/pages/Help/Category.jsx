import { Navigate, useParams } from "react-router-dom";
import CategoriesList from "./components/CategoriesList";
import TopicsList from "./components/TopicsList";
import { categoriesData } from "./constants/categoriesData";

const CategoryPage = () => {
  const { category } = useParams();
  const data = categoriesData.find(
    (data) => data.title.toLowerCase() === category
  );

  if (!data) return <Navigate to={"/help"} />;

  return (
    <main className="container mx-auto max-w-7xl px-5 py-10 space-y-10">
      <h1 className="text-3xl font-semibold capitalize">{data.title}</h1>
      <TopicsList category={data} />
      <CategoriesList />
    </main>
  );
};

export default CategoryPage;
