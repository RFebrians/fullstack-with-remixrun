import { Link } from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Forum Sample",
    description: "An Application Fullstack using Remix",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Forum <span>Remix</span>
        </h1>
        <h4> An Application using Remix JS 
          </h4>
          <br>
        </br>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Go To Index</Link>
            </li>
            <li>
              <Link reloadDocument to="/jokes.rss">
                RSS
              </Link>
            </li>
            <Link reloadDocument to="/my-first-post.md">
                Posts
              </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
