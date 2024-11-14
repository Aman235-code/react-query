import { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

export default function FetchOld() {
  const [posts, setposts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const getPostsData = async () => {
    try {
      setisLoading(true);
      const data = await fetchPosts();
      setposts(data);
      setisError(false);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisError(true);
      setisLoading(false);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  if (isLoading) return <p>Loading......</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      <ul>
        {posts?.map((post) => {
          const { id, name, username } = post;
          return (
            <>
              <p>{id}</p>
              <p>{name}</p>
              <p>{username}</p>
            </>
          );
        })}
      </ul>
    </div>
  );
}
