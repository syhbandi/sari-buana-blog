import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getArticles } from "../../api/artikel";
import "./style.css";

const KebijakanPrivasi = () => {
  const [data, setData] = useState({});
  const query = useQuery({
    queryKey: ["kebijakan-privasi"],
    queryFn: () => getArticles(2),
  });

  useEffect(() => {
    if (query.data) setData(query.data.data?.data[0]);
  }, [query.data]);

  if (query.isLoading) return <>Memuat...</>;
  if (query.isError) return <>Ada error</>;
  return (
    <div className="container mx-auto px-3 md:px-10 mt-6">
      <h1 className="text-2xl font-semibold mb-3">Kebijakan Privasi</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.artikel }}
        className="ck-content font-roboto"
      />
    </div>
  );
};

export default KebijakanPrivasi;
