import CategoriesList from "./components/CategoriesList";

const HelpPage = () => {
  return (
    <>
      <header className="h-[300px] bg-neutral-100 flex flex-col items-center justify-center space-y-5 text-center p-5">
        <h1 className="text-3xl md:text-5xl font-semibold px-5">
          We are here to help you
        </h1>
      </header>
      <div className="container mx-auto px-5 py-10 max-w-7xl">
        <CategoriesList />
      </div>
    </>
  );
};

export default HelpPage;
