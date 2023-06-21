import api from "./api.config";

export const getArticles = async (key) => {
  return await api.get("articles/show/" + key);
};
