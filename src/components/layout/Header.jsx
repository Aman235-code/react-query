import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <NavLink to={"/"}>React Query</NavLink>
        <ul>
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
