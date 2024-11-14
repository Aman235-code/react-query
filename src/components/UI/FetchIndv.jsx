import { useQuery } from "@tanstack/react-query";
import { fetchIndvPost } from "../../api/api";
import { NavLink, useParams } from "react-router-dom";

export default function FetchIndv() {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", id], // use state
    queryFn: () => fetchIndvPost(id), // use effect
  });

  if (isPending) return <p>Loading......</p>;
  if (isError) return <p>{error.message || "Something went wrong"}</p>;
  return (
    <div>
      <ul>
        <li>
          <p>{data.id}</p>
          <p>{data.name}</p>
          <p>{data.username}</p>
        </li>
      </ul>
      <NavLink to={"/rq"}>
        {" "}
        <button>go back</button>
      </NavLink>
    </div>
  );
}
