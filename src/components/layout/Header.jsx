import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row justify-center items-center bg-gray-800 text-white font-bold">
      <div className="flex justify-center p-4 gap-4 items-start">
        <NavLink to={"/"} className="flex items-start">
          {" "}
          React Query
        </NavLink>
        <ul className="flex flex-row gap-3">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/trad"}>FechOld</NavLink>
          </li>
          <li>
            <NavLink to={"/rq"}>FetchRQ</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
