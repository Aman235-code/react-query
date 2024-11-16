import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function FetchRq() {
  const [pageNo, setPageno] = useState(0);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNo], // use state
    queryFn: () => fetchPosts(pageNo), // use effect
    // gcTime: 1000, // after 1 sec cache will be cleared and new req will bring data to the cache
    // staleTime: 5000, // req will be held till 5 sec then new req will go if you click till then no effect
    // refetchInterval: 1000, // after 1 sec req will be hit
    // refetchIntervalInBackground: true, // enables bg fetching of the ata when you're in different tab
    placeholderData: keepPreviousData, // only update when new data comes (shows loading) else no
  });

  if (isPending) return <p>Loading......</p>;
  if (isError) return <p>{error.message || "Something went wrong"}</p>;

  return (
    <div>
      <h1 className="text-center text-red-500 font-semibold p-5 text-2xl">
        React Query
      </h1>
      <ul className="text-center">
        {data?.map((post) => {
          const { id, name, username } = post;
          return (
            <div className="flex flex-col p-4 border-red-500 border-2" key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{name}</p>
                <p>{username}</p>
              </NavLink>
            </div>
          );
        })}
      </ul>

      <div>
        <button
          disabled={pageNo === 0 ? true : false}
          onClick={() => setPageno((prev) => prev - 3)}
        >
          prev
        </button>
        <h2>{pageNo / 3 + 1}</h2>
        <button onClick={() => setPageno((prev) => prev + 3)}>next</button>
      </div>
    </div>
  );
}
