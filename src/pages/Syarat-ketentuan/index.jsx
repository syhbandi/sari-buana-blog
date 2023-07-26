import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getArticles } from "../../api/artikel";
import "./../Kebijakan-privasi/style.css";

const SyaratKetentuan = () => {
  const [data, setData] = useState({});
  const query = useQuery({
    queryKey: ["syarat-ketentuan"],
    queryFn: () => getArticles(1),
  });

  useEffect(() => {
    if (query.data) setData(query.data.data?.data[0]);
  }, [query.data]);

  if (query.isLoading)
    return (
      <div className="container mx-auto px-4 md:px-10 mt-6">Loading...</div>
    );
  if (query.isError)
    return (
      <div className="container mx-auto px-4 md:px-10 mt-6">
        {query.error?.message}
      </div>
    );

  return (
    <div className="container mx-auto md:px-10 px-4 mt-6">
      <h1 className="text-2xl font-semibold mb-3">Term & Condition</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.artikel }}
        className="ck-content font-roboto break-words"
      />
    </div>
  );
};

export default SyaratKetentuan;
