import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";

export default function FetchRq() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"], // use state
    queryFn: fetchPosts, // use effect
  });

  if (isPending) return <p>Loading......</p>;
  if (isError) return <p>{error.message || "Something went wrong"}</p>;

  return (
    <div>
      <ul>
        {data?.map((post) => {
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
