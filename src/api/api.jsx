import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async () => {
  const res = await api.get("/users");
  return res.status === 200 ? res.data : [];
};

// to fetch the individual data

export const fetchIndvPost = async (id) => {
  try {
    const res = await api.get(`users/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};
